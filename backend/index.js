const express = require("express")
const cors = require("cors")

const app = express()
const port = 9098

let transactionArr = []

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json({
    type: "*/*"
}))
app.use(cors())

// Cuando te hagan un GET http://localhost:9098/transactions
app.get('/transactions', (req, res) => {
    res.send(JSON.stringify(transactionArr));
})

// Cuando te hagan un POST http://localhost:9098/transactions
app.post('/transactions', (req, res) => {
    let transaction = req.body;
    transactionArr.push(transaction);
    res.send(JSON.stringify("Guardar bb"));
    console.log(transactionArr);
    // res.send('Me hicieron un post')
})

app.listen(port, () => {
    console.log(`Estoy ejecutándome en http://localhost:${port}`)
})


