

// import data from json file

import data from './quotes.json' assert {type : 'json'};

console.log(data);

console.log(data.quotes[100].quote+'--'+data.quotes[100].author);