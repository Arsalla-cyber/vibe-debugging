import { Elysia } from "elysia";
import { userRoutes } from "./routes/users";

const port = Number(process.env.PORT) || 3000;

export const app = new Elysia()
  .get("/", () => ({
    message: "Welcome to Vibe Elysia Backend!",
    status: "ok",
  }))
  .get("/health", () => ({
    status: "healthy",
    timestamp: new Date().toISOString(),
  }))
  .use(userRoutes)
  .listen(port);

console.log(`🦊 Elysia server is running at http://${app.server?.hostname}:${app.server?.port}`);
