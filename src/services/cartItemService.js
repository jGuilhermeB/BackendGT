
<<<<<<< HEAD
const {cartcheck} = require ('../repositories/cartRepository')
const { alterarItensRepository, deletarItensRepository } = require('../repositories/cartItemRepository')

async function inserirItensService(cart_id) {
    const carrinhoCheck = await cartcheck(cart_id)
    if (!carrinhoCheck) {
       const error = new Error('Carrinho não encontrado')
       error.status = 404
       throw error;
    }
    if (!Number.isInteger(cart_id) || !Number.isInteger(product_id) || !Number.isInteger(quantity)) {
        const error = new Error('Erro no corpo da requisição')
        error.status = 400
        throw error;
    }
    client.query(
        `INSERT INTO cart_item (cart_id, product_id, quantity)
         VALUES ($1, $2, $3) RETURNING *`, [cart_id, product_id, quantity]
    )
}

async function alterarItensService(id, quantity) {
  

    if (!Number.isInteger(quantity) || quantity < 1) {
        const error = new Error('quantidade inválida Deve ser numero maior que 0'). 
        error.status = 400
        throw error;
    }

    
    const result = await alterarItensRepository(id, quantity)
    if (!result) {
        const error = new Error('Item não encontrado para alterar')
        error.status = 404
        throw error;
        
    }
    return result;
}

async function deletarItensService(params) {
return await deletarItensRepository(id)
=======
async function inserirItensService(params) {
    const {cart_id, product_id, quantity} = req.body

    if (!Number.isInteger(cart_id) || !Number.isInteger(product_id) || !Number.isInteger(quantity)) {
        return res.status(400).json({error: "Erro no corpo da requisição"})
    }
}

async function alterarItensService(params) {
    const {id} = req.params
    const {quantity} = req.body

    if (!Number.isInteger(quantity) || quantity < 1) {
        return res.status(400).json({ error: "quantidade inválida. Deve ser número inteiro maior que 0"})
    }
}

async function deletarItensService(params) {
    const {id} = req.params
>>>>>>> c604b33 (refatorando controller para prisma)
}

module.exports = {
    inserirItensService,
    alterarItensService,
    deletarItensService
}