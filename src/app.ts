import symbols from './iching.json'
import {} from './domain';

function listSymbols() {
  console.table(symbols)
  symbols.forEach((item: ISymbol) => {
    console.log(item.Symbol, item["ALT Code"])
  })
} 

listSymbols()
console.log(flipCoin())
console.log(flipCoin())
console.log(flipCoin())
console.log(flipCoin())
console.log(flipCoin())
console.log(flipCoin())


