const express =require('express');
const app=express()
const port = process.env.PORT || 3005;

// app.use(express.json())
app.get('/currency', function(req, res) {
    res.sendFile(process.cwd() + '/cur.html');
});


app.listen(port,function(){
    console.log("Server is running on http://localhsot:"+port)
});
// const options = {
//     extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
//     index: ['index.html'],  
// }
