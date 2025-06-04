<<<<<<< HEAD
<<<<<<< HEAD
const client = require('../../db');

const client = require('../../db');

=======
>>>>>>> 0193800 (refatorando para prisma camada cartItemRoute)
=======
const { listarItens, criarCarrinho, deletarCarrinho } = require('../controllers/cartController');

>>>>>>> c604b33 (refatorando controller para prisma)
const router = require('express').Router();

//listar carrinho itens
router.get('/:id/itens', async (req, res) => {
    res.send(await listarItens(req.params.id)) 
})

//cria carrinho
router.post('/', async (req, res) => {
    res.send(await criarCarrinho(req.body))
 })

//Deleta todos os itens do carrinho
router.delete('/:id/itens', async (req, res) => {
    res.send(await deletarCarrinho(req.params.id))
 })

module.exports = router;
