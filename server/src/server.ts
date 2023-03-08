import express from 'express'

const app = express();

app.get('/ads', (req, res) =>{
    res.json([
        {id: 1, name: 'Anúncio 1'},
        {id: 2, name: 'Anúncio 2'},
        {id: 3, name: 'Anúncio 3'},
        {id: 3, name: 'Anúncio 4'},

    ])
    console.log("Acessou ads")
})

app.listen(3333)