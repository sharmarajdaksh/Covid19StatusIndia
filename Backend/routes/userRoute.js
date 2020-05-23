const express= require('express')
const router = new express.Router()
const UserDetails= require('../models/userDetails')

//get method
router.get('/api/userdetails',async (req,res)=>{
    try{
        const users= await UserDetails.find({})
        res.send(users)
    }
    catch(error){
        res.status(500).send(error)
    }
})

//search by email
router.get('/api/userdetails/:email',async(req,res)=>{
    const _email= req.params.email
        try{
        const user= await UserDetails.findOne({email:_email})
        if(!user){
            return res.status(400).send("No user exist with "+_email+"emailId")
        }
        res.send("User exist with"+_email)
    }
    catch(error){
        res.status(500).send(error)
    }
})

//post method
router.post('/api/userdetails',async(req,res)=>{
    const user=new UserDetails(req.body)
    try{
        await user.save()
        res.send(user)
    }
    catch(error){
        res.status(500).send(error)
    }
})

//update
router.patch('/api/userdetails/:email',async(req,res)=>{
    const _email= req.params.email
    const updates= Object.keys(req.body)
    const allowedUpdates = ['testResult']
    const isValidUpdate= updates.every((update)=>{
        return allowedUpdates.includes(update)
    })
    if(!isValidUpdate){
        return res.status(400).send('Update is not valid!')
    }
    try{
        const user= await UserDetails.findOneAndUpdate({email:_email},req.body,{new:true,runValidators:true})
        if(!user){
            return res.status(400).send("No user exist with "+_email)
        }
        res.send(user)
    }
    catch(error){
        res.status(500).send(error)
    }
})

//delete
router.delete('/api/userdetails/:email',async(req,res)=>{
    const _email= req.params.email
    try{
        const user= await UserDetails.findOneAndDelete({email:_email})
        if(!user){
            return res.status(400).send('No such user exist!')
        }
        res.send(user)
    }
    catch(error){
        res.status(500).send(error)
    }
})
module.exports=router
