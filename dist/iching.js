"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var iching_json_1 = __importDefault(require("./iching.json.js"));
function listSymbols() {
    console.table(iching_json_1.default);
    iching_json_1.default.forEach(function (item) {
        console.log(item.Symbol, item["ALT Code"]);
    });
}
function flipCoin() {
    return (Math.floor(Math.random() * 2) == 0);
}
console.log(flipCoin());
console.log(flipCoin());
console.log(flipCoin());
console.log(flipCoin());
console.log(flipCoin());
console.log(flipCoin());
function consultOracle() {
    var consultation = {
        id: new Date().getTime() / 1000,
        question: '',
        coinFlips: [],
        hexagrams: []
    };
    for (var i = 0; i < 18; i++) {
        consultation.coinFlips.push(flipCoin());
    }
    console.log(consultation.coinFlips.length);
    var lineOne = consultation.coinFlips.slice(0, 3);
    var lineTwo = consultation.coinFlips.slice(3, 6);
    var lineThree = consultation.coinFlips.slice(6, 9);
    var lineFour = consultation.coinFlips.slice(9, 12);
    var lineFive = consultation.coinFlips.slice(12, 15);
    var lineSix = consultation.coinFlips.slice(15, 18);
    console.log(consultation);
    console.table(consultation);
}
consultOracle();
