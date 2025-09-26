import { Response } from "express";
import { getAllUsers } from "./service";
import { User } from "../models/user";
import { AuthenticatedRequest } from "./types";

export async function findAllUser(
  req: AuthenticatedRequest,
  res: Response<User[]>
) {
  try {
    const { id } = req.user;
    const result = await getAllUsers(id);
    res.status(result.statusCode || 200).json(result.data);
  } catch (error) {
    res.status(error.statusCode || 500).json(error.message || "Server error");
  }
}
