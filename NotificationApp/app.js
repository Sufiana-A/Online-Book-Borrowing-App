const express = require('express')
const app = express ()

const notifications = [
    {user_id: 1, message: "Harap kembalikan buku ini maksimal tanggal 29 April 2024", book_id: 1, judul: "The Psychology of Money: Timeless lessons on wealth, greed, and happiness", author: "Morgan Housel"},
    {user_id: 2, message: "Harap kembalikan buku ini maksimal tanggal 30 April 2024", book_id: 2, judul: "It Starts With Us", author: "Collen Hoover"},
    {user_id: 3, message: "Harap kembalikan buku ini maksimal tanggal 1 Mei 2024", book_id: 3, judul: "Icebreaker", author: "Hannah Grace"},
    {user_id: 4, message: "Harap kembalikan buku ini maksimal tanggal 2 Mei 2024", book_id: 4, judul: "Pride and Prejudice", author: "Jane Austen"},
    {user_id: 5, message: "Harap kembalikan buku ini maksimal tanggal 3 Mei 2024", book_id: 5, judul: "Little Women", author: "Louisa May Alcott"}
]

app.get('/notifications', (req, res) =>{
    res.json(notifications)
})

app.get('/notifications/:user_id', (req, res) => {
    const userId = parseInt(req.params.user_id)
    const notification = notifications.find(notification => notification.user_id === userId)

    if(notification){
        res.json(notification)
    }else{
        res.status(404).json({error: "notification not found"})
    }
    
})

app.listen(5004, () => {
    console.log("server notification berjalan")
})