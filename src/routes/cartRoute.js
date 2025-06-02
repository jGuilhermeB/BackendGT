const router = require('express').Router();




router.get('/:id/itens', async (req, res) => {
    res.send('Listar carrinho') 
    const {id} = req.params
    try {
        await client.query(
            'SELECT * FROM cart_item WHERE cart_id = $1', 
            [id]
        )
        res.status(200).json(result.rows)
    } catch (error) {
      
  console.log("Erro ao listar itens do carrinho:", error);
        res.status(500).json({ error: 'Erro ao listar itens do carrinho' });      
    }
})
router.post('/', (req, res) => {
    res.send('Criar carrinho') 
 })
router.post('/item', (req, res) => {
    res.send('Adicionar item ao carrinho') 
 })
router.put('/item/:id', (req, res) => {
    res.send('Alterar a quantidade item carrinho') 
 })
router.delete('/item/:id', (req, res) => {
    res.send('Deletar item carrinho') 
 })
router.delete('/:id/itens', (req, res) => {
    res.send('Deletar carrinho') 
 })

module.exports = router;