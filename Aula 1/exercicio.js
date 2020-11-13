let variavel = 12

function ExecutarFuncaoSoma(teste) {
  console.log(`QUAL É O VALOR DE TESTE? ${teste}`)

  for(let i = 0; i < 10; i++) {
    teste += i
    console.log(teste)
  }
  return teste
}

// const ReceberResultado = 'O RESULTADO É:' + ExecutarFuncaoSoma(variavel)

const ReceberResultado = `O RESULTADO É: ${ExecutarFuncaoSoma(variavel)}`

console.log(ReceberResultado)
