function mudaCorH3(){
    titulo.style.color = "green";
}

titulo.addEventListener('click', mudaCorH3);

function adicionaP(){
    // criar o paragráfo
    const p = document.createElement("p");
    // criar um texto
    const texto = document.createTextNode("Texto do novo paragráfo");
    // adicionar texto ao paragráfo
    p.appendChild(texto);
    //adicionar um paragráfo ao body da página
    document.body.appendChild(p);
}

par.addEventListener('click', adicionaP);

function carregaAPI(){
    const url = "https://jsonplaceholder.typicode.com/users";

    //Retorna um objeto do tipo Promisse(Promessa de retorno).
    fetch(url).then((resposta) => {
        if(!resposta.ok){
            throw new Error("Erro de rede ou servidor!");
        }

        return resposta.json();
    }).then((dados) => {
        const p = document.createElement("p");
        const idx = Math.floor(Math.random()*9);
        const textN = document.createTextNode(dados[idx].name);
        const textE = document.createTextNode(dados[idx].email);
        const textBR = document.createElement('br');
        p.appendChild(textN);
        p.appendChild(textBR);
        p.appendChild(textE);
        document.body.appendChild(p);
    }).catch((erro) => {
        console.log(erro);
    });
}

botao.addEventListener('click', carregaAPI);