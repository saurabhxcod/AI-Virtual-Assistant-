import dns from "dns"
// Set Node.js to use Google DNS to prevent querySrv DNS resolution failures locally
dns.setServers(["8.8.8.8", "8.8.4.4"])

import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js"
// import geminiResponse from "./gemini.js"

// Connect to Database globally (essential for Serverless environment)
connectDb()

const app=express()

const allowedOrigins = [
    process.env.FRONTEND_URL,
    "https://ai-virtual-assistant-12.onrender.com",
    "http://localhost:5173"
].filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}))
const port=process.env.PORT || 5000
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)


if (!process.env.VERCEL) {
    app.listen(port,()=>{
        console.log("Server is running on port ",port);
    })
}

export default app

