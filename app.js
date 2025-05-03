import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";

// Parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json());

// Parses URL-encoded data (e.g., from HTML forms) and puts it in req.body
app.use(express.urlencoded({ extended: false }));

// Parses cookies from the HTTP request and adds them to req.cookies
app.use(cookieParser());
// Initialize an app
const app = express();
// Using use when we want to say which routes we want to use
// api/v1/auth/sign-up
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.use(errorMiddleware);

// Create a route, we need to add parameter with route and req, res
app.get("/", (req, res) => {
  res.send("Welcome");
});
// Listen to specific port
app.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}`);

  await connectToDatabase();
});

export default app;
