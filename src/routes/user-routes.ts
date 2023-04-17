import { getUsers, getUser } from '../app/user/controllers'

export = (router: any) => {
    router.get('/user/:id', getUser)
    router.get('/users', getUsers)
}