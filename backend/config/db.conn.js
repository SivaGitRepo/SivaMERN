const mongoose = require('mongoose');

const connectDB = ()=>{
    mongoose.connect(process.env.ATLAS_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then(con=>{
        console.log(`MongoDB is connected to the host: ${con.connection.host}`)
    }).catch(err => {
        console.log(err)
    })
}

module.exports = connectDB;