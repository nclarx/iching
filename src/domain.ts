interface ISymbol {
    ["Symbol"]: string
    ["ALT Code"]: string
    ["ALT X Code"]: string
    ["Symbol Name"]: string
    ["HTML Entity DEC"]: string
    ["HTML Entity HEX"]: string
    ["Unicode Code Point\n"]: string
}

interface ICoinToss {
    coinTossResult: boolean[]
    
}

interface ITrigram {
    bottomLine: ICoinToss[]
    middleLine: ICoinToss[]
    topLine: ICoinToss[]


}



interface IConsultation {
    id: number
    question: string
    coinTosses: boolean[]
    hexagrams: ISymbol[]
  }

enum LineType {
    Yin,
    Yang
}

interface ILine {
    type: LineType
    changing: boolean
    lineSymbol: string
    total: number

    calculateCoinToss(coinTosses: CoinToss): number
    getLineType(): void
    getLineSymbol(): string

}