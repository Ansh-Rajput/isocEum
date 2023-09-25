const mongoose = require("mongoose");

const connectToDataBase = () => {
    mongoose.connect(`${process.env.MONGO_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => { console.log("dataBase connected.") }).catch((error) => {
        console.log(error.message);
    });
};

module.exports = connectToDataBase;