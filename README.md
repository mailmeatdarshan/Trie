# Trie  | The Ultimate LeetCode Clone

Trie is a high-performance, full-stack competitive programming platform designed to replicate and enhance the LeetCode experience. It provides a seamless environment for developers to sharpen their algorithmic skills, track their progress, and prepare for technical interviews with a robust, real-time code execution engine.

![Version](https://img.shields.io/badge/version-1.0.0-amber)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![Prisma](https://img.shields.io/badge/Prisma-ORM-blue)
![Clerk](https://img.shields.io/badge/Auth-Clerk-purple)
![Docker](https://img.shields.io/badge/Runtime-Judge0-blue)

## 🎯 Platform Overview

Trie is built for the modern developer. It combines a sleek, intuitive interface with a powerful backend capable of handling high-concurrency code submissions across 5+ major programming languages. Whether you're an admin curating the next big "Striver Sheet" or a student solving your first DP problem, Trie provides the tools you need to succeed.

## ✨ Key Features

- **LeetCode-Style Code Execution:** A sandboxed, multi-language execution engine powered by **Judge0**, supporting JavaScript, Python, Java, C++, and Go.
- **Advanced Problem Management:** Admins can create complex problems with hidden test cases, language-specific starter templates, and detailed editorials.
- **Smart Playlists (Curated Lists):** Create and share custom problem sets like "SDE Sheets" or "Top 50 Arrays" to streamline learning paths.
- **Comprehensive User Profiles:** Visualized stats including success rates, submission heatmaps (Roadmap), and solved problem history.
- **Real-time Validation:** Every problem created is automatically validated against its reference solution in all supported languages before going live.
- **Enterprise-Grade Auth:** Secure, frictionless authentication and user management powered by **Clerk**.
- **Responsive & Accessible:** A mobile-first, dark-mode optimized UI built with **Tailwind CSS** and **Shadcn UI**.

## 🛠️ Modern Tech Stack

- **Frontend:** [Next.js 15](https://nextjs.org/) (App Router, Server Components)
- **Database:** PostgreSQL (Relational data modeling for users, problems, and submissions)
- **ORM:** [Prisma](https://www.prisma.io/) (Type-safe database access)
- **Authentication:** [Clerk](https://clerk.com/) (Identity & User Management)
- **Execution Engine:** [Judge0](https://judge0.com/) (Containerized code execution)
- **UI Components:** Radix UI + Shadcn UI
- **Validation:** Zod + React Hook Form

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Docker & Docker Compose
- Clerk Account

### Installation & Local Setup

1. **Clone & Install:**
   ```bash
   git clone https://github.com/your-username/trie.git
   cd trie
   npm install
   ```

2. **Infrastructure:**
   Trie uses Docker to manage the database and the execution engine locally.
   ```bash
   docker compose up -d
   ```

3. **Environment Configuration:**
   Create a `.env` file:
   ```env
   DATABASE_URL="postgresql://postgres:postgres123@localhost:6543/trie?schema=public"
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   JUDGE0_API_URL="http://localhost:2358"
   ```

4. **Sync Database:**
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. **Launch:**
   ```bash
   npm run dev
   ```

## 🏗️ Architecture

Trie follows a **Modular Feature-Based Architecture**, ensuring high maintainability and scalability:
- `/modules/problems`: Handling everything from the problem table to the submission logic.
- `/modules/profile`: User dashboard and statistics visualization.
- `/modules/auth`: Onboarding and identity flows.
- `/lib/judge0`: The bridge between the platform and the execution engine.

## 🗺️ Roadmap

- [ ] Submission Heatmap (Github-style)
- [ ] Real-time Global Leaderboard
- [ ] In-platform Code Editor Collaboration
- [ ] Support for SQL and Shell problems

## 🚢 Deployment Strategy

Trie is designed for high availability:
- **Application:** Deploy to **Vercel** for optimal Next.js performance.
- **Persistence:** Use **Neon** or **Supabase** for managed PostgreSQL.
- **Compute:** Host **Judge0** on a dedicated VPS (DigitalOcean/AWS) to ensure stable code execution times.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
Built with 🧡 by Darshan
