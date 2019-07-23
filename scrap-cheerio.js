const rp = require('request-promise');
const cheerio = require('cheerio');

async function t(rota) {
  const options = {
    uri: `https://delivery.supermuffato.com.br/${rota}`,
    transform: function(body) {
      return cheerio.load(body);
    }
  };
  return rp(options)
    .then($ => {
      return require('./skel2')($);
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = { t };
