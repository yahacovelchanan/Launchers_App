import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';

const uri = 'mongodb+srv://Elchanan:1572001@elchanan.myiqgjy.mongodb.net/?appName=elchanan';
const client=new MongoClient (uri)
let db = client.db('mydb');
let collection = db.collection('launchers');

export async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    } catch (error) {
    console.error('Connection error:', error);
  }
}

export async function findAll(){
    const cursor = collection.find({});
    const documents = await cursor.toArray();
    return documents
    
}
export async function findById(id) {
  if (!ObjectId.isValid(id)) {
    throw new Error('Invalid ObjectId format');
  }
  
  return await collection.findOne({ _id: new ObjectId(id) });
}

export async function insert(city,rocketType,latitude,longitude,name){
   const result = await collection.insertOne({
  city:city,
  rocketType:rocketType,
  latitude:latitude,
  longitude:longitude,
  name:name
});
return {"insert":result}
}

export async function deleteOne(id){
    const res = await collection.deleteOne({ _id: new ObjectId(id) });
    console.log(res.deletedCount);
}


run();

