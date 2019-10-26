interface ISymbol {
    ["Symbol"]: string
    ["ALT Code"]: string
    ["ALT X Code"]: string
    ["Symbol Name"]: string
    ["HTML Entity DEC"]: string
    ["HTML Entity HEX"]: string
    ["Unicode Code Point\n"]: string
}

interface CoinToss {
    firstCoin: boolean
    secondCoin: boolean
    thirdCoin: boolean
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