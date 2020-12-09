import { Request, Response } from 'express'

const users = [{ name: "Chris", email: "christian.alves@dellead.com" }];

export default{
    async index(req: Request, res: Response){
        return res.json(users)
    }
}
