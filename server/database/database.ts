
const  User= require('./schema/userSchema.ts')
const mongoose = require('mongoose'  )

const url = "mongodb+srv://gourav:gourav@123@reactflipkartclone.ykned.mongodb.net/?retryWrites=true&w=majority"

const connection = async()=>{
    try{
   await mongoose.connect('mongodb+srv://gourav:gouravranka@reactflipkartclone.ykned.mongodb.net/ecommerce?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
}
    
    )
    console.log("database connected succesfully")

}
    catch(err){
console.log("this is error message",err.message)
    }
    
}
// export default connection
module.exports=connection