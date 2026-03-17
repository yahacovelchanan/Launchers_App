import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';

const uri = 'mongodb+srv://Elchanan:1572001@elchanan.myiqgjy.mongodb.net/?appName=elchanan';
const client=new MongoClient (uri)
let db = client.db('mydb');
let collection = db.collection('users');

export async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    } catch (error) {
    console.error('Connection error:', error);
  }
}


export async function insertUser(username,password,email,user_type){
   const result = await collection.insertOne({
  username:username,
  password:password,
  email:email,
  user_type:user_type
});
return {"insert":result}
}


export async function update(id,username,password,email,user_type) {
  const result = await collection.updateOne(
  { _id: new ObjectId(id)} ,
  { $set: { username:username,password:password,email:email,user_type:user_type ,last_login:new Date()} }
);
return result
}


export async function deleteOne(id){
    const res = await collection.deleteOne({ _id: new ObjectId(id) });
    console.log(res.deletedCount);
}


export async function findMe(id) {
  if (!ObjectId.isValid(id)) {
    throw new Error('Invalid ObjectId format');
}
  return await collection.findOne({ _id: new ObjectId(id) });
}

export async function findAll(){
    const cursor = collection.find({});
    const documents = await cursor.toArray();
    return documents
    
}



run()