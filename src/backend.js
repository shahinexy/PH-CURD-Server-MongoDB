// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const app = express()
// const port = process.env.PORT || 4000

// //middlewear
// app.use(cors())
// app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('curd is running');
// })

// // mongo db

// const uri = "mongodb+srv://shahinexy:d6ravFglW8qORy74@cluster0.76h69in.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     await client.connect();

//     const database = client.db("usersDB");
//     const userCollection = database.collection("users");

//     app.get('/users', async (req, res)=>{
//       const cursor = userCollection.find()
//       const result = await cursor.toArray()
//       res.send(result)
//     })

//     app.get('/users/:id', async (req, res)=>{
//       const id = req.params.id;
//       const query = {_id : new ObjectId(id)}
//       const user = await userCollection.findOne(query)
//       res.send(user)
//     })

//     app.post('/users', async (req, res) => {
//       const user = req.body;
//       console.log(user);
//       const result = await userCollection.insertOne(user);
//       res.send(result)
//     })

//     app.put('/users/:id', async (req, res)=>{
//       const id = req.params.id;
//       const user = req.body;
//       console.log(id, user);
//       const filter = {_id : new ObjectId(id)}
//       const option = {upsert: true}
//       const updatedUser = {
//         $set: {
//           name: user.name,
//           email: user.email,
//         }
//       }
//       const result = await userCollection.updateOne(filter, updatedUser, option)
//       res.send(result)
//     })

//     app.delete('/users/:id', async (req, res)=>{
//       const id = req.params.id;
//       console.log("delete the id:", id);
//       const query = {_id: new ObjectId(id)}
//       const result = await userCollection.deleteOne(query)
//       res.send(result)
//     })

//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");

//   } finally {
//     // await client.close();
//   }
// }
// run().catch(console.dir);



// app.listen(port, () => {
//   console.log(`CURD runnign in Port: ${port}`);
// })

// // mongodb
// // shahinexy
// // d6ravFglW8qORy74