const express = require('express');
const app = express();

//Definindo qual porta vamos usar
const port = 3000;

app.use(express.json());

//Criando uma lista/array para os Games

const jogos = [
    'DOTA 2',
    'GTA',
    'Ragnarok',
    'Tibia',
    'Minecraft',
    'The Sims',
    'Mortal kombat',
    'SuperMarioWorld',
    'Bomberman',
    "Just Dance",
    "Call of Duty",
];

const msgInicio = [
    '~~~~   Bem vindos!   ~~~~',
    '~~~~   Ola amigos, bem vindo ao servidor de games!   ~~~~',
    '~~~~   Servidor de jogos Diamante!   ~~~~',
    '~~~~   Este é o seu Servidor!  ~~~~',
];

//criaçao de randomização da mensagem 
function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function frase(num){
    return msgInicio[num];
}
console.log(frase(randomMinMax(0,msgInicio.length)));


//criaçao de randomização dos jogos  
function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function frase(num){
    return jogos[num];
}
console.log(frase(randomMinMax(0,jogos.length)));



//////////////////////////////////////////////////////////////

//GET / home
app.get('/',(req, res) => {
    res.send(`${frase(randomMinMax(0,4))}`);
});

jogos.forEach(function (item, indice){
    console.log(item, indice);
});

console.log(jogos.length);




//Res manda uma informação/uma mensagem
//Req espera alguma coisa

//Listando os jogos
app.get('/jogos',(req, res)=>{
    ///res.send(jogos);
    res.send(`${frase(randomMinMax(0,4))}`);
});

//Requirindo jogos por ID
//Usando o Req(recebendo uma informação do servidor)

app.get('/jogos/:id', (req, res)=>{
    const id = req.params.id -1; //cria um id e armazena
    const jogo = jogos[id]; //pega o filme da variavel filmes
    res.send(jogo); //retorna o id e o filme
});

app.put('/jogos/:id',(req,res)=> {
    const id=req.params.id-1;
    const jogo = req.body.jogo;
    const nomeAnterior = jogos[id];
    jogos[id]=jogo;
    res.send(`Jogo anterior: ${nomeAnterior}, atualizado com sucesso para:${jogo}.
    O ID do jogo é ${id}`)

});

//rota que deleta um jogo

app.delete('/jogos/:id',(req,res)=> {
    const id=req.params.id-1;
    const jogo = jogos[id];
    if(!jogo){
        res.send('Jogo nao encontrado');
    }
    delete jogos [id];
    res.send("Jogo excluido com sucesso");

});




// rota que deleta um filme e apaga o null

//sugestao da galera SPLICE
app.delete('/jogosSplice/:id', (req,res)=>{
    const id = req.params.id-1;
    jogos.splice(id,1)
    //delete jogos[id]
    res.send("Jogo excluido com sucesso.")
  });

//Escuta o serviço solicitado
app.listen(port, () => {
    console.info(`App está rodando em: http://localhost:${port}/`)
});