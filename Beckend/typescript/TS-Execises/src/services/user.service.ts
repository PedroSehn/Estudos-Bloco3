import connection from "../models/connection";
import UserModel from "../models/user.model";
import { User } from '../interfaces/user.interface';

class UserService {
    public model: UserModel;

    constructor() {
        this.model = new UserModel(connection)
    }

    public async getAll(): Promise<User[]>{
        const users = await this.model.getAll()
        return users
    }

    public async getById(id: number): Promise<User>{
        const user = await this.model.getById(id);
        return user
    }

    public async createUser(user: User): Promise<User>{
        const result = await this.model.createUser(user);
        return result;
    }

    public async deleteUser(id: number){
        await this.model.deleteUser(id);
    }
}

export default UserService;