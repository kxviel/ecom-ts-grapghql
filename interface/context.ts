import { Request, Response } from "express";

export interface IContext {
  req: Request;
  res: Response;
  payload?: { email: string; iat: number; exp: number } | any;
}
