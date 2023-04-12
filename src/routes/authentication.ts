import express, {Response, Request} from 'express'

const controller = (req: Request, res: Response) => {
    res.send('Hello')
}

export = (router: any) => {
    console.log('mainiii')
    router.get('/user', controller)
}