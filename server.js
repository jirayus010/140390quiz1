var express = require('express');
var pgp = require('pg-promise')();
var db = pgp('postgres://nkwnjxuiidwrns:b72b4de42f726173c9acee8a85dd10ed1c8dc1a2ab7402a6feebbbccb8b14f85@ec2-54-163-245-44.compute-1.amazonaws.com:5432/d34ii1v5fr4h1e?ssl=true');
var app = express();

//app.use(express.static('static'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
});

//Display all products
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});

//connection.connect()

// connection.query('select * from students', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows)
// })


// connection.query('select * from subjects', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows)
//})


app.get('/students', function(req, res) {
    var connection = mysql.createConnection({
        host     : 'www.db4free.net',
        user     : 's140390',
        password : 'abc123**',
        database : 'db140390'
      });
    connection.connect()
        connection.query('select * from students', function (err, rows, fields) {
            if (err) throw err
            res.render('pages/students',{students : rows})
            console.log('The solution is: ', rows)
            
            connection.end() 
            // res.render('pages/students',{students : data})
          })
             });
    
         
app.get('/subjects', function(req, res) {
    var connection = mysql.createConnection({
        host     : 'www.db4free.net',
        user     : 's140390',
        password : 'abc123**',
        database : 'db140390'
      });
    connection.connect()
        connection.query('select * from subjects', function (err, rows, fields) {
            if (err) throw err
              res.render('pages/subjects',{subjects : rows})
            console.log('The solution is: ', rows)
            connection.end() 
            // res.render('pages/subjects',{subjects : data})
        })   });
   
console.log('App is running at http://localhost:8081');
app.listen(8081);