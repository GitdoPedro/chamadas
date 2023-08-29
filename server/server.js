const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: 'http://localhost:3000'}})



const PORT = 3001


io.on('connection', socket =>{

    socket.on('set_chamadas', ({dataAtendimentos,qtdAtendimentos})  => {
        
        io.emit('receive_qtd',{
            qtdId: socket.id,
            qtdAtendimentos,
            dataAtendimentos
        })
    })
})


server.listen(PORT, () => console.log('Server runing....'))