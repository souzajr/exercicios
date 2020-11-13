// declarando uma função que pode mudar de valor (LET)
let teste = "Isso é o primeiro teste"

// declarando uma função que pode NÃO mudar de valor (CONST)
const teste2 = "Somente leitura"
  
// declarando função
function funcaoTeste() {
  console.log(teste)
  console.log(teste2)

  teste = "Mudando valor de teste"
  console.log(teste)

  teste2 = "Mudando valor de teste2"
  console.log(teste2)

  // criando variavel LET dentro do escopo de uma variável
  let testeX = "Isso é o segundo teste"
}

// executando função
funcaoTeste()

console.log(testeX)