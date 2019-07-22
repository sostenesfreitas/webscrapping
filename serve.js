let restify = require('restify');
let item = require('./index2');

respond = async (req, res, next) => {
  item
    .then(a => {
      res.send(a);
    })
    .catch(err => {
      console.log(err);
    });
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
server.get('/hello/', respond);
server.head('/hello/', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
