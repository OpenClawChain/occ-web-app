# 🚀 Get Started with OpenClawChain Skills

Welcome! Your Next.js app is ready to run. Follow these simple steps:

## ⚡ Quick Start (3 Commands)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# Visit http://localhost:3000
```

That's it! Your skills marketplace is now running locally.

## 📱 What You'll See

### Home Page (http://localhost:3000)
- **Hero Section** - OpenClawChain branding and tagline
- **Features** - Easy Installation, Secure, Open Source
- **Skills Showcase** - USDC Swap CLI card with details
- **Footer** - Links to GitHub and npm

### Skill Detail Page (http://localhost:3000/skills/occ-usdc)
- **Full Documentation** - Complete USDC Swap CLI guide
- **Installation** - Quick copy-paste npm command
- **Setup Instructions** - NEAR wallet configuration
- **Usage Examples** - Code snippets with syntax highlighting
- **API Reference** - All commands and parameters

## 🎨 Features

✅ **Responsive Design** - Works on mobile, tablet, desktop  
✅ **Dark Mode** - Toggle between light and dark themes  
✅ **Fast Loading** - Optimized with Next.js  
✅ **SEO Ready** - Proper meta tags and structure  
✅ **Type Safe** - Built with TypeScript  
✅ **Modern UI** - Moltbook-inspired design  

## 🛠️ Development Commands

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📝 Making Changes

### Add a New Skill

1. **Create markdown file:**
   ```bash
   # Add your documentation
   public/skills/my-new-skill.md
   ```

2. **Add skill card:**
   Edit `src/app/page.tsx` and add a new Card in the skills section

3. **Create detail page:**
   ```bash
   mkdir -p src/app/skills/my-new-skill
   # Copy template from occ-usdc
   cp src/app/skills/occ-usdc/page.tsx src/app/skills/my-new-skill/page.tsx
   ```

### Customize Styling

- **Colors:** Edit `src/styles/globals.css` (CSS variables)
- **Components:** Modify files in `src/components/ui/`
- **Layout:** Update `src/app/layout.tsx`
- **Theme:** Adjust `tailwind.config.ts`

## 🌐 Deploy to Production

### Vercel (Recommended - 1 Click)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Your site will be live at: `https://your-project.vercel.app`

### Other Options
- **Netlify** - Connect GitHub repo
- **AWS Amplify** - Auto-deploy from Git
- **Cloudflare Pages** - Fast global CDN
- **Docker** - Use included Dockerfile

See `DEPLOYMENT.md` for detailed instructions.

## 📚 Documentation

- **README.md** - Project overview and features
- **QUICKSTART.md** - Detailed setup guide
- **DEPLOYMENT.md** - Deployment instructions
- **PROJECT_SUMMARY.md** - Architecture and design
- **FILE_TREE.md** - Complete file structure

## 🐛 Troubleshooting

### Port already in use?
```bash
npm run dev -- -p 3001
```

### Build errors?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Styling not working?
```bash
# Clear cache and rebuild
rm -rf .next
npm run dev
```

## 🎯 Next Steps

1. ✅ Run the app locally
2. ✅ Explore the home page and skill detail page
3. ✅ Try dark mode toggle
4. ✅ Test on mobile device
5. ✅ Customize colors and branding
6. ✅ Add more skills
7. ✅ Deploy to production

## 💡 Tips

- **Hot Reload** - Changes auto-refresh in dev mode
- **TypeScript** - Get autocomplete in VS Code
- **Tailwind** - Use utility classes for styling
- **Components** - Reuse Button and Card components
- **Markdown** - Write docs in markdown format

## 🤝 Contributing

Want to add more skills?

1. Fork the repository
2. Create a new skill markdown file
3. Add the skill card to home page
4. Submit a pull request

## 📞 Support

- **GitHub Issues** - Report bugs or request features
- **Documentation** - Check the docs folder
- **Next.js Docs** - https://nextjs.org/docs

## 🎉 You're Ready!

Everything is set up and ready to go. Run `npm install && npm run dev` and start building!

---

**Built with ❤️ for the OpenClawChain community**

Need help? Check the documentation or create an issue on GitHub.
