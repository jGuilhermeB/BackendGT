const { inserirItensRepository } = require("../controllers/cartItemController")
 const prisma = require ('../config/prisma.js')

async function inserirItensRepository() {
    return await prisma.cartItem.create({
        data: {cart_id, product_id, quantity}
})
    
} 
async function alterarItensRepository(cart_id,product_id, quantity) {
try {
 const item = await prisma.cartItem.update({
        where: {id: Number(id) },
        data: { quantity }
    })
    return item;    
} catch (error) {
    if(error.code === 'P2025') {
       return null
      
    }
    throw error;
}
}
   
async function deletarItensRepository(id) {
    try {
        const item = await prisma.cartItem.delete({
            where: { id: Number(id) }
        })
        return item
        
    } catch (error) {
        if(error.code === 'P2025') {
            return null; // Item não encontrado
        }
    }
}

module.exports = {
    inserirItensRepository,
    alterarItensRepository,
    deletarItensRepository
}