const express = require('express');
const cartRoute = require('./src/routes/cartRoute.js')
<<<<<<< HEAD
const Client = require('./db.js');

=======
const cartItemRoute = require('./src/routes/cartItemRoute.js')
>>>>>>> 2d2abdf (refatorando prisma)
const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
   res.send('Hello world') 
})

app.get('/boas-vindas', (req, res) => {
   res.send('Seja bem-vindo') 
})

app.use('/v1', cartRoute)
app.use('/v2', cartItemRoute)

app.listen(port, () => {
    console.log(`Servidor rodando na url http://localhost:${port}`)
})