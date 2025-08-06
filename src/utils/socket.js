import { io } from "socket.io-client";
import config from "../config";

let socket = null;

export const connectSocket = (token) => {
  socket = io(config.baseURL, {
    transports: ["websocket"],
    reconnectionAttempts: 5,
    auth: { token }, // pass token securely here
  });

  socket.on("connect", () => {
    console.log("✅ Socket connected:", socket.id);
  });

  socket.on("disconnect", (reason) => {
    console.log("❌ Socket disconnected:", reason);
  });

  socket.on("connect_error", (err) => {
    console.error("❗Socket connection error:", err.message);
  });
};

export const getSocket = () => socket;

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};