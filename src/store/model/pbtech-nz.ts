import {Store} from './store';

export const PBTechNz: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: [
      {
        container:
          '#product_right_column > div.product_bgWrap > div.p_ov_stock_summary_dd > div > div',
        text: ['In stock'],
      },
      {
        container: '.p_stock_title_dd',
        text: ['In stock'],
      },
    ],
    maxPrice: {
      container: 'div.p_price_dd > div.p_price > span.ginc',
      euroFormat: false,
    },
    outOfStock: {
      container:
        '#product_right_column > div.product_bgWrap > div.p_ov_stock_summary_dd > div > div',
      text: ['Available on order', 'Unavailable', 'Out of stock'],
    },
  },
  links: [
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url: 'https://www.pbtech.co.nz/product/VGAAS33087/ASUS-ROG-STRIX-GeForce-RTX-3080-10GB-GDDR6X-PCIE-4',
    },
    {
      brand: 'asus',
      model: 'strix oc white',
      series: '3080',
      url: 'https://www.pbtech.co.nz/product/VGAAS33086/ASUS-ROG-STRIX-GeForce-RTX-3080-O10G-Gaming-WHITE',
    },
    {
      brand: 'sapphire',
      model: 'nitro+',
      series: 'rx6900xt',
      url: 'https://www.pbtech.co.nz/product/VGASAP16915/Sapphire-Nitro-AMD-Radeon-RX-6900-XT-OC-Gaming-Gra',
    },
    {
      brand: 'asrock',
      model: 'taichi',
      series: 'rx6800xt',
      url: 'https://www.pbtech.co.nz/product/VGAASR06810/ASRock-Radeon-RX-6800-XT-Taichi-X-OC-Graphics-Card',
    },
    {
      brand: 'asrock',
      model: 'challenger pro',
      series: 'rx6800',
      url: 'https://www.pbtech.co.nz/product/VGAASR06800/ASRock-Radeon-RX-6800-Challenger-Pro-Graphics-Card',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: 'rx6800',
      url: 'https://www.pbtech.co.nz/product/VGAMSI66801/MSI-Radeon-RX-6800-Gaming-X-TRIO-16GB-GDDR6-PCIE-4',
    },
    {
      brand: 'sapphire',
      model: 'pulse',
      series: 'rx6800',
      url: 'https://www.pbtech.co.nz/product/VGASAP16802/Sapphire-PULSE-AMD-Radeon-RX-6800-OC-Graphics-Card',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.pbtech.co.nz/product/GAMMST1601/Microsoft-Xbox-Series-X-1TB-Console',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.pbtech.co.nz/product/GAMMST1602/Microsoft-Xbox-Series-S-512GB-Console',
    },
  ],
  name: 'pbtech-nz',
};