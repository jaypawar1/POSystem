const Mongoose = require('mongoose')

const connectDb = handler=> async (req, res) => {
    if (Mongoose.connections[0].readyState) {
        // Use current db connection
        return handler(req, res)
    } else {
    await Mongoose.connect("mongodb+srv://xxx:xxx@cluster0.bjoglyj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    return handler(req, res)
}}

export default connectDb;