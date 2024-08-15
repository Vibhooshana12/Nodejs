const express = require('express')
const app =express()
const port=3000;
//GET mENU
app.get('/menu',(req,res)=>{
    const newi = req.query.new
    res.send(`Menu: Small Lemonade, Large Lemnade,${newi}`);
});
//post order
app.post('/order',(req,res) => {
    const size =  req.query.size//"Small Lemonade"
   res.send(`Thanks, Order received: ${size} `)
});
//put update order
app.put('/order',(req,res) => {
    const size =  req.query.size//"Small Lemonade"
   res.send(`Order updated: ${size} `)
});
//delete
app.delete('/order',(req,res) => {
    // const size =  req.query.size//"Small Lemonade"
   res.send("Order deleted")
});
//app to listen which port
app.listen(port,() =>{
    console.log(`Lemon stand app listening at http://localhost:${port}`)
});