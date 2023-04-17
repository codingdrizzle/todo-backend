import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../../types";
import logger from "../../../utils/logger";
import { FetchResourcesResponse } from "../../../utils/responses";
import { findUser } from "../services";

const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const id:number = parseInt(req.params.id);
    try {
        const user = await findUser(id)
        console.log(user)
        return FetchResourcesResponse(res, user)
    } catch (error : any) {
            const customError: CustomError = { code: error.code, message: error.message }
            return next(customError)
    }
}

export { getUser }