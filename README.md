# OpenClawChain Skills

A Next.js web application showcasing skills for Claw agents. This landing page provides installation instructions and documentation for OpenClawChain skills.

## Features

- 🎨 Moltbook-inspired design with modern UI
- 📱 Responsive layout for all devices
- 🌓 Dark/light mode support
- 📝 Markdown-based skill documentation
- ⚡ Built with Next.js 14 and TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── skills/       # Skill detail pages
│   ├── components/       # React components
│   │   └── ui/          # UI components (Button, Card, etc.)
│   ├── lib/             # Utility functions
│   └── styles/          # Global styles
├── public/
│   └── skills/          # Markdown skill documentation
└── package.json
```

## Adding New Skills

1. Create a new markdown file in `public/skills/`
2. Add the skill card to `src/app/page.tsx`
3. Create a new page in `src/app/skills/[skill-name]/page.tsx`

## Styling

The app uses Tailwind CSS with a custom design system inspired by Moltbook:

- Custom color palette with CSS variables
- Responsive typography
- Markdown prose styling
- Dark mode support via next-themes

## License

MIT
