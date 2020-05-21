const mongoose= require('mongoose')
const validator= require('validator')
const Schema= mongoose.Schema
const userDetailSchema= new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    age:{
        type:Number,
        required:true,

    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid!')
            }
        }
    },
    state:{
        type:String,
        required:true,
        lowercase:true
    },
    testResult:{
        type:String,
        required:true,
        lowercase:true
    }
})

const UserDetails = mongoose.model('UserDetails',userDetailSchema)
module.exports= UserDetails