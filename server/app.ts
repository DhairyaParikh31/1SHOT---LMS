require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.route";
import courseRouter from "./routes/course.route";
import orderRouter from "./routes/order.route";
import notificationRouter from "./routes/notification.route";
import analyticsRouter from "./routes/analytics.route";
import layoutRouter from "./routes/layout.route";
import { rateLimit } from 'express-rate-limit'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// body parser (limit for cloudinary)
app.use(express.json({ limit: "50mb" }));

// cookie parser
app.use(cookieParser());

// cors => cross origin resource sharing (secure thing to use the api or website url for login)
app.use(
  cors({
    origin: ["http://localhost:3000"], // Allow the Vercel frontend
    credentials: true,                  // Allow cookies and credentials
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
  })
);

// Handle preflight requests
app.options("*", cors());

// api requests limit
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 100, 
	standardHeaders: 'draft-7', 
	legacyHeaders: false, 
})

// routes
app.use(
  "/api/v1",
  userRouter,
  orderRouter,
  courseRouter,
  notificationRouter,
  analyticsRouter,
  layoutRouter
);

// testing api
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    succcess: true,
    message: "API is working",
  });
});

// unknown route (broken links)
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

// middleware calls
app.use(limiter);
app.use(ErrorMiddleware);
