// ____________Displaying welcome message after creating an express app_______
// const express=require('express');
// const app=express();
// app.get('/',(req,res)=>{
//     res.send('Welcome to Express App!');
// })
// const port=3000;
// app.listen(port,()=>{
//     console.log(`server started on ${port}`);
// })

// ___________________________greeting message______________________________
// const express=require('express')
// const ejs=require('ejs')
// const app=express();
// app.set('view engine','ejs')
// app.get('/',(req,res)=>{
//     res.render('index',{title:'Welcome to ejs',message:'Welcome!',date:'Today date is:18-11-23'})
// })
// const port=3000;
// app.listen(port,()=>{
//     console.log(`server started on ${port}`)
// })

// ___________________multiple views____________________________
// const express = require('express');
// const app = express();
// const port = 3000;
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');
// app.get('/', (req, res) => {
//   res.render('home', { pageTitle: 'home Page' });
// });
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });


