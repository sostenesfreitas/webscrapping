const puppeteer = require('puppeteer');

let puppe = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 500 });
  await page.goto(
    'https://delivery.supermuffato.com.br/carnes-aves-e-peixes/carnes-bovinas',
    { waitUntil: 'load' }
  );

  const result = await page.evaluate(() => {
    let carnes = [];
    let precos = [];
    let links = [];
    document.querySelectorAll('a > h3').forEach(item =>
      carnes.push({
        nome: item.innerHTML
      })
    );
    document.querySelectorAll('a > div > span').forEach(item =>
      precos.push({
        preco: item.innerHTML
      })
    );
    document.querySelectorAll('div.prd-list-item-desc > a').forEach(item =>
      links.push({
        link: item.getAttribute('href')
      })
    );
    carnes = carnes.map((item, i) => ({
      link: links[i].link,
      preco: precos[i].preco,
      nome: item.nome
    }));

    return carnes;
  });

  browser.close();
  return await result;
};

module.exports = puppe();
