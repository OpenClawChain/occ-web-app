#!/bin/bash

# OpenClawChain Skills - Setup Verification Script
# This script checks if all required files are in place

echo "🔍 Verifying OpenClawChain Skills Setup..."
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counter
PASSED=0
FAILED=0

# Function to check file exists
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1"
        ((PASSED++))
    else
        echo -e "${RED}✗${NC} $1 (missing)"
        ((FAILED++))
    fi
}

# Function to check directory exists
check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1/"
        ((PASSED++))
    else
        echo -e "${RED}✗${NC} $1/ (missing)"
        ((FAILED++))
    fi
}

echo "📦 Configuration Files:"
check_file "package.json"
check_file "tsconfig.json"
check_file "tailwind.config.ts"
check_file "next.config.js"
check_file "postcss.config.js"
check_file ".eslintrc.json"
check_file ".gitignore"
echo ""

echo "📚 Documentation:"
check_file "README.md"
check_file "QUICKSTART.md"
check_file "DEPLOYMENT.md"
check_file "PROJECT_SUMMARY.md"
echo ""

echo "📁 Source Directories:"
check_dir "src"
check_dir "src/app"
check_dir "src/components"
check_dir "src/lib"
check_dir "src/styles"
echo ""

echo "📄 Source Files:"
check_file "src/app/layout.tsx"
check_file "src/app/page.tsx"
check_file "src/app/skills/occ-usdc/page.tsx"
check_file "src/components/ui/Button.tsx"
check_file "src/components/ui/Card.tsx"
check_file "src/components/ThemeToggle.tsx"
check_file "src/lib/utils.ts"
check_file "src/styles/globals.css"
echo ""

echo "🎨 Public Assets:"
check_dir "public"
check_dir "public/skills"
check_file "public/skills/occ-usdc.md"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "Results: ${GREEN}${PASSED} passed${NC}, ${RED}${FAILED} failed${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}✅ All checks passed!${NC}"
    echo ""
    echo "Next steps:"
    echo "  1. npm install          # Install dependencies"
    echo "  2. npm run dev          # Start development server"
    echo "  3. Open http://localhost:3000"
    echo ""
    exit 0
else
    echo -e "${RED}❌ Some files are missing!${NC}"
    echo ""
    echo "Please ensure all files are created correctly."
    echo "Check the FILE_TREE.md for the complete structure."
    echo ""
    exit 1
fi
