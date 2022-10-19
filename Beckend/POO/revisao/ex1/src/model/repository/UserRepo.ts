import MysqlConnection from "../../utils/connections/MySQL.connection";
import IUser from "../entities/IUser";
import { ResultSetHeader } from "mysql2/promise";

export default class UserRepository {
 private conn: MysqlConnection;

  constructor(){
    this.conn = new MysqlConnection();
  }

  public create = async (user: IUser): Promise<IUser> => {
    const { username, email, password } = user;
    const query = `INSERT INTO SOLID.users (username, email, password) VALUES (?, ?, ?)`;
    const values = [  username, email, password ]
    const [result] = await this.conn.connect().execute<ResultSetHeader>(query, values)
    const { insertId: id } = result;
    const newUser: IUser = { id, username, email, password };
    return newUser;
  }
}