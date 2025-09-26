import * as express from "express";
import { authMiddleware } from "../middlewares/auth.middeleware";
import { getMyProfile, selfDeactivate } from "./controller";

export const user: express.IRouter = express.Router();
user.patch("/self_deactivate", authMiddleware, selfDeactivate);
user.get("/get_my_profile", authMiddleware, getMyProfile);
