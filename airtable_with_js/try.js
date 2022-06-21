// run npx nodemon try.js

console.log("This is file try.js in folder airtable_with_js!");

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyQUcYkOoAkjWXTV'}).base('app0HYDUVfrBVLFV2');

console.log("here");

const table = base('ex_tweets');

const retrieved_records = [];

const getRecords = async() => {
  const records = await table.select({maxRecords: 3, view: "Grid view"}).firstPage();
  records.forEach(function(record) {
    console.log('Retrieved', record.get('Name'));
    console.log("retrieved record id", record.getId());
    retrieved_records.push(record.getId());
    console.log("list", retrieved_records);
});
  // console.log(records);
  // return records;
}

getRecords();

console.log("here");
console.log(retrieved_records);
console.log("getting zero index", retrieved_records[0]);


let x = retrieved_records[1];
console.log(x);



// table.select({
//   maxRecords: 3,
//   view: 'Grid view'
// }).firstPage(function(err, records) {
//   if (err) { console.error(err); return; }
//   records.forEach(function(record) {
//       console.log('Retrieved', record.get('Name'));
//   });
// });




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

// document.getElementById("submitButton").addEventListener("click", insert);


// table.find('recLpIdZLppATL490', function(err, record) {
//     if (err) { console.error(err); return; }
//     console.log('Retrieved', record.id);
// });