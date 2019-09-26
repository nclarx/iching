import symbols from './iching.json'

interface ISymbol {
  ["Symbol"]: string
  ["ALT Code"]: string
  ["ALT X Code"]: string
  ["Symbol Name"]: string
  ["HTML Entity DEC"]: string
  ["HTML Entity HEX"]: string
  ["Unicode Code Point\n"]: string
}

interface IConsultation {
  id: number
  question: string
  coinFlips: boolean[]
  firstHexagram: any
}

function listSymbols() {
  console.table(symbols)
  symbols.forEach((item: ISymbol) => {
    console.log(item.Symbol, item["ALT Code"])
  })
}

function flipCoin(): boolean {
  return (Math.floor(Math.random() * 2) == 0);
}

console.log(flipCoin())
console.log(flipCoin())
console.log(flipCoin())
console.log(flipCoin())
console.log(flipCoin())
console.log(flipCoin())

function consultOracle(): void {
  const consultation: IConsultation = {
    id: new Date().getTime() / 1000,
    question: '',
    coinFlips: [],
    firstHexagram: null
  }

  for (let i = 0; i < 18; i++) {
    consultation.coinFlips.push(flipCoin())
  }

  console.log(consultation.coinFlips.length)
  const lineOne = consultation.coinFlips.slice(0,3)
  const lineTwo = consultation.coinFlips.slice(3,6)
  const lineThree = consultation.coinFlips.slice(6,9)
  console.log(consultation)
  console.log(lineOne, lineTwo, lineThree)
}
consultOracle()
