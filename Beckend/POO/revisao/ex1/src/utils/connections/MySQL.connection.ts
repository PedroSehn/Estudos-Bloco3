import mysql, { Pool } from 'mysql2/promise';
import Connection from './Connection';
require('dotenv').config();

class MysqlConnection extends Connection<Pool>{
  private static connection: Pool

  public connect(): Pool {
    const connection = MysqlConnection.connection = mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });
    return connection;
  }
};

export default MysqlConnection;