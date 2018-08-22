const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// const id = '5b7d63ee452f53a7ef7a555f11'

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid')
// }

/* Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos)
})

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo)
})
 */
// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('ID not found')
//     }
//     console.log('Todo by ID', todo)
// }).catch((e) => console.log(e))

const userId = '5b7bfb60f500af9040697938'

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('ID not found')
    }
    console.log('User by ID', user)
}).catch(e => console.log(e.message))