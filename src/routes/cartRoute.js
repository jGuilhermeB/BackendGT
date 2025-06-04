<<<<<<< HEAD
<<<<<<< HEAD
const client = require('../../db');

const client = require('../../db');

=======
>>>>>>> 0193800 (refatorando para prisma camada cartItemRoute)
=======
const { listarItens, criarCarrinho, deletarCarrinho } = require('../controllers/cartController');
<<<<<<< HEAD

>>>>>>> c604b33 (refatorando controller para prisma)
=======
>>>>>>> c59338b (refatorando de controller para service)
const router = require('express').Router();

//listar carrinho itens
router.get('/:id/itens',listarItens)

//cria carrinho
router.post('/', criarCarrinho)

//Deleta todos os itens do carrinho
router.delete('/:id/itens', deletarCarrinho)

module.exports = router;
