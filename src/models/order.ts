import client from '../database'

export type Order={
    id:number;
    quantity:number;
    status:string;
    user_id:number;
    
}

export class OrderStore {
    async index(): Promise<Order[]> {
      try {
        // @ts-ignore
        const conn = await client.connect()
        const sql = 'SELECT * FROM orders'
  
        const result = await conn.query(sql)
  
        conn.release()
  
        return result.rows 
      } catch (err) {
        throw new Error(`Could not get orders. Error: ${err}`)
      }
    }
  
    async show(id: number): Promise<Order> {
      try {
      const sql = 'SELECT * FROM orders WHERE id=($1)'
      // @ts-ignore
      const conn = await client.connect()
  
      const result = await conn.query(sql, [id])
  
      conn.release()
  
      return result.rows[0]
      } catch (err) {
          throw new Error(`Could not find order ${id}. Error: ${err}`)
      }
    }
  
    async create(o: Order): Promise<Order|string> {
        try {
      const sql = 'INSERT INTO orders (id,quantity,status,user_id) VALUES($1, $2, $3,$4) RETURNING *'
      // @ts-ignore
      const conn = await client.connect()
  
      const result = await conn
          .query(sql, [o.id,o.quantity, o.status,o.user_id] )
  
      const order = result.rows[0]
  
      conn.release()
  
      return order
        } catch (err) {
            throw new Error(`Could not add new order . Error: ${err}`)
        }
    }
  
    async delete(id:number): Promise<boolean|string> {
        try {
      const sql = 'DELETE FROM orders WHERE id=($1)'
      // @ts-ignore
      const conn = await client.connect()
  
      const result = await conn.query(sql, [id])
  
      const order = result.rows[0]
  
      conn.release()
  
      return true 
        } catch (err) {
            throw new Error(`Could not delete order ${id}. Error: ${err}`)
        }
    }
  }