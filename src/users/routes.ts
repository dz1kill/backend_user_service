import * as express from "express";
import { findAllUser } from "./controller";
import { authMiddleware } from "../middlewares/auth.middeleware";

export const users: express.IRouter = express.Router();
users.get("/list", authMiddleware, findAllUser);
