const { MongoClient, ServerApiVersion, FindCursor } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.ljfmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
//const collection = client.db("test").collection("devices");
// perform actions on the collection object
//client.close();
if (err){
  console.log(err.message)
  return
}
console.log("Connected to mongodb");

//client.db().admin().listDatabases().then(result =>{
//  console.log(result['databases'][6]);
//})

//client.db('sample_training').listCollections().toArray().then(result=>{
//  console.log(result);
//})

client.db('sample_training').collection('companies').find({'name':'Facebook'}).toArray().then(result=>{
  console.log(result);
})

});