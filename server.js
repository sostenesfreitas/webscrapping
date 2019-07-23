let restify = require('restify');
let get = require('./scrap-cheerio');
// 'carnes-aves-e-peixes/carnes-bovinas'
respond = async (req, res, next) => {
  Promise.all([
    get.t('bebidas/cervejas/Lata'),
    get.t('carnes-aves-e-peixes/carnes-bovinas')
  ])
    .then(t => {
      res.send({ cervejas: t[0], carnes: t[1] });
    })
    .catch(err => {
      console.log(err);
    });
  // get
  //   .t('bebidas/cervejas/Lata')
  //   .then(a => {
  //     res.send(a);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  next();
};

var server = restify.createServer();
server.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
server.get('/carnes/', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
