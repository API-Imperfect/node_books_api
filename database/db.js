//require in mongoose
const mongoose = require("mongoose");

// create a database connection variable and export it
const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
};

module.exports = connectDB;
