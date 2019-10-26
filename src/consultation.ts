import readline from 'node'

interface IConsultation {

    question: string;

}

class Consultation implements IConsultation {

    question: string

    constructor() {

    }

    getQuestion(): void {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
          })
          
          readline.question(`What's your name?`, (name) => {
            console.log(`Hi ${name}!`)
            readline.close()
          })
          
    }

}

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