const express = require("express")
const rotaLivros = require("./rotas/livros")
const rotaLivrosFavorito = require("./rotas/favoritos")
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors({origin:"*"}))
const port = 8000

app.use("/livros", rotaLivros)
app.use("/favoritos", rotaLivrosFavorito)

app.listen(port,()=>{
    console.log(`escutando a porta ${port}`)
})