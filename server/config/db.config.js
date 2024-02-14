const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongoDb = () => {
    mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => console.log("Connected to MongoDB!"))
        .catch((error) => {
            console.log('Error in connecting to MongoDB!' + error);
            throw error;
        });
};

module.export = connectToMongoDb;