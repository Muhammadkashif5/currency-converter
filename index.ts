#! /usr/bin/env node

import inquirer from 'inquirer';

const currency: any ={
    Euro_EUR: 0.92,
    Saudi_Riyal_SAR: 3.75,
    Chinese_Yuan_CNY: 7.23,
    Kuwaiti_Dinar_KWD: 0.31,
    Indian_Rupee_INR: 83.30,
    Russian_Ruble_RUB: 92.58,
    Turkish_lira_LIRA: 32.07,
    Pakistani_Rupee_PKR: 277.54,
    United_States_Dollar_USD: 1,          //Base currency
    United_Arab_Emirates_Dirham_AED: 3.67
};

console.log("Welcome to the Currency Converter!");
console.log("Convert your amount into different currencies.");

let user_answer = await inquirer.prompt(
    [
        {
            name: "from",
            message: 'Enter From Currency',
            type: 'list',
            choices: ['Euro_EUR', 'Saudi_Riyal_SAR', 'Chinese_Yuan_CNY', 'Kuwaiti_Dinar_KWD', 'Indian_Rupee_INR', 'Russian_Ruble_RUB', 'Turkish_lira_LIRA', 'Pakistani_Rupee_PKR', 'United_States_Dollar_USD', 'United_Arab_Emirates_Dirham_AED']
        },

        {
            name: "to",
            message: 'Enter To Currency',
            type: 'list',
            choices: ['Euro_EUR', 'Saudi_Riyal_SAR', 'Chinese_Yuan_CNY', 'Kuwaiti_Dinar_KWD', 'Indian_Rupee_INR', 'Russian_Ruble_RUB', 'Turkish_lira_LIRA', 'Pakistani_Rupee_PKR', 'United_States_Dollar_USD', 'United_Arab_Emirates_Dirham_AED']
        },

        {
            name: "amount",
            message: 'Enter Your Amount',
            type: 'number'
        }
        
    ]
    
);

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
let convertedAmountFormatted = convertedAmount.toFixed(3);
console.log(convertedAmountFormatted); 
console.log("Note:\nThis exchange rate is as of April 8th, 2024.");