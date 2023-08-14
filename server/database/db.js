import mongoose  from 'mongoose';



const DBConnection = async() =>{
    const MONGODB_URL= `mongodb://user:satyamfileshare@ac-hzvvuam-shard-00-00.hcijffd.mongodb.net:27017,ac-hzvvuam-shard-00-01.hcijffd.mongodb.net:27017,ac-hzvvuam-shard-00-02.hcijffd.mongodb.net:27017/?ssl=true&replicaSet=atlas-x65a9r-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONGODB_URL, { useNewUrlParser: true});
        console.log('Database connected succesfully')
    }catch (error){
        console.error('Error while connecting with the database',error.message);
    }
}

export default DBConnection;