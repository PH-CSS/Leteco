const selecaoDLetra = document.querySelector(".selecaoDeLet")

// console.dir(selecaoDLetra.childNodes);
const letras = document.querySelectorAll(".letras");

// letras.forEach(letr => {
//     letr.Lower()
// });
// seleção de letras por .value

const colunas = document.querySelectorAll(".columns");
const texto = document.querySelectorAll(".text");
const bgColorTXT = document.getElementById("#textForColor")

// seleção de colunas por chances
const resposa = document.querySelector(".respostaReal");

const apagar = document.querySelector(".apagar");
const enviar = document.querySelector(".enviar");


const tentarDNV = document.querySelector(".newTry");
tentarDNV.addEventListener('click', () =>{
location.reload();
})


let i = 0;
// seleção inicial da array dos objetos de tentativas
let a = 0;
// seleção da array interna de tentativas, ou seja, cada letra 
// em equação Big-O = (On^2)

// tentativas
let arrayColum = {
    coluna: [
        { tentativa: [] },
        { tentativa: [] },
        { tentativa: [] },
        { tentativa: [] },
        { tentativa: [] },

    ],

};
// metodo para acessar de maneira mais simplificada o objeto das tentativas:
let objeto = arrayColum.coluna[i].tentativa
console.log(arrayColum.coluna);
// esse "obj" é um objeto temporario para guardar os valores 
// registrados dos botões de letras clicados
let obj = { array: colunas }

letras.forEach((btn) => {

    btn.addEventListener('click', (e) => {
        let escolhido = e.target.value;
        // e.target.value é para peagr o vulgo: valor clicado
        
        fufu(escolhido);
        console.log(objeto);
    });

});

// seleciona do evento passado, o e.target.value
// (Qual botao foi clicado e pega o value)
function fufu(escolhido) {
    // atribui para o objeto temporário o valor clicado agora como "escolhido"
    obj.array[i].children[a].value = escolhido;
    // console.log(obj.array[i].children[a]);
    // mostra o valor clicado 
    a++;
    // este objeto é o responsavel para a organização das tentativas
    // (lembrando que lá em cima ele já esta organizado com o i++)
    objeto.push(escolhido)
};

// Apaga as colunas selecionadas,
// como a coluna é uma a frente da que teve a seleção da letra
// tem que retirar um index do "a"
apagar.addEventListener('click', () => {
    if (a != 0) {
        a--;
        obj.array[i].children[a].value = "";
        // atribui um valor vazio para o input
        objeto.pop()
        console.log(objeto);

    };
});

let teste = 0;
enviar.addEventListener('click', () => {
    if (a == colunas[i].children.length) {
        console.log(objeto);
        comparacao(objeto);
        obj.array[i++];
        a = 0;
        teste++
        console.log(teste);
        objeto = arrayColum.coluna[i].tentativa;
        palavraSelecionadaArray = arrayG.split('')
        console.log(palavraSelecionadaArray);
        for (let i = 0; i < palavraSelecionadaArray.length; i++) {
            colunas[i].children.value = palavraSelecionadaArray[i]
        }


        console.log(obj.array[0].children[0].value);

        console.log(arrayColum.coluna);
        // mostra novamente a seleção do objeto de tentativas
    } else return;
});










