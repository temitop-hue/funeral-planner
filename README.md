# 🕊️ Memorial Planner - Funeral Planning Checklist Generator

A compassionate web application that helps families plan meaningful funeral and memorial services with guided checklists, templates, and organizational tools.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- A Supabase account (free tier available)
- Stripe account (for payment processing)

### Installation

1. **Clone or download this project**
   ```bash
   cd funeral-planner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Then edit `.env.local` and add your credentials:
   - Supabase URL and anon key (from supabase.com)
   - Stripe publishable and secret keys (from stripe.com)
   - SendGrid API key (optional, for emails)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 What's Included

### Current Features (Landing Page)
- ✅ Beautiful, responsive landing page
- ✅ Hero section with email capture
- ✅ Features showcase
- ✅ Pricing tiers (Free, Premium, Business)
- ✅ "How It Works" section
- ✅ Professional footer

### Next Steps to Build
1. **User Authentication** - Sign up/login with Supabase Auth
2. **Checklist Builder** - Drag-and-drop task management
3. **Templates System** - Pre-built checklists for different service types
4. **PDF Export** - Generate downloadable PDFs
5. **Budget Tracker** - Track funeral expenses
6. **Payment Integration** - Stripe subscription handling

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payments**: Stripe
- **Email**: SendGrid (optional)
- **Hosting**: Vercel (recommended)

## 📁 Project Structure

```
funeral-planner/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Landing page
│   └── globals.css       # Global styles
├── components/           # Reusable React components (to be added)
├── lib/                  # Utility functions (to be added)
├── public/              # Static assets (to be added)
├── package.json         # Dependencies
└── README.md           # This file
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables
6. Click "Deploy"

Your site will be live in ~2 minutes!

### Alternative: Deploy to Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import existing project"
4. Connect GitHub and select repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Add environment variables
8. Click "Deploy"

## 💳 Setting Up Services

### Supabase (Database & Auth)
1. Go to [supabase.com](https://supabase.com) and create account
2. Create a new project
3. Go to Settings → API to get your URL and anon key
4. Create these tables in SQL Editor:

```sql
-- Users table (automatically created by Supabase Auth)

-- Checklists table
CREATE TABLE checklists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  title TEXT NOT NULL,
  template_type TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tasks table
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  checklist_id UUID REFERENCES checklists(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT FALSE,
  priority TEXT,
  due_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE checklists ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- Policies (users can only see their own data)
CREATE POLICY "Users can view own checklists" ON checklists
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own checklists" ON checklists
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own checklists" ON checklists
  FOR UPDATE USING (auth.uid() = user_id);
```

### Stripe (Payments)
1. Go to [stripe.com](https://stripe.com) and create account
2. Get API keys from Dashboard → Developers → API keys
3. Create products:
   - Premium: $9.99/month recurring
   - Business: $149/month recurring
4. Set up webhook for subscription events

### SendGrid (Optional - Email)
1. Go to [sendgrid.com](https://sendgrid.com)
2. Create account and verify sender email
3. Get API key from Settings → API Keys

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js` to change the primary color scheme:

```js
colors: {
  primary: {
    // Change these hex values
    500: '#3b82f6',
    600: '#2563eb',
    // etc.
  }
}
```

### Update Content
- Landing page copy: `app/page.tsx`
- Site title/description: `app/layout.tsx`
- Logo and branding: Replace `<Heart>` icon in components

## 📝 Development Roadmap

### Phase 1 (Weeks 1-2) - MVP ✅
- [x] Landing page design
- [x] Project setup
- [ ] User authentication
- [ ] Basic checklist CRUD

### Phase 2 (Weeks 3-4)
- [ ] Template system
- [ ] Drag-and-drop tasks
- [ ] PDF generation
- [ ] Budget tracker

### Phase 3 (Weeks 5-6)
- [ ] Stripe integration
- [ ] User dashboard
- [ ] Email notifications
- [ ] Mobile responsive refinement

### Phase 4 (Weeks 7-8)
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Performance testing
- [ ] Launch marketing

## 🤝 Contributing

This is a commercial project, but if you're building something similar, feel free to use this as a starting point!

## 📄 License

Proprietary - All rights reserved

## 💡 Support

For questions or issues:
- Create an issue in the GitHub repo
- Email: support@memorialplanner.com (update with your email)

## 🎯 Business Model

- **Free Tier**: 1 checklist, basic templates (lead generation)
- **Premium**: $9.99/mo - Unlimited checklists, all features
- **Business**: $149/mo - White-label for funeral homes

Target: 100 premium users = $1,000/mo revenue

---

Built with ❤️ to help families during difficult times
