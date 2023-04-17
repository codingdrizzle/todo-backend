//Error types
export type CustomError = {
    code: number;
    message: string;
};

//Schema types
export type User = {
    id: number
    email: string
    name: string | null
}