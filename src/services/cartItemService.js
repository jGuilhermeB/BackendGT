
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
}

module.exports = {
    inserirItensService,
    alterarItensService,
    deletarItensService
}