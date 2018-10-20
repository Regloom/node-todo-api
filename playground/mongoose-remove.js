const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// })

Todo.findOneAndRemove({_id: '5bcb129bd99b4c9b0ee44cff'}).then((todo)=>{
    console.log(todo);
})

Todo.findByIdAndRemove('5bcb129bd99b4c9b0ee44cff').then((todo)=>{
    console.log(todo);
})