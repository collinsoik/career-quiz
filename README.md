# Pathfinder

**An interactive STEM major exploration game for middle school classrooms.**

Pathfinder replaces traditional career quizzes with narrative-driven gameplay. Students progress through 4 immersive scenarios (Lost Island, City Challenges, Space Mission, Mystery Investigation), making 12 decisions that reveal their natural interests across 6 STEM fields. Teachers host live classroom sessions with a real-time dashboard showing student progress, popular choices, and interest distribution.

---

## Table of Contents

- [How It Works](#how-it-works)
- [For Teachers: Running a Session](#for-teachers-running-a-session)
- [STEM Categories & Majors](#stem-categories--majors)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Local Development Setup](#local-development-setup)
- [Environment Variables](#environment-variables)
- [Production Deployment](#production-deployment)
- [Architecture Overview](#architecture-overview)

---

## How It Works

1. **Teacher creates a room** at the `/teacher` page and receives a 4-digit room code.
2. **Students join** by entering the room code and their name on the home page.
3. **Teacher starts the game** once all students have joined the lobby.
4. **Students play** through 4 narrative scenarios, each with 3 decision points (12 total). Every choice quietly accumulates interest scores across 6 STEM categories.
5. **Students see results** -- a radar chart of their interest profile and their top 5 matching STEM majors.
6. **Teacher monitors** everything live: a class feed of events, per-student progress, choice distribution charts, and shared results.
7. **Post-activity survey** collects student feedback (enjoyment, what they learned, overall experience).

Students can also browse all 24 STEM majors in the **Explore** section (`/explore`), which is available independently of any game session.

---

## For Teachers: Running a Session

### Quick Start (using the hosted version)

If the app is already deployed (e.g. on Vercel + a server), you just need a browser:

1. Open the app and navigate to `/teacher`.
2. Click **Create Room** -- a 4-digit code appears on screen.
3. Share the code with your students (project it, write it on the board, etc.).
4. Students go to the app's home page, enter the code and their name, and click **Join**.
5. Once everyone is in the lobby, click **Start Game**.
6. Monitor progress on your **Teacher Dashboard** (`/dashboard/[roomCode]`).
7. When students finish, they see their interest profiles and top major matches. They can optionally share results with you.

### Tips

- **Late joins are supported** -- students who join after the game has started will begin from the first scenario.
- **Reconnection is automatic** -- if a student's browser disconnects (closed tab, lost WiFi), they can rejoin within 60 seconds and resume where they left off.
- **Tested with 60-80 concurrent students** on classroom WiFi.
- **No accounts or logins required** for students.

---

## STEM Categories & Majors

The game measures interest across **6 STEM categories**:

| Category | What It Covers |
|---|---|
| Health & Biomedical | Health-tech, genetics, molecular biology |
| Life & Ecology | Living systems, fieldwork, wildlife |
| Computing & Software | Code, data, digital systems |
| Chemistry & Materials | Matter, molecules, materials science |
| Design & Build | Engineering, robotics, physical construction |
| Earth & Energy | Planet-scale systems, energy, climate |

Each of the **24 STEM majors** is linked to a primary and secondary category. After gameplay, students are matched to their top 5 majors with detailed profiles including what they'd study, a typical day, real-world impact, and salary info.

### The 4 Scenarios

| Scenario | Theme | Decisions |
|---|---|---|
| Lost Island | Survival on a mysterious island | 3 |
| City Challenges | Urban planning and civic problem-solving | 3 |
| Space Mission | Interstellar exploration and discovery | 3 |
| Mystery Investigation | Detective work and forensic analysis | 3 |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS 3.4 |
| State Management | Zustand |
| Charts | Recharts (radar chart for interest profiles) |
| Animation | Framer Motion |
| Backend | Express 4.18, Node.js 20 |
| Real-time | Socket.IO 4.7 (WebSocket + polling fallback) |
| Database | SQLite via sql.js (in-memory with file persistence) |
| Deployment | Docker (server), Vercel (frontend) |

---

## Project Structure

```
pathfinder/
├── apps/
│   ├── web/                    # Next.js frontend
│   │   ├── app/                # App Router pages
│   │   │   ├── page.tsx        # Student landing (join room)
│   │   │   ├── teacher/        # Teacher room creation
│   │   │   ├── lobby/[code]/   # Pre-game waiting room
│   │   │   ├── play/[code]/    # Gameplay UI
│   │   │   ├── results/[code]/ # Student results + survey
│   │   │   ├── dashboard/[code]/ # Teacher live dashboard
│   │   │   └── explore/        # Browse all 24 STEM majors
│   │   ├── components/         # React components
│   │   └── lib/
│   │       ├── socket.ts       # Socket.IO client
│   │       └── game-store.ts   # Zustand store
│   │
│   └── server/                 # Express + Socket.IO backend
│       ├── src/
│       │   ├── index.ts        # Server bootstrap
│       │   ├── game.ts         # Game logic & scoring
│       │   ├── rooms.ts        # Room management
│       │   └── db.ts           # SQLite persistence
│       └── Dockerfile
│
├── packages/
│   └── shared/                 # Shared TypeScript package
│       └── src/
│           ├── types.ts        # Core types (Player, Room, Scores)
│           ├── events.ts       # Socket.IO event definitions
│           ├── scenarios.ts    # 4 scenarios with weighted choices
│           └── majors.ts       # 24 STEM major profiles + careers
│
├── docker-compose.yml          # Production server deployment
├── deploy-server.sh            # One-command server deployment
├── vercel.json                 # Vercel frontend config
└── package.json                # npm workspaces root
```

---

## Prerequisites

- **Node.js** >= 18 (recommended: 20)
- **npm** (comes with Node.js)
- **Docker** and **Docker Compose** (for production server deployment only)

---

## Local Development Setup

```bash
# 1. Clone the repository
git clone <repo-url>
cd career_quiz

# 2. Install all dependencies (workspaces auto-linked)
npm install

# 3. Start both server and frontend in development mode
npm run dev
```

This runs:
- **Server** on `http://localhost:3001` (Express + Socket.IO, with hot reload via tsx)
- **Frontend** on `http://localhost:3000` (Next.js dev server)

The frontend auto-connects to the server at `localhost:3001` by default.

### Running individually

```bash
# Server only
npm run dev:server

# Frontend only
npm run dev:web
```

### Building for production

```bash
npm run build
```

This builds the shared package first, then all apps.

---

## Environment Variables

### Frontend (`apps/web/.env.local`)

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_SERVER_URL` | URL of the backend server | `http://localhost:3001` |

Create this file for local development:

```bash
# apps/web/.env.local
NEXT_PUBLIC_SERVER_URL=http://localhost:3001
```

For production, set this to your deployed server URL (e.g. `https://your-server.example.com`).

### Server (via environment or `docker-compose.yml`)

| Variable | Description | Default |
|---|---|---|
| `PORT` | Port the server listens on | `3001` (dev) / `3007` (docker) |
| `NODE_ENV` | Environment mode | `development` |
| `CORS_ORIGIN` | Comma-separated allowed origins | `http://localhost:3000` |
| `DB_PATH` | Path to SQLite database file | `/app/data/pathfinder.db` |

---

## Production Deployment

### Server (Docker)

The server is containerized and deployed via Docker Compose.

```bash
# Build and start the server (port 3007)
./deploy-server.sh
```

This script builds the Docker image, starts the container, and waits for a successful health check at `http://localhost:3007/health`.

To manage manually:

```bash
# Build
docker compose build

# Start
docker compose up -d

# View logs
docker compose logs -f

# Stop
docker compose down
```

The SQLite database is persisted in a Docker volume at `./data/pathfinder.db`.

### Frontend (Vercel)

The frontend is configured for Vercel deployment via `vercel.json`:

1. Connect your GitHub repo to Vercel.
2. Set the environment variable `NEXT_PUBLIC_SERVER_URL` to your production server URL.
3. Vercel auto-builds on push using the configured build command.

Or deploy manually:

```bash
npx vercel --prod
```

### Connecting Frontend to Server

Make sure `NEXT_PUBLIC_SERVER_URL` on the frontend points to wherever your server is running. The server's `CORS_ORIGIN` must include your frontend's domain.

---

## Architecture Overview

```
┌─────────────────┐         WebSocket (Socket.IO)         ┌─────────────────┐
│                 │◄────────────────────────────────────►│                 │
│   Next.js App   │         Real-time game events         │  Express Server │
│   (Student UI   │                                       │                 │
│    Teacher UI)  │         HTTP (health, static)         │  Game Logic     │
│                 │◄────────────────────────────────────►│  Room Manager   │
└─────────────────┘                                       │  SQLite DB      │
                                                          └─────────────────┘
      Vercel                                                   Docker
```

**Real-time flow:**
- All game events (joins, choices, progress, results) flow over Socket.IO WebSockets.
- The server manages rooms, tracks player state, calculates scores, and broadcasts updates.
- The frontend uses a Zustand store to manage local state and syncs with the server via socket events.

**Data persistence:**
- Game sessions, player results, individual choices, and survey responses are stored in SQLite.
- The database file persists across container restarts via a Docker volume.

**Scoring:**
- Each choice has hidden weights across the 6 STEM categories.
- After completing all 12 decisions, raw scores are normalized to a 0-100 scale.
- Top 5 major matches are calculated using weighted primary + secondary category scores, with diversity enforcement (max 2 majors per primary category).

---

## License

This project is private and not currently licensed for public distribution.
