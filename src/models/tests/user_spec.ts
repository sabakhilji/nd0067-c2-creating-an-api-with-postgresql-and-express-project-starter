import { User, UserStore } from '../user';
//import { Order, OrderStore} from '../order';

const store = new UserStore()
//const store_order = new OrderStore()
describe("User Model", () => {
  it('should have a show method', () => {
    expect(store.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });

  it('should have a delete method', () => {
      expect(store.delete).toBeDefined();
  });
  
  it('should have a authenticate method', () => {
      expect(store.authenticate).toBeDefined();
  });

  it('create method should add a user', async () => {
    const result = await store.create({  
      id:1,      
      username:'saba',
      password:'Maairah_14'
    })
    expect(result).toBeTrue() 
  });

 

  it('show method should return the correct user', async () => {
    const result = await store.show(1);
    expect(result).toEqual({
      id:1,
      username:"saba",
      password:"Maairah_14",
    });
  });

  it('delete method should remove the user', async () => {
    const result=await store.delete(1);
    expect(result).toBeTrue;
  });

  /*describe("Order Model", () => {
    it('should have a show method', () => {
      expect(store_order.show).toBeDefined();
    });
  
    it('should have a create method', () => {
      expect(store_order.create).toBeDefined();
    });
  
    it('should have a delete method', () => {
      expect(store_order.delete).toBeDefined();
    });
    
    it('should have a index method', () => {
      expect(store_order.index).toBeDefined();
    });
  
   it('create method should add a order', async () => {
      const result = await store_order.create({  
        id:1,      
        quantity:1,
        status:"open",
        user_id:1,
        
      })
      expect(result).toEqual({id:1,
        quantity:1,
        status:"open",
        user_id:1,
      });
        
    });
    it('index method should return a list of orders', async () => {
      const result = await store_order.index();
      expect(result).toEqual([{id:1,
        quantity:1,
        status:"open",
        user_id:1,
      }]);     
  
      
        });
   
  
    it('show method should return the correct order', async () => {
      const result = await store_order.show(1);
      expect(result).toEqual({id:1,
        quantity:1,
        status:"open",
        user_id:1,
      });      
        
     
    });
  
    it('delete method should remove the order', async () => {
      const result=await store_order.delete(1);
      
  
      expect(result).toBeTrue();
    });*/


});