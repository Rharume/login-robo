import express from 'express'
//json=notaçao de objeto javascript
import mongoose from 'mongoose'



const app = express()
app.use(express.json())//avisa que vou usar json

mongoose.connect('mongodb+srv://neresrharume19_db_user:ug8qBPV1EPEvcaKU@cluster0.a09q4q2.mongodb.net/Usuarios?appName=Cluster0')
.then( () => console.log("Conectado ao banco de dados Mngo"))
.catch( () => console.log("Error ao conectar ao Mongo"))


const usuarioSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    idade: {type: Number, required: true}
}, {timestamps: true})//cria automaticamente o dia e horario que os registros foram criados

const Usuario = mongoose.model('Usuarios', usuarioSchema)


let usuarios = [{
    id: 234, 
    nome: "rha", 
    idade:19, 
    email: "rhagmail.com"}]

//retorna usuarios
app.get('/users',async (req, res) => {

    const usuariosDoBanco = await Usuario.find()

    //respondendo ao front com usuarios
    res.send(usuariosDoBanco)
})


app.post('/users',async (req, res) => {

    const usuariocriado = await Usuario.create(req.body)
   
    res.json(req.body)

})

app.listen(3001, function(){
    console.log("Servidor Rodando na porta 3001")
})

