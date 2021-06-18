
    CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    quantity integer ,
    user_id bigint REFERENCES users(id),
    product_id bigint REFERNECES products(id),
    status VARCHAR(20)
    );