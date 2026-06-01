// Supabase Edge Function: ai-chat
// Deploy with: supabase functions deploy ai-chat

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type ChatPayload = {
  prompt?: string;
  systemContext?: string;
  history?: Array<{ role: string; content: string }>;
  imageDataUrl?: string | null;
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const deepseekKey = Deno.env.get("DEEPSEEK_API_KEY");
    if (!deepseekKey) {
      return new Response(
        JSON.stringify({ error: "Missing DEEPSEEK_API_KEY secret in Supabase." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const body = (await req.json()) as ChatPayload;
    console.log('Received payload:', JSON.stringify(body));
    const prompt = (body.prompt || "").trim();
    const context = body.systemContext || "";
    const history = Array.isArray(body.history) ? body.history.slice(-12) : [];
    const hasImage = !!body.imageDataUrl;

    if (!prompt && !hasImage) {
      return new Response(
        JSON.stringify({ error: "Prompt or image is required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    if (prompt.toLowerCase() === "test") {
      return new Response(JSON.stringify({ reply: "Mock AI response" }), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // Since DeepSeek-V3 is text-only, we append a note if an image is provided
    let finalPrompt = prompt;
    if (hasImage) {
      finalPrompt = `[User provided an image of a plant/field] ${prompt || "Analyze this image for me."}`;
      if (!prompt) {
        // If only an image is sent, we inform the AI to ask for a description
        finalPrompt = "I have provided an image of a plant/field. Since you are a text-only model, please acknowledge that you received the image data but cannot see it, and ask me to describe the symptoms (pests, leaf color, etc.) so you can help.";
      }
    }

    const messages = [
      { role: "system", content: context },
      ...history.map((m) => ({ role: m.role, content: m.content })),
      { role: "user", content: finalPrompt },
    ];

    const deepseekRes = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${deepseekKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages,
        stream: false,
      }),
    });

    const deepseekData = await deepseekRes.json();
    if (!deepseekRes.ok) {
      return new Response(
        JSON.stringify({
          error: deepseekData?.error?.message || "DeepSeek API request failed.",
          details: deepseekData,
        }),
        { status: deepseekRes.status, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const reply = deepseekData?.choices?.[0]?.message?.content || "No response from model.";
    return new Response(
      JSON.stringify({ reply }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: `Function failed: ${String(error)}` }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
