# 🚗 Uber Clone - Frontend

This is the frontend of a real-time ride-booking platform built as an **Uber Clone** using React.js. It allows users to request rides, drivers to accept them, and both parties to communicate in real-time via WebSockets.

## 🔗 Live Demo

[https://uber-frontend-chi.vercel.app](https://uber-frontend-chi.vercel.app)

## 🧰 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Real-Time**: Socket.IO-client
- **Authentication**: JWT (via backend)
- **Maps**: Google Maps API
- **Routing**: React Router DOM
- **State Management**: React Hooks, Context API

## 🖥️ Features

- 🚀 Real-time ride requests and responses using WebSockets
- 🔐 JWT-based authentication for users and drivers
- 🗺️ Google Maps integration for live pickup/drop location tracking
- 👥 Separate dashboards for users and drivers
- 📱 Responsive and mobile-friendly UI
- 🌐 Integrated with backend for full-stack functionality

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components (RidePopUp, ConfirmedRide, LiveTracking, etc.)
├── context/             # React Contexts for User, Captain, and Socket
├── pages/               # Main screens/pages (Home, Riding, CaptainHome, etc.)
├── App.jsx              # Main app routing
├── main.jsx             # App entry point
└── index.css            # Tailwind and global styles
public/
└── index.html           # HTML template
vercel.json              # Vercel
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Mohit-codes27/uber-frontend.git
cd uber-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set environment variables

Create a `.env` file in the root directory:

```bash
VITE_GOOGLE_MAP_API_KEY=your_map_api_key
\`\`\`

### 4. Start the development server

\`\`\`bash
npm run dev
\`\`\`

Open your browser at `http://localhost:5173`

> 🔄 Make sure your backend is running and WebSocket server is reachable.

## 🧠 Learnings & Challenges

- Integrated **Socket.IO** for real-time user-driver communication
- Debugged cross-origin WebSocket issues when deploying on **Vercel + Render**
- Used **React Context API** to manage global socket and authentication states

## 📦 Backend Repo

Check out the backend of this project here:  
🔗 [Uber Clone Backend](https://github.com/Mohit-codes27/uber-backend)

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

## 🙌 Contributions

Pull requests and suggestions are welcome! Feel free to fork the project and raise an issue or PR.

---

Made with ❤️ by [Mohit Morya](https://github.com/Mohit-codes27)
