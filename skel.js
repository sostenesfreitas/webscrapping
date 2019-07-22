module.exports = () => {
  let ofertas = [];
  const images = [];
  while (ofertas.length <= 90) {
    document.querySelectorAll('h3 > a').forEach(oferta =>
      ofertas.push({
        nome: oferta.innerHTML,
        link: oferta.getAttribute('href')
      })
    );
    document.querySelectorAll('a > img').forEach(oferta =>
      images.push({
        image: oferta.getAttribute('src')
      })
    );
  }

  ofertas = ofertas.map((oferta, i) => ({
    image: images[i].image,
    nome: oferta.nome,
    link: oferta.link
  }));

  return ofertas;
};
