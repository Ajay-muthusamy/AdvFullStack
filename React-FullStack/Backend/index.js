var express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.sendFile('M:/FullStack/FullStack/React-FullStack/Backend/index.html')
})
app.get('/home',(req,res)=>{
    res.sendFile('M:/FullStack/FullStack/React-FullStack/Backend/home.html')
})


app.listen(2020,(err)=>{
    if(err){
        console.log("Error in creating a Server")
    }
    console.log("Server is running on the port 5000")
})