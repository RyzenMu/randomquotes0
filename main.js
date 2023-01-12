

// import quotes data from json file

import data from './quotes.json' assert {type : 'json'};

console.log(data);

console.log(data.quotes[12].quote+'--'+data.quotes[12].author);


// import data from MOCK_DATA

import data1 from './MOCK_DATA.json' assert { type : 'json'};



let random = Math.floor(Math.random()*1000);

console.log(data1.user[random].first_name);

console.log(random);