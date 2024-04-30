const express = require('express')
const app = express()

const catalogues = [
    {id:1, judul:"The Psychology of Money: Timeless lessons on wealth, greed, and happiness", genre: "Money, Consumption (Economics), Quality of Life", author: "Morgan Housel", stock:10, year:"2020" },
    {id:2, judul:"It Starts With Us", genre: "Fiction, Romance", author: "Collen Hoover", stock:9, year:"2022" },
    {id:3, judul:"Icebreaker", genre: "Romance, Sports", author: "Hannah Grace", stock:12, year:"2020" },
    {id:4, judul:"Pride and Prejudice", genre: "Fiction", author: "Jane Austen", stock:0, year:"2011" }, 
    {id:5, judul:"Little Women", genre: "Fiction, Young Women", author: "Louisa May Alcott", stock:5, year:"1978" },
    {id:6, judul:"The Things You Can See Only When You Slow Down", genre: "Psychology", author: "Haemin Sunim", stock:6, year:"2017" }
]

app.get('/catalogues', (req, res) => {
    res.json(catalogues);
})

app.get('/catalogues/:catalogue_id', (req, res) => {
    const catalogueId = parseInt(req.params.catalogue_id);
    const catalogue = catalogues.find(catalogue => catalogue.id === catalogueId)
    
    if (catalogue) {
        res.json(catalogue);
    } else {
        res.status(404).json({ error: "Catalogue Not Found, Sorry" })
    }
})

app.listen(5001, () => {
    console.log("server BookApps sedang berjalan")
})