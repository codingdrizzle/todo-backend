import { prisma } from "../../../db/prisma";
import { User } from "../../../types";

const findUser = async (key: any): Promise<User | null> => await prisma.user.findUnique({ where: {email: key} });

export { findUser }
