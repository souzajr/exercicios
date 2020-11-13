let NumeroPrimo1
let NumeroPrimo2
let NumeroPrimo3

// 3 primeiros numeros primos: 2, 3, 5

function AcharNumeroPrimo() {
  for(let i = 2; i < 6; i++){
    if(i == 2){
      NumeroPrimo1 = i

    }

    if(i == 3){
      NumeroPrimo2 = i
    }

    if(i == 5){
      NumeroPrimo3 = i
    }
  }
}
    AcharNumeroPrimo()
const Resultado = `Os 3 primeiros números primos são: ${NumeroPrimo1}, ${NumeroPrimo2}, ${NumeroPrimo3}`
console.log(Resultado)