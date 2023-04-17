    import { prisma } from "../../../db/prisma";
    import { User } from "../../../types";

    const findUsers = async (): Promise<User[]> =>  await prisma.user.findMany();

    export {findUsers}
