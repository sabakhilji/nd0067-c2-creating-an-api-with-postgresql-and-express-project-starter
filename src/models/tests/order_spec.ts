import { User, UserStore } from '../user';
import { Order, OrderStore } from '../order';
const store_user = new UserStore()
const store = new OrderStore()

describe("Order Model", () => {
  beforeAll (async()=>{await store_user.create({
              id:1,
              username:"saba",
              password:"123"
  })}
  );
  afterAll(async()=>{
    await store_user.delete(1);
  })
/*spyOn(store,'index').and.returnValue(Promise.resolve([{
  id:1,
  quantity:1,
  status:"open",
  user_id:1,
}])
);

spyOn(store,'create').and.returnValue(Promise.resolve({
  id:1,
  quantity:1,
  status:"open",
  user_id:1,
})
);*/



  
  
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
      user_id:1,
      
    })
    expect(result).toEqual({id:1,
      quantity:1,
      status:"open",
      user_id:1,
    });
      
  });
  it('index method should return a list of orders', async () => {
    const result = await store.index();
    expect(result).toEqual([{id:1,
      quantity:1,
      status:"open",
      user_id:1,
    }]);     

    
      });
 

  it('show method should return the correct order', async () => {
    const result = await store.show(1);
    expect(result).toEqual({id:1,
      quantity:1,
      status:"open",
      user_id:1,
    });      
      
   
  });

  it('delete method should remove the order', async () => {
    const result=await store.delete(1);
    

    expect(result).toBeTrue();
  });
});