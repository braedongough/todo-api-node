const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose')
mongoose.set('useFindAndModify', false)
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

Todo.findByIdAndRemove('5b82cd3bf2d5e6682e24f975').then((todo) => {
    console.log(todo)
})