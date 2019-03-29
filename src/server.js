/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const mySQL = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

const con = mySQL.createConnection({
  server: "localhost",
  port: "3306",
  database: "crud_man",
  user: "root",
  password: "" //empty for window
});

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("start");
});

con.connect(function (error) {
  if (error) console.log(error);
  else console.log("connected");
});

app.get("/", function (req, res) {
  res.send("Hola Mundo");
});

app.post("/user", function (req, res) {
  console.log("creando usuario:" + req.body.email);
  let post = {
    email: req.body.email,
    password: req.body.password,
    roll: 'CLIENT'
  }
  con.query("insert into users set ?", post, (err, result, fields) => {
    if (!err) {
      res.json({ active: true, idC: result.insertId, roll: 'CLIENT' });
    } else {
      console.log(err);
    }
  })
});

app.post("/login", function (req, res) {
  console.log('iniciando: ' + req.body.email);
  let email = req.body.email;
  let password = req.body.password;
  con.query('select id, roll from users where email = ? and password = ? ', [email, password], (err, result, fields) => {
    if (!err) {
      res.json({ active: true, idC: result[0].id, roll: result[0].roll });
    } else {
      console.log(err);
    }
  })
});

app.post("/product", function (req, res) {
  console.log('Agregando: ' + req.body.nombre);
  let post = {
    nombre:req.body.nombre,
    total:req.body.total
  }
  con.query('Insert into products set ?', post, (err, result) => {
    if (!err) {
      res.json({add:true})
    } else {
      console.log(err);
    }
  })
});

app.get('/product', function (req, res) {
  con.query('Select * from products', (err, result) => {
    if (!err) {
      res.json(result);
    } else {
      console.log(err);
    }
  })
});

app.post('/Dproduct', function (req, res) {
  let id = req.body.id
  console.log('eliminando id: ' + JSON.stringify(req.body));
  con.query('Delete from products where id = ?', [id], (err, result) => {
    if (!err) {
      res.json({ delete: true });
    } else {
      console.log(err);
    }
  })
});

app.post('/Eproduct', function (req, res) {
  let nombre = req.body.nombre;
  let total = req.body.total;
  let id = req.body.idC;
  console.log('actualizando ' + JSON.stringify(req.body))
  con.query('update products set nombre = ? , total = ? where id = ?', [nombre, total, id], (err, result) => {
    if (!err) {
      res.json({ updated: true });
    } else {
      console.log(err);
    }
  })
});

app.post("/carrito", function (req, res) {
  console.log('Agregando: ' + req.body.producto);
  let post = {
    fk_IDCliente: req.body.idC,
    product:req.body.producto,
    cantidad:req.body.cantidad
  }
  con.query('Insert into carrito set ?', post, (err, result) => {
    if (!err) {
      res.json({add:true})
    } else {
      console.log(err);
    }
  })
});

app.post('/Gcarrito', function (req, res) {
  let id = req.body.idC
  console.log('pidiendo carrito');
  con.query('select id, producto, cantidad from carrito where fk_IDClient = ?', [id], (err, result) => {
    if (!err) {
      res.json({ result });
    } else {
      console.log(err);
    }
  })
});

app.post('/Dproduct', function (req, res) {
  let id = req.body.id
  console.log('eliminando id: ' + JSON.stringify(req.body));
  con.query('Delete from carrito where id = ?', [id], (err, result) => {
    if (!err) {
      res.json({ deleted: true });
    } else {
      console.log(err);
    }
  })
});




