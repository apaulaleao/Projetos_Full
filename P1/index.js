const express = require ('express');
const app = express();

const port = 3000;

const filmes = [
 "O Segredo: Ouse Sonhar",
 "O Céu da Meia Noite",
 "No Escape",
 "Cuidado com quem chama",
 "O Jardim Secreto"

];

//get / setando o home
app.get('/',(req, res) =>{
    res.send("Bem vindos ao melhores Filmes de 2020");
});

app.get('/filmes',(req, res) =>{
    res.send(filmes);
});

app.get('/filmes/:id',(req, res) =>{
    const id = req.params.id-1;
    const filme = filmes[id];
    res.send(filme);
});
app.listen(port,()=> {
    console.info(`App está rodando em : http://localhost:${port}/`)
})