# SketchLink 🎨

A real-time multiplayer drawing & guessing game. So I wanted to play Skribbl with my friends and was like can I make something like this. Well here is what I tried and achieved.

**[Play it here →](https://sketchlinks.vercel.app)**

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

## What is this?

You draw stuff and your friends guess what it is. Simple as that. No downloads, no accounts - just share the link and you're good to go.

Built this as a side project to learn websockets and real-time canvas stuff. Pretty happy with how it turned out!

## Features

- 🖌️ Drawing tools (pencil, marker, eraser, fill bucket)
- 👥 Real-time multiplayer via WebSockets  
- 🎭 Custom avatars - draw your own or pick an emoji
- 📱 Works on phones, tablets, desktops
- 💬 Live chat with guess validation
- 🏆 Score tracking across rounds
- 🖼️ Gallery of all drawings at the end

## Tech Stack

**Frontend:** React 18, TypeScript, Vite, Tailwind CSS  
**Backend:** Node.js, Express, Socket.io  
**Hosting:** Vercel (frontend) + Render (backend)

## Run Locally

```bash
git clone https://github.com/acharya-aayush/SketchLinksPublic.git
cd SketchLinksPublic

npm install

# frontend runs at localhost:5173
npm run dev

# backend in another terminal (localhost:3001)
node server.js
```

Create a `.env` file:
```env
VITE_SERVER_URL=http://localhost:3001
PORT=3001
```

## Deploying

**Frontend (Vercel/Netlify):**
- Build: `npm run build`
- Output: `dist`
- Set `VITE_SERVER_URL` to your backend URL

**Backend (Render):**
- Build: `npm install`
- Start: `node server.js`

Note: Render free tier sleeps after 15min of inactivity, so first load might take ~30s.

## Project Structure

```
├── App.tsx           # main app component
├── server.js         # socket.io backend
├── components/       # react components
│   ├── CanvasBoard   # drawing canvas
│   ├── LobbyScreen   # room creation/joining
│   └── ...
├── services/
│   ├── multiplayer   # socket client
│   └── audio         # sound effects
└── types.ts          # typescript types
```

## Contributing

PRs welcome! Open an issue first if you want to discuss something.

Some things I'd love help with:
- Better mobile touch handling
- More word suggestions
- UI/UX improvements

## Known Issues

- Server cold starts take 30-50 seconds (Render free tier thing)
- Canvas might lag on older phones

## Why MIT License?

Honestly wasn't sure which license to use, MIT seemed like the most flexible option. Use it, modify it, share it - just dont blame me if something breaks lol

## Author

**Aayush Acharya**  
- GitHub: [@acharya-aayush](https://github.com/acharya-aayush)
- LinkedIn: [Aayush Acharya](https://www.linkedin.com/in/acharyaaayush/)
- Email: [acharya.acharyaaayush2k4@gmail.com](mailto:acharya.acharyaaayush2k4@gmail.com)

---

If you like it, drop a ⭐! Would mean a lot :)
