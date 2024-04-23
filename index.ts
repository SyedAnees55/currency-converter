 import { log } from "console";
import inquirer from "inquirer"; "inquirer"

let curencyconverter={
    "USD":{
        "USD":1,
        "EUR":0.92,
        "PKR":278,
        "TAKA":110
    },"EUR":{
        "USD":1.066,
        "EUR":1,
        "PKR":296,
        "TAKA":117
    },"PKR":{
        "USD":0.004,
        "EUR":0.003,
        "PKR":1,
        "TAKA":0.394
    },"TAKA":{
        "USD":0.009,
        "EUR":0.009,
        "PKR":2.357,
        "TAKA":1
    }
}
//input import
const answer : {
    from:"USD"|"EUR"|"PKR"|"TAKA" ,
    to:"USD"|"EUR"|"PKR"|"TAKA",
    Amount:number,
}=await inquirer.prompt([{
    name:"from",
    message:"Enter your currency ",
    type:"list",
    choices:["USD","EUR","PKR","TAKA"]
},{
    name:"to",
    message:"select which your currency converter?",
    type:"list",
    choices:["USD","EUR","PKR","TAKA"]
},{
    name:"Amount",
    message:"Enter your amount ",
    type:"number",
    choices:["USD","EUR","PKR","TAKA"]
}
])
const {from,to,Amount}= answer;
//converion
if (from && to && Amount) {
    let result=curencyconverter [from][to] * Amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`);
}else{
    console.log(`sorry invalid your currency plz try again `);
}