import client from '../database'

export type Product={
    id:number;
    name:string;
    price:number;
    category:string;
}

export class ProductStore {
    async index(): Promise<Product[]> {
      try {
        // @ts-ignore
        const conn = await client.connect()
        const sql = 'SELECT * FROM products'
  
        const result = await conn.query(sql)
  
        conn.release()
  
        return result.rows 
      } catch (err) {
        throw new Error(`Could not get orders. Error: ${err}`)
      }
    }
  
    async show(id: number): Promise<Product> {
      try {
      const sql = 'SELECT * FROM products WHERE id=($1)'
      // @ts-ignore
      const conn = await client.connect()
  
      const result = await conn.query(sql, [id])
  
      conn.release()
  
      return result.rows[0]
      } catch (err) {
          throw new Error(`Could not find product ${id}. Error: ${err}`)
      }
    }
  
    async create(p:Product): Promise<boolean> {
        try {
      const sql = 'INSERT INTO products(id,name,price,category) VALUES($1, $2, $3,$4) RETURNING *'
      // @ts-ignore
      const conn = await client.connect()
  
      const result = await conn
          .query(sql, [p.id,p.name,p.price,p.category])
  
      const product = result.rows[0]
  
      conn.release()
  
      return true
        } catch (err) {
            throw new Error(`Could not add new order . Error: ${err}`)
        }
    }
  
    async delete(id: number): Promise<boolean|string> {
        try {
      const sql = 'DELETE FROM products WHERE id=($1)'
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