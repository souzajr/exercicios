const variavel = 12

function ExecutarFuncaoSoma(teste) {
  console.log(`QUAL É O VALOR DE TESTE? ${teste}`)

  for(let i = 0; i < 10; i++) {
    variavel += i
    console.log(variavel)
  }
}
  
const ReceberResultado = `O RESULTADO É: ${ExecutarFuncaoSoma(variavel)}`

console.log(ReceberResultado)
