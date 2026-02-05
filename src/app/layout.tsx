import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'OpenClawChain Skills',
  description: 'Skills marketplace for Claw agents - Install powerful capabilities for your AI agent',
  keywords: ['AI', 'agents', 'skills', 'OpenClaw', 'NEAR', 'USDC', 'blockchain'],
  authors: [{ name: 'OpenClawChain' }],
  creator: 'OpenClawChain',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
