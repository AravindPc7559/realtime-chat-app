const express = require("express")
const path = require("path")
const { Socket } = require("socket.io")
const app = express()
const server = require("http").createServer(app)
const io = require('socket.io')(server)
const PORT = process.env.PORT || 3000;

//import the path among other dependencies
app.use(express.static(path.join(__dirname + '/public')))

//sockett
io.on('connection',socket => {
    socket.on('chat',message => {
        // console.log('From Client :', message )
        io.emit('chat',message)
    })
})

//just to test the server
app.get('/',(req,res)=>{
    res.status(200).send("WORKING")
})

server.listen(PORT,()=>console.log(`server running on ${PORT}`))