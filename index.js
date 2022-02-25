const express = require('express')
const app = express()

app.use((req, res) => {
    res.send('estou bem 2')
})

app.listen(3000, () => {
    console.log('backend rodando...')
})