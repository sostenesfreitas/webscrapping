const puppeteerInfiniteScroll = require('puppeteer-infinite-scroll/src/puppeter-infinite-scroll');
const skel = require('./skel');
let t = async () => {
  const browser = new puppeteerInfiniteScroll();
  await browser.start({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  await browser.open({
    url: 'https://www.ofertaesperta.com/',
    endpoint: 'https://www.ofertaesperta.com/',
    loadImages: false,
    onScroll: () => {
      test = browser.stract(skel);
    }
  });
  browser.scrollFreeze();
  browser.close();
  return await test;
};

t()
  .then(a => {
    console.log(a);
  })
  .catch(err => {
    console.log(err);
  });
