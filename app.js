import express  from 'express';
import {PORT} from './config/env.js'
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';

// Initialize an app
const app = express();
// Using use when we want to say which routes we want to use
// api/v1/auth/sign-up
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/subscriptions', subscriptionRouter)

// Create a route, wee need to add parameter with route and req, res
app.get('/', (req, res) => {
    res.send('Welcome')
});
// Listen to specific port
app.listen(PORT,  () => {
    console.log(`Server running at http://localhost:${PORT}`);
})

export default app;