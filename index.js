const express = require('express')//importing express
const body_parser= require('body-parser')
const app = express() //app is a variable storing express function
//service = require('./name.js');
app.use(body_parser.urlencoded({extended:true}))//to access the req.body
//service.get_Function(app);
app.listen(8000 ,()=>{
    console.log("");
})                                         //app.listen is a method to declare port


app.get('/', (req, res)=>{ 
    res.sendFile(__dirname+"/index.html")
    
        

})// app.get handles the requests for the localhost

app.post('/',(req, res)=>{
   
   const num1=Number(req.body.num1)
   const num2=Number(req.body.num2)
   const result=num1+num2
   const t1= req.body.t1
 
 
    if(req.body.t1)
    {
        res.send('Welcome '+t1)
    }
  
else if(!req.body.num1||!req.body.num2)
{
    res.status(404)
    return res.send('Please enter two numbers')
}
else if(req.body.num1 && req.body.num2)
{
   return res.send('Sum of two numbers is '+ result)
}
    
  
  
})
