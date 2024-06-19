import express from "express";
import userRouter from "./userroutes.js";
import postRouter from "./postroutes.js";

export const router = express.Router();

router.use("/user", userRouter);
router.use("/post", postRouter);

export default router;
