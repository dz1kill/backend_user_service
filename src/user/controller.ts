import { Response } from "express";
import { disableUser, getCurrentUser } from "./service";
import { AuthorizedReq } from "./types";
import { User } from "../models/user";

export async function selfDeactivate(
  req: AuthorizedReq,
  res: Response<string>
) {
  try {
    const { id } = req.user;
    const result = await disableUser(id);
    res.status(result.statusCode || 200).json(result.message);
  } catch (error) {
    res.status(error.statusCode || 500).json(error.message || "Server error");
  }
}

export async function getMyProfile(req: AuthorizedReq, res: Response<User>) {
  try {
    const { id } = req.user;
    const result = await getCurrentUser(id);
    res.status(result.statusCode || 200).json(result.data);
  } catch (error) {
    res.status(error.statusCode || 500).json(error.message || "Server error");
  }
}
