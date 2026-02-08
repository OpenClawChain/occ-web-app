import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Package, Zap, Shield, Code } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg overflow-hidden">
                <img src="/logo.png" alt="OpenClawChain" className="h-full w-full object-cover" />
              </div>
              <div>
                <h1 className="text-xl font-bold">OpenClawChain</h1>
                <p className="text-xs text-muted-foreground">Skills for Claw Agents</p>
              </div>
            </div>
            <a 
              href="https://github.com/OpenClawChain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Supercharge Your Claw Agent
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Install powerful skills to give your AI agent new capabilities. From blockchain swaps to DeFi integrations, 
            expand what your agent can do with just one command.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Easy Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                One command to install. Skills integrate seamlessly with your Claw agent&apos;s existing capabilities.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Autonomous Onchain Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Let your AI agent execute blockchain transactions autonomously. From token swaps to DeFi operations, all handled securely without human intervention.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Open Source</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Fully transparent and auditable. Contribute your own skills or customize existing ones.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Available Skills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-2xl font-bold mb-8">Available Skills</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* USDC Swap Skill */}
          <Card className="hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>USDC Swap CLI</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">
                    Swap tokens on NEAR blockchain with focus on USDC stablecoin
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  v1.0.0
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium">
                    NEAR
                  </span>
                  <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium">
                    Mainnet
                  </span>
                  <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium">
                    USDC
                  </span>
                  <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium">
                    DeFi
                  </span>
                  <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium">
                    Swaps
                  </span>
                </div>
                
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>✓ Swap any NEAR token to/from USDC</p>
                  <p>✓ Real-time exchange rates</p>
                  <p>✓ Secure local key management</p>
                  <p>✓ Transaction status tracking</p>
                </div>

                <div className="flex gap-3 pt-2">
                  <a 
                    href="/occ-usdc.md" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full" variant="default">
                      skill.md
                    </Button>
                  </a>
                  <Link href="/skills/occ-usdc" className="flex-1">
                    <Button className="w-full" variant="outline">
                      View Details
                    </Button>
                  </Link>
                </div>
                <div className="flex gap-3 pt-2">
                  <a 
                    href="https://github.com/OpenClawChain/occ-swap-cli" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full" variant="outline">
                      GitHub
                    </Button>
                  </a>
                  <a 
                    href="https://www.npmjs.com/package/@openclawchain/swap-cli" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full" variant="outline">
                      npm
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Starknet Swap Skill */}
          <Card className="hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>Claw Strk</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">
                    Swap tokens on Starknet Sepolia testnet using AVNU routing
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  v1.0.0
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium">
                    Starknet
                  </span>
                  <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium">
                    Sepolia
                  </span>
                  <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium">
                    AVNU
                  </span>
                  <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium">
                    Swaps
                  </span>
                </div>
                
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>✓ Swap tokens via AVNU protocol</p>
                  <p>✓ Starknet Sepolia testnet support</p>
                  <p>✓ Local transaction signing</p>
                  <p>✓ Balance checking & receipts</p>
                </div>

                <div className="flex gap-3 pt-2">
                  <a 
                    href="/claw-strk.md" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full" variant="default">
                      skill.md
                    </Button>
                  </a>
                  <Link href="/skills/claw-strk" className="flex-1">
                    <Button className="w-full" variant="outline">
                      View Details
                    </Button>
                  </Link>
                </div>
                <div className="flex gap-3 pt-2">
                  <a 
                    href="https://github.com/OpenClawChain/claw-strk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full" variant="outline">
                      GitHub
                    </Button>
                  </a>
                  <a 
                    href="https://www.npmjs.com/package/@openclawchain/claw-strk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full" variant="outline">
                      npm
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Placeholder for more skills */}
          <Card className="border-dashed hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-muted-foreground">More Skills Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                We&apos;re building more skills for Claw agents. Stay tuned for:
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• NFT minting and trading</li>
                <li>• Cross-chain bridges</li>
                <li>• DeFi yield farming</li>
                <li>• Social media integrations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 OpenClawChain. Open source skills for AI agents.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://github.com/OpenClawChain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.npmjs.com/package/@openclawchain/swap-cli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                npm
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
