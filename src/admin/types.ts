import { Request } from "express";

export interface AuthorizedReq extends Request {
  user: {
    id: number;
  };
}

export interface GetUserByIdRequest extends AuthorizedReq {
  params: { id: string };
}

export interface BlockUserByIdRequest extends AuthorizedReq {
  params: { id: string };
}
