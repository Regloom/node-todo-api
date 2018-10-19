const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //         _id: new ObjectID('5bc9d6c0d99b4c9b0ee44374')
    //     }).toArray().then((docs)=>{
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //         console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // }, (err)=>{
    //         console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
            name: 'Ivan'
        }).toArray().then((docs)=>{
            console.log('Users');
            console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
            console.log('Unable to fetch users', err);
    });

    //db.close();
});