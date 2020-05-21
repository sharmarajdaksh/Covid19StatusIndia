//mongodb://localhost:27017/Covid19Project
const mongoose= require('mongoose')
mongoose.connect('mongodb+srv://lovepreet:lovepreet1234@covid19-cluster-cgemn.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})