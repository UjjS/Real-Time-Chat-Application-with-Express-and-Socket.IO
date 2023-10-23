var express =require('express')
var bodyParser = require('body-parser')
var app =express()
/* These lines of code are setting up a server using the Express framework and integrating it with
Socket.IO. */
var http =require('http').Server(app)
var io =require('socket.io')(http)
var mongoose = require('mongoose')

app.use(express.static(__dirname))
app.use(bodyParser.json())
//It is used to parse the data which is in the Body of the postman POST request, It parses  the JSON file that it recieves from postman
app.use(bodyParser.urlencoded({extended:false}))
//It is used to handle URL-encoded form data: When users submit data through HTML forms, it's usually in a URL-encoded format. This middleware helps parse and make sense of that form data.
mongoose.Promise = Promise// to let it know the default promise used is from es6 module, u may not include this
var dburl ='mongodb+srv://shikharujjwal:Sangita1@db1.jd5mu9h.mongodb.net/?retryWrites=true&w=majority'

var Message = mongoose.model('Message',{
    name: String,
    message: String
})
//The above is similar to this :-

app.get('/messages', (req, res) => {
    Message.find({})
        .then((messages) => {
            res.send(messages);
        })
        .catch((err) => {
            console.error('Error fetching messages:', err);
            res.sendStatus(500);
        });
});

app.post('/messages', async (req, res) => {
    try {
        const message = new Message(req.body);

        // Save the message to the database using await.
        await message.save().then(()=>
        {
            console.log('Message is saved');
        });

        // Find a censored message in the database and await the result.
        const censored = await Message.findOne({ message: 'badword' });

        if (censored) {
            console.log('Censored word found', censored);

            // Remove the censored message from the database.0
            console.log('Removed censored message');
            return await Message.deleteOne({ _id: censored._id });
            
        }
        // Emit the message using socket.io.
        io.emit('message', req.body);

        // Send a success response.
        res.sendStatus(200);``
    } catch (err) {
        console.error('Error:', err);
        res.sendStatus(500);
    }
});

io.on('connection',(socket)=>
{
    console.log('a user connected');
})

mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
    // Your code that relies on the MongoDB connection can go here
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Note mongoose.connect returns a promise so it handled like a promise
var server=http.listen(3000,()=>
{
    console.log('server is listening on port ',server.address().port)
})