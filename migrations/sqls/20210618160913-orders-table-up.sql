
    CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    quantity integer ,
    user_id integer REFERENCES users(id) ,
    
    status VARCHAR(20)
    )