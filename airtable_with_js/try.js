console.log("This is file try.js in folder airtable_with_js!");

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyQUcYkOoAkjWXTV'}).base('app0HYDUVfrBVLFV2');

console.log("here");

const table = base('ex_tweets');

data1 = {
    "Name": "czh",
    "content": "hello!\n",
    "visited": 0
    
};

function f_create(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    })
};

function insert() {
    console.log("here");
    table.create(data1, f_create);
}

document.getElementById("submitButton").addEventListener("click", insert);


// table.find('recLpIdZLppATL490', function(err, record) {
//     if (err) { console.error(err); return; }
//     console.log('Retrieved', record.id);
// });