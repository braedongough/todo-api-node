const express = require('express')
const bodyParser = require('body-parser')
const {
    ObjectID
} = require('mongodb')

const {
    mongoose
} = require('./db/mongoose')
const {
    Todo
} = require('./models/todo')
const {
    User
} = require('./models/user')

const app = express()
const port = process.env.PORT || 300

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e)
    })
})

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        })
    }, (e) => {
        res.status(400).send(e)
    })
})

app.get('/todos/:id', (req, res) => {
    const id = req.params.id
    //validate ID using isValid
    if (!ObjectID.isValid(id)) {
        return res.status(404).send()
    }

    //findById
    Todo.findById(id).then((todo) => {
        if(!todo) {
            res.status(404).send()
        }
        res.send({todo})
    }).catch((e) => {
        res.status(400).send()
    })
})

app.listen(port, () => {
    console.log(`Started on up at port ${port}`)
})

module.exports = {
    app
}