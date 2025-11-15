import express from "express";
import { create } from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// --- JSON SERVER ---
const jsonServer = create();
const router = create().router("src/data/db.json");

jsonServer.use(jsonServer.defaults());
jsonServer.use(router);

// JSON server will run under /api
app.use("/api", jsonServer);

// --- SERVE FRONTEND BUILD ---
const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath));

// SPA fallback (React Router support)
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// --- START SERVER ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
