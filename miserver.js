var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomImage = faker.image.avatar();
  return {
    nombre: randomName,
    email: randomEmail,
    imagen: randomImage
  }

}

var generarDatos = function(){
  var randomId = faker.random.uuid();
  var randomName = faker.name.findName();
  var randomContent = faker.lorem.sentence();
  var randomDate = faker.date.recent();
  var randomImage = faker.image.avatar();
  var randomCountry = faker.address.country();
  return {
    id: randomId,
    nombre: randomName,
    contenido: randomContent,
    fecha: randomDate,
    imagen: randomImage,
    pais: randomCountry
  }

}


app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
})

app.get('/friends', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.get('/amigos', function (req, res) {
  res.send('Mis amigos');
})

app.get('/posts', function (req, res) {
  var cantidad = _.random(5,10)
  var datos_posts= _.times(cantidad, generarDatos)
   res.json(datos_posts);
})


app.listen(3000);