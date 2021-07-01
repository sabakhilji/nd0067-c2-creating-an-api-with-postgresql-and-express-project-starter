import { User, UserStore } from '../user';

const store = new UserStore()

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
});