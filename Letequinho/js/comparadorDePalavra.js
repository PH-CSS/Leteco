let verificacaoDeAcertos = [];
function comparacao(tentativa) {

  // apenas temporário até a correção de todos os erros, aí vem a 
  // implementação da "API" 
  const newPalavr = arrayG.toLowerCase()
  //leva a palarva tudo para mínuscula
  const palavraSeparada = newPalavr.split('')
  // transforma a string para array em todas as separação de caracteres


  for (let i = 0; i < palavraSeparada.length; i++) {
    let caractereSemelhante = true;
    // um boolean para definir a variavel que já foi corrigida
    let comp = palavraSeparada[i].replace(/[áàâã]/, 'a')
        comp = comp.replace(/[éèê]/, 'e')
        comp = comp.replace(/[íï]/, 'i')
        comp = comp.replace(/[óôõö]/, 'o')
        comp = comp.replace(/[ú]/, 'u')  

    console.log(comp);
    if (tentativa[i] == comp) {
      // se a letra de tentativa for igual a letra da palavra no mesmo index
      console.log(`ACERTOU na posição ${i}`);
      caractereSemelhante = false;
      // para não ficar amarela caso a corrigida já for a correta
      colunas[teste].children[i].style.backgroundColor = "green"
      colunas[teste].children[i].style.color = "#000"
      let palavraCorreta = arrayG.split('');
      colunas[teste].children[i].value = palavraCorreta[i];

      verificacaoDeAcertos.push(colunas[teste].children[i])
      console.log(verificacaoDeAcertos);


    } else {
      console.log(`ERROU na posição ${i}`);
      caractereSemelhante = true;
      //compara para ver se possui uma string semelhante 
    }

    // correção para saber se possui alguma variavel semelhante
    for (let j = 0; j < palavraSeparada.length; j++) {

      if (comp == tentativa[i]) {
        if (caractereSemelhante == false) {
          // console.log("essa letra já está marcada");
        } else {

          // console.log(`Possui uma letra semelhante na posição ${i}`);
          colunas[teste].children[i].style.backgroundColor = "yellow"
          colunas[teste].children[i].style.color = "#000"
        }
      } else {
        // console.log(`Errou posição ${i}`);
      };
    };
  };

  if (verificacaoDeAcertos.length == colunas[teste].children.length || arrayColum.coluna[4].tentativa.length == 5 ) {
    tentarDNV.style.display = "flex";

    

  }
}
