import client from '../database'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()
//const SALT_ROUNDS="10"

//const BCRYPT_PASSWORD="I_CAN_DO_IT"
const { saltRounds, BCRYPT_PASSWORD } = process.env
export type User={
    id:number;
    username:string;
    password:string;
}

export class UserStore{
  async show(id:number):Promise<User>{
      try{
          const conn=await client.connect()
          const sql='SELECT * FROM users WHERE id=($1)'
          const result=await conn.query(sql,[id])
          conn.release()
          return result.rows[0]
      }catch(err){
          throw new Error('cannot get user ${id}')
      }
  }

async create(u:User):Promise<boolean>{
    try{
        const conn=await client.connect()
        const sql = 'INSERT INTO users (username, password) VALUES($1, $2) RETURNING *'

      /*const hash = bcrypt.hashSync(
        u.password + BCRYPT_PASSWORD, 
        parseInt(saltRounds as string)
      );*/

      const result = await conn.query(sql, [u.username, u.password])
      const user = result.rows[0]

      conn.release()

      return true
    } catch(err) {
      throw new Error(`unable create user (${u.username}): ${err}`)
    } 
  }

async delete(id:string):Promise<User>{
  try{
    const conn =await client.connect()
    const sql='DELETE FROM users WHERE id={$1}'
    const result = await conn.query(sql, [id])

    const user = result.rows[0]
    conn.release()
    return user

  } catch (err) {
    throw new Error(`Could not delete user ${id}. Error: ${err}`)
}
}
  

/*async authenticate(userName: string, password: string): Promise<User | null> {
  const connection = await client.connect()
  const sql = 'select password from users where username=($1)'
  const result = await connection.query(sql, [userName])

  if (result.rows.length) {
    const user = result.rows[0]
    connection.release()
    const password_checker = bcrypt.compareSync(password + BCRYPT_PASSWORD, user.password)
    if (password_checker) {
      return user
    }
  }
  return null
}*/
}
  


