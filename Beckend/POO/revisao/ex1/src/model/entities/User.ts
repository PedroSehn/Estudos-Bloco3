import IUser from './IUser';

export default class User implements IUser{
  public readonly id: number
  // readonly = permite somente a leitura - nao pode ser alterado aps setado;
  public username: string
  public email: string
  public password: string

  constructor(){
    this.id = 0
    this.username = ''
    this.email = ''
    this.password = ''
  }

}