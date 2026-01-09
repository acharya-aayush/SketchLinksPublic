# SketchLink - Dev Docs

Quick reference for anyone who wants to contribute or understand how things work.

## Architecture

```
Browser (React)  <-->  Socket.io  <-->  Node.js Server
```

- Frontend handles canvas, UI, and local state
- Backend manages rooms, game logic, and broadcasts events
- Everything syncs through socket events

## Quick Start

```bash
npm install
npm run dev      # frontend at localhost:5173
node server.js   # backend at localhost:3001
```

Set `VITE_SERVER_URL=http://localhost:3001` in `.env`

## How the Game Works

1. Host creates room → server generates 8-char room ID
2. Players join via link
3. Server picks drawer, sends word options
4. Drawer picks word, draws on canvas
5. Server broadcasts strokes to all players
6. Players guess in chat, server validates
7. Points awarded based on speed
8. Repeat until all rounds done

## Socket Events

**Client → Server:**
- `create_room` - make new room
- `join_room` - join existing room  
- `game_event` - drawing, chat, etc
- `start_game`, `select_word`, `get_words`

**Server → Client:**
- `room_joined` - confirm join
- `game_event` - state updates, drawing sync
- `error_message` - errors

## Canvas Details

Uses fixed 1600x900 internal resolution so strokes look the same on all screens. Screen coords get translated to canvas coords using scale factors.

Tools:
- Pencil: full opacity
- Marker: 70% opacity for layering
- Eraser: white strokes
- Fill: flood fill algorithm

## Folder Overview

```
components/       # UI components
  CanvasBoard     # main drawing canvas
  LobbyScreen     # room creation/join
  ChatSidebar     # guessing + chat
services/
  multiplayer.ts  # socket.io wrapper
  audio.ts        # sound effects
```

## Deployment Notes

Frontend goes on Vercel/Netlify, backend on Render. 

Render free tier sleeps after 15min - the app has a wake-up screen that pings the server and shows fun facts while waiting.

## Security Stuff

- Input sanitization on server (prevents XSS)
- Rate limiting (100 events/sec per socket)
- Word validation (server checks selection)
- Avatar size capped at 50KB

## Common Issues

**"Connection timeout"** - Server cold starting, wait ~30s

**"Room not found"** - Rooms delete 2min after empty

**Canvas not responding on mobile** - Check touch-action CSS
