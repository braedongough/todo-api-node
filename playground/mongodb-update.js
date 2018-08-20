// const MongoClient = require('mongodb').MongoClient
const {
    MongoClient,
    ObjectID
} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MondoDB server.')
    }
    console.log('Connected to MongoDB server.')
    const db = client.db('TodoApp')

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b7864a57ed6a57db7f1a540")
    }, {
        $set: {
            name: 'Braedon'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res)
    })
    

    //client.close()
})