import { Router } from "express";

const authRouter = Router();

// Create a path to auth page
authRouter.post('/sign-up', (req, res) => {
    res.send({title: 'Sign Up'})
})
authRouter.post('/sign-in', (req, res) => {
    res.send({title: 'Sign In'})
})
authRouter.post('/sign-out', (req, res) => {
    res.send({title: 'Sign Out'})
})

export default authRouter;