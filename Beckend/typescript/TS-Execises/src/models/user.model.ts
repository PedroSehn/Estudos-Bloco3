import { Pool, ResultSetHeader } from 'mysql2/promise';
import {User} from '../interfaces/user.interface';

class UserModel{
    public connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection
    }

    public async getAll(): Promise<User[]> {
        const result = await this.connection
        .execute('SELECT * FROM users')
        const [rows] = result;
        return rows as User[];
    }

    public async getById(id: number): Promise<User>{
        const result = await this.connection
        .execute('SELECT * FROM users WHERE id = ?', [id])
        const [row] = result;
        const [user] = row as User[];
        return user;
    }

    public async createUser(user: User): Promise<User>{
        const { name, email, password } = user;
        
        const result = await this.connection
        .execute<ResultSetHeader>('INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
         [name, email, password]);

        const [dataInserted] = result;
        const { insertId } = dataInserted;
        return { id: insertId, ...user}

    }

    public async deleteUser(id: number) {
        const user = await this.connection
        .execute('DELETE FROM users WHERE id = ?'
        , [id]);
    }
}

export default UserModel