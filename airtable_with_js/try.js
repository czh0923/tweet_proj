var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyQUcYkOoAkjWXTV'}).base('app0HYDUVfrBVLFV2');

const table = base('ex_tweets')
table.find('recLpIdZLppATL490', function(err, record) {
    if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);
});