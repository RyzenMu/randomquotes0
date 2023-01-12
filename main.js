

// import quotes data from json file

import data from './quotes.json' assert {type : 'json'};

console.log(data);

console.log(data.quotes[12].quote+'--'+data.quotes[12].author);