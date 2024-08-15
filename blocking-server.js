// const http = require('http');
// const port =3000;

// function sleep(milliseconds){
//     const start =Date.now();
//     while (Date.now() - start< milliseconds){
//         console.log("Do nothing");
//     }
// }


// const server = http.createServer((req, res) => {
//     if(req.url ==="/long"){
//         sleep(5000);
//         res.end("Hello")
//     }
//     else{
//     sleep(1000)
//     res.end("World")}
// })


// server.listen(port,()=>{
//     console.log("server3000")
// })