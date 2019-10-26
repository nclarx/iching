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