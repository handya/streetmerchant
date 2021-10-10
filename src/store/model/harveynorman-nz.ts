import {Store} from './store';

export const HarveyNormanNZ: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: 'input.btn-action',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.price',
      euroFormat: false,
    },
    outOfStock: {
      container: '.product-highlight-text',
      text: ['SOLD OUT! WATCH THIS SPACE FOR MORE INFORMATION'],
    },
  },
  links: [
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.harveynorman.co.nz/gaming/consoles/xbox-series-s-console-512gb.html',
    },
  ],
  name: 'harveynorman-nz',
  waitUntil: 'domcontentloaded',
  successStatusCodes: [[0, 399], 404],
};
