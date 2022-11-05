

export const Api = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/coins/markets',
  params: {vs_currency: 'usd', page: '1', per_page: '100', order: 'market_cap_desc'},
  headers: {
    'X-RapidAPI-Key': 'b922fcb3b0msh6aea5f733a51e16p18bf80jsn9f74990d6569',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
  }
};

