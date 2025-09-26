import * as express from "express";
import { auth } from "./auth/router";
import { admin } from "./admin/routes";
import { user } from "./user/routes";

export const router: express.IRouter = express.Router();
router.use("/auth", auth);
router.use("/admin", admin);
router.use("/user", user);
