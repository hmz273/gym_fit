export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5e26554ce5msh054fae1d9197843p11af37jsn4d96a1f57eca",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5e26554ce5msh054fae1d9197843p11af37jsn4d96a1f57eca',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
