import { Order, OrderStore } from '../order';

const store = new OrderStore()

describe("Order Model", () => {
  it('should have a show method', () => {
    expect(store.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(store.delete).toBeDefined();
  });
  
  it('should have a index method', () => {
    expect(store.index).toBeDefined();
  });

 it('create method should add a order', async () => {
    const result = await store.create({  
      id:1,      
      quantity:1,
      status:"open",
      user_id:1n,
      
    });
    expect(result).toBeTrue()
      
  
  });
  it('index method should return a list of orders', async () => {
    const result = await store.index();
    expect(result).toBeTrue()     

    
      });
 

  it('show method should return the correct order', async () => {
    const result = await store.show(1);
    expect(result).toBeTrue()      
      
   
  });

  it('delete method should remove the user', async () => {
    const result=store.delete(1);
   

    expect(result).toBeTrue();
  });
});