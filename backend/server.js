const express=require('express')
const bodyParser=require ('body-parser');
const {MongoClient,ObjectID}=require('mongodb')
const assert =require('assert');
const app = express();
app.use(bodyParser.json());
const MongoUrl="mongodb://localhost:27017"
const dataBase='MovieList'
MongoClient.connect(
    MongoUrl,{ useNewUrlParser: true },(err,client)=>{
        assert.equal(err,null ,'dataBase connection failed ');
        const db=client.db(dataBase);


        app.post('/add-movie',(req,res)=>{
         let newMovie=req.body;
         db.collection('movies').insertOne(newMovie,(err,data)=>{
             if(err)res.send('cannot add new movie')
             else res.send('movie added');
         }) 
        })   


        app.get('/movies',(req,res)=>{
            db.collection('movies').find({}).toArray((err,data)=>{
                if(err)res.send('cannot find  movies')
                else res.send(data);
            })
        })
    }
    
)
app.listen(3007,err=>{
    if (err)console.log("serveur erreur");
    else console.log("server is running on port 3007");

});