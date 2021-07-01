import { Product,ProductStore } from '../product';

const store = new ProductStore()

describe("Product Model", () => {
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

 it('create method should add a product', async () => {
    const result = await store.create({  
      id:1,      
      name:"suit",
      price:10,
      category:"clothes",
      
    })
    expect(result).toBeTrue();
      
  });
  it('index method should return a list of products', async () => {
    const result = await store.index();
    expect(result).toEqual([{id:1,
        name:"suit",
        price:10,
        category:"clothes",
    }]);     

    
      });
 

  it('show method should return the required product', async () => {
    const result = await store.show(1);
    expect(result).toEqual({id:1,
        name:"suit",
        price:10,
        category:"clothes",
    });      
      
   
  });

  it('delete method should remove the order', async () => {
    const result=await store.delete(1);
    

    expect(result).toBeTrue();
  });
});