# Deployment Guide

## Pre-Deployment Checklist

- [x] All dependencies installed
- [x] TypeScript configured
- [x] Tailwind CSS configured
- [x] ESLint configured
- [x] Environment variables documented
- [x] README.md created
- [x] .gitignore configured

## Quick Deploy to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: GitHub Integration

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit: OpenClawChain Skills"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"

Your site will be live at: `https://your-project.vercel.app`

## Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

## Deploy to Other Platforms

### AWS Amplify

1. Go to AWS Amplify Console
2. Connect your repository
3. Build settings (auto-detected):
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

### Cloudflare Pages

1. Go to Cloudflare Pages
2. Connect your repository
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Framework preset: Next.js

### Docker

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t openclawchain-skills .
docker run -p 3000:3000 openclawchain-skills
```

## Environment Variables

If you need environment variables in production:

1. Create `.env.local` (not committed to git)
2. Add variables to your hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables
   - AWS: Amplify Console → Environment Variables

Example:
```bash
NEXT_PUBLIC_API_URL=https://api.openclawchain.org
```

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS

## Performance Optimization

The app is already optimized with:
- ✅ Static generation where possible
- ✅ Image optimization (Next.js built-in)
- ✅ Code splitting
- ✅ CSS optimization
- ✅ Font optimization (Google Fonts)

## Monitoring

After deployment, monitor:
- Page load times
- Core Web Vitals
- Error rates
- User analytics

Recommended tools:
- Vercel Analytics (built-in)
- Google Analytics
- Sentry (error tracking)
- LogRocket (session replay)

## Post-Deployment

1. Test all pages:
   - Home page: `/`
   - Skill detail: `/skills/occ-usdc`

2. Verify:
   - Dark/light mode toggle works
   - Links open correctly
   - Markdown renders properly
   - Mobile responsive

3. Share:
   - Update GitHub README with live URL
   - Share on social media
   - Add to OpenClawChain documentation

## Troubleshooting

### Build fails
```bash
# Check build locally first
npm run build

# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### 404 errors
- Ensure all pages are in `src/app/` directory
- Check file naming (page.tsx, layout.tsx)
- Verify dynamic routes

### Styling issues
- Check Tailwind config
- Verify CSS imports in layout.tsx
- Clear browser cache

## Rollback

If something goes wrong:

**Vercel:**
```bash
vercel rollback
```

**Netlify:**
- Go to Deploys tab
- Click on previous successful deploy
- Click "Publish deploy"

## Support

- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- GitHub Issues: Create an issue in your repository

---

Happy deploying! 🚀
