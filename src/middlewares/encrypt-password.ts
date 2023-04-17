import { hashPassword } from "../utils/password-actions";
import { Request, Response, NextFunction } from "express";

export const encryptPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.body.password = await hashPassword(req.body.password);
        return next()
    } catch (error) {
        next(error)
    }
}
