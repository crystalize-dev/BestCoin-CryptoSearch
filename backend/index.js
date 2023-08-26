import express from "express"
import cors from "cors";
import axios from "axios";

// app extension
const app = express();
app.use(express.json())
app.use(cors())

// Методы
app.get('/currencies', async (req, res) => {
    const howMany = req.query.amount ? req.query.amount : 10
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${howMany}&page=1&sparkline=false`

    axios.get(url)
        .then(result => {
            res.json(result.data)
        })
        .catch(err => {
            res.status(429).send(err)
        });
});

app.get('/coin', async (req, res) => {
    const coinName = req.query.name
    const url = `https://api.coingecko.com/api/v3/coins/${coinName}`;

    axios.get(url)
        .then(result => {
            res.json(result.data)
        })
        .catch(err => {
            res.status(429).send(err)
        });
})

// Запускаем сервер
app.listen(3001, (err) => {
    if (err) return console.log("Server error - ", err)

    console.log("Server is up!")
})