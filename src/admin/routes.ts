import * as express from "express";
import { blockUserById, getUserById, getUsersList } from "./controller";
import { authMiddleware } from "../middlewares/auth.middeleware";

export const users: express.IRouter = express.Router();
users.get("/users_list", authMiddleware, getUsersList);
users.get("/find_user/:id", authMiddleware, getUserById);
users.patch("/block_user/:id", authMiddleware, blockUserById);
