# 🚀 Deployment Guide - Memorial Planner

## Pre-Deployment Checklist

Before deploying, make sure you have:
- [ ] GitHub account created
- [ ] Code pushed to GitHub repository
- [ ] Supabase account and project set up
- [ ] Stripe account created (if using payments)
- [ ] Domain name purchased (optional but recommended)

## Option 1: Deploy to Vercel (Recommended - Easiest)

### Why Vercel?
- ✅ Made by Next.js creators - perfect compatibility
- ✅ Zero configuration needed
- ✅ Automatic HTTPS
- ✅ Free tier is generous (100GB bandwidth/month)
- ✅ Automatic deployments from GitHub
- ✅ Built-in analytics

### Steps:

1. **Push Your Code to GitHub**
   ```bash
   cd funeral-planner
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/funeral-planner.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" (use GitHub to sign in)
   - Click "New Project"
   - Import your `funeral-planner` repository
   - Vercel auto-detects Next.js - no configuration needed!
   - Click "Deploy"

3. **Add Environment Variables**
   After deployment, go to:
   - Project Settings → Environment Variables
   - Add all variables from `.env.local.example`:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
     - `STRIPE_SECRET_KEY`
     - `SENDGRID_API_KEY`
   - Click "Save"
   - Redeploy (Deployments → click "..." → Redeploy)

4. **Connect Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your domain (e.g., memorialplanner.com)
   - Follow DNS instructions from your domain registrar
   - Vercel automatically provisions SSL certificate

🎉 **Done!** Your site is live at `https://your-project.vercel.app`

---

## Option 2: Deploy to Netlify (Alternative)

### Steps:

1. **Push code to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

3. **Add Environment Variables**
   - Go to Site Settings → Environment Variables
   - Add all your environment variables
   - Trigger new deployment

4. **Configure for Next.js**
   - Install Next.js plugin: Site Settings → Build & Deploy → Plugins
   - Search for "Next.js" and install "Essential Next.js Plugin"

---

## Post-Deployment Tasks

### 1. Test Your Live Site
- [ ] Landing page loads correctly
- [ ] Forms work (email capture)
- [ ] All links work
- [ ] Mobile responsive
- [ ] HTTPS is enabled

### 2. Set Up Monitoring
- [ ] Enable Vercel Analytics (free)
- [ ] Set up Google Analytics
- [ ] Configure Sentry for error tracking

### 3. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Verify domain ownership
- [ ] Create robots.txt file
- [ ] Add meta tags for social sharing

### 4. Marketing Preparation
- [ ] Create social media accounts
- [ ] Prepare launch announcement
- [ ] Set up email capture (connect to Mailchimp/ConvertKit)

---

## Database Setup (Supabase)

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create new project
   - Choose region closest to your users
   - Save database password!

2. **Run SQL to Create Tables**
   - Go to SQL Editor in Supabase dashboard
   - Paste the SQL from README.md
   - Click "Run"

3. **Enable Authentication**
   - Go to Authentication → Providers
   - Enable Email provider
   - Configure email templates (optional)

4. **Get API Credentials**
   - Go to Settings → API
   - Copy "Project URL" and "anon public" key
   - Add to Vercel environment variables

---

## Stripe Setup (For Payments)

1. **Create Stripe Account**
   - Go to [stripe.com](https://stripe.com)
   - Complete business verification

2. **Create Products**
   - Go to Products → Add Product
   - Create "Premium" product ($9.99/month recurring)
   - Create "Business" product ($149/month recurring)
   - Note the Price IDs

3. **Get API Keys**
   - Go to Developers → API Keys
   - Copy Publishable key (starts with pk_)
   - Copy Secret key (starts with sk_)
   - Add to Vercel environment variables

4. **Set Up Webhooks**
   - Go to Developers → Webhooks
   - Add endpoint: `https://your-domain.com/api/webhooks/stripe`
   - Select events: `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`
   - Copy webhook signing secret
   - Add to environment variables

---

## Custom Domain Setup

### If you bought from Namecheap:
1. Go to Namecheap dashboard
2. Click "Manage" next to your domain
3. Advanced DNS tab
4. Add CNAME record:
   - Host: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: Automatic
5. Add A record:
   - Host: `@`
   - Value: `76.76.21.21` (Vercel's IP)
   - TTL: Automatic

### If you bought from Google Domains:
1. Go to Google Domains
2. Click on your domain → DNS
3. Custom records:
   - Type: CNAME, Name: www, Data: cname.vercel-dns.com
   - Type: A, Name: @, Data: 76.76.21.21

⏰ **Note:** DNS changes take 24-48 hours to propagate

---

## Troubleshooting

### Build Fails on Vercel
- Check build logs for errors
- Ensure all dependencies are in package.json
- Verify Node.js version matches local (18+)

### Environment Variables Not Working
- Make sure they're in Vercel dashboard, not just .env.local
- Redeploy after adding environment variables
- Check for typos in variable names

### Database Connection Issues
- Verify Supabase URL and key are correct
- Check Supabase project is not paused (free tier pauses after 7 days of inactivity)
- Enable Row Level Security policies

### Stripe Webhooks Not Working
- Verify webhook URL is correct (https://)
- Check webhook signing secret is in environment variables
- Test webhooks using Stripe CLI locally first

---

## Cost Breakdown (Monthly)

| Service | Free Tier | Paid Tier |
|---------|-----------|-----------|
| Vercel | 100GB bandwidth | $20/mo (Pro) |
| Supabase | 500MB database, 50K users | $25/mo (Pro) |
| Stripe | Free | 2.9% + $0.30/transaction |
| Domain | - | $12/year |
| **Total** | **~$0/mo** | **~$46/mo** |

You can run on free tier until you hit limits!

---

## Next Steps After Deployment

1. **Marketing**
   - Submit to Product Hunt
   - Post on Reddit (r/Entrepreneur, r/SideProject)
   - Share on Twitter/LinkedIn
   - Reach out to funeral homes

2. **Analytics**
   - Set up conversion tracking
   - Monitor user behavior
   - A/B test pricing

3. **Customer Feedback**
   - Add feedback widget
   - Send surveys to early users
   - Iterate on features

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Supabase Docs: https://supabase.com/docs
- Stripe Docs: https://stripe.com/docs

Good luck with your launch! 🚀
