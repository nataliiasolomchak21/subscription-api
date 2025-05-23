import { Router } from "express";
import { signUp, signIn } from "../controllers/auth.controller.js";

const authRouter = Router();

// Create a path to auth page
authRouter.post('/sign-up', signUp)
authRouter.post('/sign-in', signIn)
// authRouter.post('/sign-out', signOut)

export default authRouter;