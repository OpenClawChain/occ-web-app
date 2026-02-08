'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Download, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function SkillContent({ markdownContent }: { markdownContent: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install -g @openclawchain/claw-strk');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Skills
            </Link>
            <div className="flex gap-3">
              <a 
                href="https://github.com/OpenClawChain/claw-strk" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </a>
              <a 
                href="https://www.npmjs.com/package/@openclawchain/claw-strk" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Install
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Skill Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">claw-strk</h1>
              <p className="text-muted-foreground">
                Starknet Sepolia CLI for swaps, lending, paywalls, and more
              </p>
            </div>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Prototype
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium">
              Starknet
            </span>
            <span className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium">
              Sepolia
            </span>
            <span className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium">
              AVNU
            </span>
            <span className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium">
              DeFi
            </span>
            <span className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium">
              NFT
            </span>
          </div>

          {/* Quick Install */}
          <Card className="bg-muted/50">
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold">Quick Install</h3>
                <button
                  onClick={handleCopy}
                  className="text-xs text-primary hover:underline"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <code className="text-sm font-mono block bg-background px-3 py-2 rounded border">
                npm install -g @openclawchain/claw-strk
              </code>
            </div>
          </Card>
        </div>

        {/* Markdown Content */}
        <Card>
          <div className="p-8">
            <article className="prose-skill">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdownContent}
              </ReactMarkdown>
            </article>
          </div>
        </Card>

        {/* Footer Links */}
        <div className="mt-8 flex gap-4 justify-center">
          <a 
            href="https://github.com/OpenClawChain/claw-strk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </a>
          <a 
            href="https://www.npmjs.com/package/@openclawchain/claw-strk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            View on npm
          </a>
        </div>
      </main>
    </div>
  );
}
