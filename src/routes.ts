import * as express from "express";
import { auth } from "./auth/router";
import { users } from "./users/routes";

export const router: express.IRouter = express.Router();
router.use("/auth", auth);
router.use("/users", users);
