module.exports = $ => {
  const ofertas = [];
  $('.prd-list-item-info').each((i, item) => {
    let oferta = {
      nome: $(item)
        .find('.prd-list-item-name')
        .text(),
      preco: $(item)
        .find('.prd-list-item-price-sell')
        .text(),
      link: $(item)
        .find('.prd-list-item-link')
        .attr('href')
    };
    if (oferta.nome !== '') ofertas.push(oferta);
  });
  return ofertas;
};
