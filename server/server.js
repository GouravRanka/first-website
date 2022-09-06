const express =require('express')
const User  = require('./database/schema/userSchema.ts')
  const connection = require('./database/database.ts')

const app  = express()
app.listen(8000,()=>{
    console.log("server started successfuully")
})
app.post('/signup',async()=>{
    const data={
        name:"gourav",
        password:'mynameisgourav'
    }
var dataToBeSaved = new User(data)
try{
const data =await dataToBeSaved.save();
console.log("data saved successfully",data)
}
catch(err){
    console.log("errror while sending data to database",err.message)
}
})
connection()
