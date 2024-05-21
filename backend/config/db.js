import mongoose from "mongoose";

const connectDB = async() => {

    try{

        const connection = await mongoose.connect(process.env.MONGO_URI);

        console.log("DB CONNECTED");

    }catch(err){
        console.log(err.message);
    }

}

export default connectDB;