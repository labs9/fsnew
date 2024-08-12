const {MongoClient, ObjectID, ObjectId} = require("mongodb");

const url = "127.0.0.1:27017";

const dbName = "college";

const client = new MongoClient (url, {useNewUrlParser : true, useUnifiedTopology : true});

async function connectDB()
{
    try{
        await client.connect();
        console.log("DataBase Connected!");
    }
    catch(error)
    {console.error("Error : ",error);}

}

async function insertStudent(student)
{
    const db = client.db(dbName);
    try{
        const result = await db.collection('students').insertOne(student);
        console.log('Student with id ${result.insertId} inserted successfully.');
    }catch(error)
    {
        console.error("Eorror : ",error);
    }
}

async function updateStudent()
{
    const db = client.db(dbName);
    try{
        const result = await db.collection('students').updateOne(
            {_id:new ObjectId('1835967152fjbh165')},{$set:{Dept:"CSE"}}
        );
        console.log("Updated Successfully");
    }catch(error){console.error("Error : ",error);}
}

async function findAll()
{
    const db = client.db(dbName);

    try{
        const result = await db.collection('students').find({}).toArray();
        console.log("All students : ",result);
    }catch(error) {
        console.error("Error : ",error);
    }
}

async function deleteStudent(){
    const db = client.db(dbName);
    try{
        const result = await db.collection('students').deleteOne(
            {_id : new ObjectId('tyuhjbncvf536538754ftyhujgf')}
        );
        console.log("Deleted Successfully!");
    }catch(error)
    {
        console.error("Error : ",error);
    }
} 

connectDB()

.then(async () => {
    const exst = {name: 'Mayank', age : 18, cgpa : 9.0, Dept : "CSE"};
    await insertStudent(exst);

    await findAll();

    client.close();
});

