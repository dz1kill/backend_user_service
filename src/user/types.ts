import { Request } from "express";

export interface AuthorizedReq extends Request {
  user: {
    id: number;
  };
}
