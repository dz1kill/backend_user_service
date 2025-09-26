import * as express from "express";
import { disableUserById, getUserById, getUsersList } from "./controller";
import { authMiddleware } from "../middlewares/auth.middeleware";

export const admin: express.IRouter = express.Router();
admin.get("/users_list", authMiddleware, getUsersList);
admin.get("/find_user/:id", authMiddleware, getUserById);
admin.patch("/disable_user/:id", authMiddleware, disableUserById);
