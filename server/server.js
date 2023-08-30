const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const ChamadaModel = require('./models/chamadaModel');
const chamadaRoutes = require('./config/routes'); 

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: 'http://localhost:3000' } });

app.use(bodyParser.json());

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


const Call = ChamadaModel(sequelize, sequelize.Sequelize.DataTypes);
sequelize.sync().then(() => {
   app.use('/api/call', chamadaRoutes);
  server.listen(PORT, () => console.log('Server running....'));
}).catch((error) => {
  console.error('Error initializing the database:', error);
});