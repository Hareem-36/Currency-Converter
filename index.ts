#! /usr/bin/env node
import inquirer from "inquirer";

const currency: any = {
    "USD": 1, //Base Currency
    "GBP": 0.79, //Pound
    "EUR": 0.92, //Euro
    "CHF": 1.01, //Swiss Franc
    "SGD": 1.35, //Singapore Dollar
    "CAD": 1.36, //Canadian Dollar
    "AUD": 1.44, //Australian Dollar
    "NZD": 1.66, //New Zealand Dollar
    "CNY": 6.41, //Chinese Yuan
    "TRY": 32.03, //Turkish lira
    "INR": 78.29, //Indian Rupee
    "JPY": 151.61, //Japanese Yen
    "PKR": 277.54, //Pakistani Rupee
    "KRW": 1351.27, //South Korean Won
}


let userAnswer = await inquirer.prompt([
    {
     
     name: "from",
     message: "Select From Currency:",
     type: "list",
     choices: ["USD", "GBP", "EUR", "CHF", "SGD", "CAD", "AUD", "NZD", "CNY", "TRY", "INR", "JPY", "PKR", "KRW"]

    },
    {
        name: "to",
        message: "Select To Currency:",
        type: "list",   
        choices: ["USD", "GBP", "EUR", "CHF", "SGD", "CAD", "AUD", "NZD", "CNY", "TRY", "INR", "JPY", "PKR", "KRW"]
    },
    {
        name: "amount",
        message: "Enter Amount:",
        type: "number"
    }
])

let fromAmount= currency[userAnswer.from];
let toAmount= currency[userAnswer.to];
let amount= userAnswer.amount;
let baseAmount = amount / fromAmount; //USD Base Currency
let convertedAmount = baseAmount * toAmount; //Converted Amount
console.log(convertedAmount);