import { Response } from "express";
import { blockUser, getAllUsers, getUser } from "./service";
import { User } from "../models/user";
import {
  AuthorizedReq,
  DisableUserByIdRequest,
  GetUserByIdRequest,
} from "./types";

export async function getUsersList(req: AuthorizedReq, res: Response<User[]>) {
  try {
    const { id } = req.user;
    const result = await getAllUsers(id);
    res.status(result.statusCode || 200).json(result.data);
  } catch (error) {
    res.status(error.statusCode || 500).json(error.message || "Server error");
  }
}

export async function getUserById(
  req: GetUserByIdRequest,
  res: Response<User>
) {
  try {
    const targetUserId = Number(req.params.id);
    const { id } = req.user;
    const result = await getUser(id, targetUserId);
    res.status(result.statusCode || 200).json(result.data);
  } catch (error) {
    res.status(error.statusCode || 500).json(error.message || "Server error");
  }
}

export async function disableUserById(
  req: DisableUserByIdRequest,
  res: Response<string>
) {
  try {
    const targetUserId = Number(req.params.id);
    const { id } = req.user;
    const result = await blockUser(id, targetUserId);
    res.status(result.statusCode || 200).json(result.message);
  } catch (error) {
    res.status(error.statusCode || 500).json(error.message || "Server error");
  }
}
