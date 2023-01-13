

// import quotes data from json file

import data from './quotes.json' assert {type : 'json'};

console.log(data);

console.log(data.quotes[12].quote+'--'+data.quotes[12].author);


// import data from MOCK_DATA

import data1 from './MOCK_DATA.json' assert { type : 'json'};



let random = Math.floor(Math.random()*1000);

console.log(data1.user[random].first_name);

console.log(random);


// import company datas

import data2 from './MOCK_DATA (1).json' assert { type : 'json'};

console.log(data2.Company[random]['company name']);

// displaying quotes on the page
let p = null;

p = document.querySelector('p');

let quoteToBeDisplayed  = null;

quoteToBeDisplayed = data.quotes[randominhtml()].quote;

p.innerHTML = quoteToBeDisplayed;

function randominhtml(){
    let r = null;
    r = Math.floor(Math.random()*100);
    return r;
}





