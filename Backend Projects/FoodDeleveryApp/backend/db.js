const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://gofood:QLRIG7PEO2VeCuVT@cluster0.pt6kdsf.mongodb.net/?retryWrites=true&w=majority";

const mongoDB = async()=>{
   await mongoose.connect(mongoURI, {useNewUrlParser: true}, (err, result)=>{
        if(err){
            console.log("...",err);
        }else{
            console.log("connected");
        }     
    });
}

module.exports = mongoDB;
