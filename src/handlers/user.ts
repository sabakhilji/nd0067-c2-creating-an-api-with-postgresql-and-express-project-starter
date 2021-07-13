import express, {Request,Response} from 'express';
import {User,UserStore} from '../models/user';

const store=new UserStore();

const create= async (req:Request,res:Response)=>{
    try{
        const user:User={ id:req.body.id,
            username:req.body.username,
            password:req.body.password
        }
        const newuser=await store.create(user);
        res.json(newuser);
    }catch(err){
        res.status(400)
        res.json(err)
    }
    
}
 
const show=async (req:Request,res:Response)=>{
    const user=await store.show(req.body.id);
    res.json(user)

}

const destroy=async(req:Request,res:Response)=>{
    const output=await store.delete(req.body.id);
    res.json(output)
}

const userRoutes=(app:express.Application)=>{
    app.post('/user',create)
    app.get('/user/:id',show)
    app.delete('/user',destroy)
}

export default userRoutes;