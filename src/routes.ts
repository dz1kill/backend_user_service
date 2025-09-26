import * as express from "express";
import { auth } from "./auth/router";

export const router: express.IRouter = express.Router();
router.use("/auth", auth);
