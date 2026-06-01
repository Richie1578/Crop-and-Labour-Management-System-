# Supabase AI Setup

This project now calls a Supabase Edge Function for AI chat.

## 1) Install Supabase CLI

Use the official docs: https://supabase.com/docs/guides/cli

## 2) Link project and deploy

From project root:

```bash
supabase login
supabase link --project-ref YOUR_PROJECT_REF
supabase db push                # This sets up all tables & security
supabase functions deploy ai-chat
supabase functions deploy send-sms
```

## 3) Set secrets in Supabase

### AI (DeepSeek)
```bash
supabase secrets set DEEPSEEK_API_KEY=your_deepseek_key_here
```

### SMS (Africa's Talking)
```bash
supabase secrets set AT_USERNAME=your_at_username
supabase secrets set AT_API_KEY=your_at_api_key
supabase secrets set AT_MODE=sandbox # or production
```

## 4) Database & Security

All tables and Row Level Security (RLS) policies are automatically created when you run `supabase db push`. You can verify these in your Supabase Dashboard.

**Tables included:**
- `profiles`: User settings and farm name.
- `crops`: Planted crops tracking.
- `fields`: GPS mapped farm plots.
- `workers`: Employee records.
- `tasks`: Daily work assignments.
- `harvests`: Yield and revenue logs.
- `inputs`: Fertilizer/Seed cost tracking.
- `attendance`: Worker daily logs.
- `sms_log`: History of sent messages.

## 5) Final Production Checklist

1. **Environment Variables**: Ensure `SUPABASE_URL` and `SUPABASE_ANON_KEY` are not hardcoded in the frontend. Use the `localStorage` method or a secure build-time injection.
2. **Secrets**: Confirm all secrets are set in Supabase (`DEEPSEEK_API_KEY`, `AT_USERNAME`, `AT_API_KEY`).
3. **RLS Policies**: Run the SQL script above to protect user data.
4. **Site URL**: In Supabase Auth settings, update the "Site URL" to your production domain (e.g., `https://farmtrack-zambia.vercel.app`).
5. **CORS**: If hosting on a specific domain, update `corsHeaders` in your Edge Functions to restrict origins.

## 6) Adding Your Custom Domain

To add your own domain (e.g., `www.yourfarm.com`) to the web app, follow these steps:

### 1. Host the Frontend
- **Recommended**: Use [Vercel](https://vercel.com) or [Netlify](https://netlify.com). They are free for small projects and offer automatic SSL (HTTPS).
- Connect your GitHub repository or upload the project folder.
- Add your custom domain in the hosting provider's dashboard (Settings -> Domains).

### 2. Update Supabase Auth Settings
Once your frontend is hosted on your custom domain:
1. Go to **Supabase Dashboard** -> **Authentication** -> **URL Configuration**.
2. **Site URL**: Change this to your new domain (e.g., `https://www.yourfarm.com`).
3. **Redirect URLs**: Add your domain to the list of allowed redirect URLs.

### 3. Update Edge Function CORS
In your Edge Functions (e.g., `ai-chat/index.ts` and `send-sms/index.ts`), ensure the `corsHeaders` allow your new domain:
```typescript
const corsHeaders = {
  "Access-Control-Allow-Origin": "https://www.yourfarm.com", // Or "*" for all
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
```
*Note: Using `"*"` is easier but less secure than specifying your exact domain.*

## 7) Configure frontend in browser

1. Open your web app (either locally or on your custom domain).
2. Go to the **Settings** page in the sidebar.
3. Enter your **Supabase URL** and **Anon Key**.
4. Click **Save Connection**. The app will reload and connect to your cloud database.
5. (Optional) Set your preferred language (English or Nyanja) and SMS Sender ID.

---
**Congratulations!** Your FarmTrack system is now fully live and secure.

