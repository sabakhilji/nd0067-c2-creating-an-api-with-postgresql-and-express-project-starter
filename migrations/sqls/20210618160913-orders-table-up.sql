
    CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    quantity integer ,
    user_id integer REFERENCES users(id) ON DELETE CASCADE,
    
    status VARCHAR(20)
    )