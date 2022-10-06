import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import UserService
from '../services/user.service';

class BookController {
    private UserService: UserService;

    constructor(){
        this.UserService = new UserService();
    }

    public getAll = async (req: Request, res: Response) => {
        const users = await this.UserService.getAll();
        res.status(statusCodes.OK).json(users);
    }

    public getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const user = await this.UserService.getById(parseInt(id))
        res.status(statusCodes.OK).json(user);
    }
    
    public createUser = async (req: Request, res: Response) => {
        const user = req.body;
        const result = await this.UserService.createUser(user);
        res.status(statusCodes.OK).json(result);
    }

    public deleteUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        await this.UserService.deleteUser(parseInt(id))
        res.status(statusCodes.OK).json('usuario deletado');
    }
}

export default BookController