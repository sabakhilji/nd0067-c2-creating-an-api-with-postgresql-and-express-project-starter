import client from '../database'
import bcrypt from 'bcrypt'
/*import dotenv from 'dotenv'
dotenv.config()*/
const SALT_ROUNDS="10"

const BCRYPT_PASSWORD="I_CAN_DO_IT"

export type User={
    id:number;
    username:string;
    password:string;
}

export class UserStore{
  async show(id:string):Promise<User>{
      try{
          const conn=await client.connect()
          const sql='SELECT * FROM users WHERE id=($1)'
          const result=await conn.query(sql)
          conn.release()
          return result.rows
      }catch(err){
          throw new Error('cannot get user ${id}')
      }
  }

async create(u:User):Promise<User>{
    try{
        const conn=await client.connect()
        const sql = 'INSERT INTO users (username, password_digest) VALUES($1, $2) RETURNING *'

      const hash = bcrypt.hashSync(
        u.password + BCRYPT_PASSWORD, 
        parseInt(SALT_ROUNDS)
      );

      const result = await conn.query(sql, [u.username, hash])
      const user = result.rows[0]

      conn.release()

      return user
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
}
  


