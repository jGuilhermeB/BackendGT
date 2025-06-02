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
        res.status(500).json({ error: 'Erro ao listar itens doo carrinho' });      
    }
})
router.post('/', async(req, res) => {
 const {user_id} = req.body
 try {
    await client.query(
        'INSERT INTO cart (user_id) VALUES ($1)'
        [user_id]
    )
    res.status(201).json({message:'Carrinho criado com sucesso'})
 } catch (error) {
    console.log("Erro ao criar carrinho:", error);
    res.status(500).json({ error: 'Erro ao criar carrinho' , details: error.message});  
    
 }
 })

router.post('/item', async (req, res) => {

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