// Supabase Edge Function: send-sms
// Proxy for Africa's Talking SMS API

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { to, message, senderId } = await req.json();

    const username = Deno.env.get("AT_USERNAME");
    const apiKey = Deno.env.get("AT_API_KEY");
    const mode = Deno.env.get("AT_MODE") || "sandbox";

    if (!username || !apiKey) {
      return new Response(
        JSON.stringify({ error: "Missing AT_USERNAME or AT_API_KEY in Supabase secrets." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const host = mode === "sandbox" ? "https://api.sandbox.africastalking.com" : "https://api.africastalking.com";
    const endpoint = `${host}/version1/messaging`;

    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("to", to);
    formData.append("message", message);
    if (senderId) formData.append("from", senderId);

    const atRes = await fetch(endpoint, {
      method: "POST",
      headers: {
        "apiKey": apiKey,
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    const responseText = await atRes.text();
    let atData;
    try {
      atData = JSON.parse(responseText);
    } catch (e) {
      return new Response(
        JSON.stringify({ error: "Invalid response from Africa's Talking API.", details: responseText }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!atRes.ok) {
      return new Response(
        JSON.stringify({ error: atData.errorMessage || atData.message || "Africa's Talking API error.", details: atData }),
        { status: atRes.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify(atData),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: String(error) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
