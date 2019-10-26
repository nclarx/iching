import symbols from './iching.json'
import {} from './domain';

class Line implements ILine {

  type: LineType
  changing: boolean
  lineSymbol: string
  total: number

  constructor(public coinTosses: CoinToss) {

    this.total = this.calculateCoinToss(coinTosses)
    this.getLineType()

  }

  getLineType(): void {
    if (this.total ===)
      this.type = 
  }

  calculateCoinToss(coinTosses: CoinToss): number {
    return this.getTossValue(coinTosses.firstCoin) + this.getTossValue(coinTosses.secondCoin) + this.getTossValue(coinTosses.thirdCoin)
  }

  getTossValue(coinToss: boolean): number {
    if (coinToss) return 3
    else return 2
  }
}

interface IConsultation {
  id: number
  question: string
  coinTosses: boolean[]
  hexagrams: ISymbol[]
}

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

function consultOracle(): void {
  const consultation: IConsultation = {
    id: new Date().getTime() / 1000,
    question: '',
    coinTosses: [],
    hexagrams: []
  }

  for (let i = 0; i < 18; i++) {
    consultation.coinTosses.push(flipCoin())
  }

  consultation.coinTosses.forEach((val, idx, arr) => {

  })

  console.log(consultation.coinFlips.length)
  const lineOne = consultation.coinFlips.slice(0, 3)
  const lineTwo = consultation.coinFlips.slice(3, 6)
  const lineThree = consultation.coinFlips.slice(6, 9)
  const lineFour = consultation.coinFlips.slice(9, 12)
  const lineFive = consultation.coinFlips.slice(12, 15)
  const lineSix = consultation.coinFlips.slice(15, 18)
  console.table(consultation)
}
consultOracle()
