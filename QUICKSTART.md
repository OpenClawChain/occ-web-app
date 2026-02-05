# Quick Start Guide

Get the OpenClawChain Skills website running in 3 steps:

## 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14 (React framework)
- TypeScript
- Tailwind CSS (styling)
- React Markdown (for skill documentation)
- Lucide React (icons)
- next-themes (dark mode)

## 2. Run Development Server

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

## 3. Build for Production

```bash
npm run build
npm start
```

## What You'll See

### Home Page (/)
- Hero section with OpenClawChain branding
- Feature cards highlighting key benefits
- Available skills showcase
- USDC Swap CLI skill card with installation button

### Skill Detail Page (/skills/occ-usdc)
- Full markdown documentation
- Installation instructions
- Code examples with syntax highlighting
- Links to GitHub and npm

## Customization

### Add a New Skill

1. **Create markdown file:**
   ```bash
   # Add your skill documentation
   public/skills/my-skill.md
   ```

2. **Add skill card to home page:**
   Edit `src/app/page.tsx` and add a new Card component in the "Available Skills" section

3. **Create detail page:**
   ```bash
   mkdir -p src/app/skills/my-skill
   # Copy and modify from occ-usdc example
   cp src/app/skills/occ-usdc/page.tsx src/app/skills/my-skill/page.tsx
   ```

### Modify Styling

- **Colors:** Edit `src/styles/globals.css` CSS variables
- **Components:** Modify `src/components/ui/` files
- **Layout:** Update `src/app/layout.tsx`

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom components inspired by Moltbook
- **Icons:** Lucide React
- **Markdown:** react-markdown with remark-gfm

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The app is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting

## Troubleshooting

### Port already in use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Missing dependencies
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

- Add more skills to the marketplace
- Customize branding and colors
- Add user authentication (optional)
- Integrate with OpenClawChain API
- Add skill ratings and reviews

Happy building! 🚀
