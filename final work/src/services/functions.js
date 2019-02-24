import queryString from 'query-string';

export const fetchGenres = (genres, ids) => {
  const result = [];
  ids.map(id => genres.forEach(item => item.id === id && result.push(item.name)));

  return result;
};

export const fetchURL = (props, value) => queryString.parse(props.location.search)[value];

export const getTotalPages = (movies) => (movies / 20 <= 1 ? 1 : Math.ceil(movies / 20));

export const sliceMoviesToPages = (movies, page) => {
  const end = page * 20;
  const start = end - 20;

  return movies.slice(start, end);
};


export const fetchRuntime = mins => {
  if (mins === null) return '';
  if (mins < 60) return `${mins}хв`;

  if (mins % 60 === 0) return `${mins / 60}г`;

  const hours = (mins / 60) | 0;
  const minutes = mins % 60;

  return `${hours}г ${minutes}хв`;
};


export const formatMoney = money => {
  const settings = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  return settings.format(money);
};

