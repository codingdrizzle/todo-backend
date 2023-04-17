import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../../types";
import logger from "../../../utils/logger";
import { FetchResourcesResponse } from "../../../utils/responses";
import { findUsers } from "../services/find-users";

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await findUsers()
        return FetchResourcesResponse(res, users)
    } catch (error: any) {
        const customError: CustomError = { code: error.code, message: error.message }
        return next(customError)
    }
}

export { getUsers }