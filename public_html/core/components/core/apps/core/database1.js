var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'core'
});

connection.connect();

connection.query('SELECT * from PERSON', function(err, rows, fields) {
  if (err) throw err;

  console.log('Query result: ', rows);
});

connection.end();

// Output is returned in JSON by default.