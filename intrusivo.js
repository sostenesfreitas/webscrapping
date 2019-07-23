var request = require('request');

function get(id, cb) {
  var options = {
    method: 'GET',
    url: `https://delivery.supermuffato.com.br/api/catalog_system/pub/products/variations/${id}`,
    headers: {
      'cache-control': 'no-cache',
      authority: 'delivery.supermuffato.com.br',
      referer:
        'https://delivery.supermuffato.com.br/alcatra-bovina-moida-kg-206747/p?idsku=206747',
      accept: 'application/json, text/javascript, */*; q=0.01',
      'user-agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36',
      'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
    }
  };
  request(options, function(error, response, body) {
    if (error) throw new Error(error);
    cb({ body: body });
  });
}

module.exports = { get };

// const g = require('./intrusivo');
// g.get(7177, data => {
//   console.log(data);
// });
