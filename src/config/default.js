export const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '4fbdbdb7ab0a64a4ff94f65a19d7693a';
const LINGUAGE = 'pt-BR';
const REGION = 'BR';

export const URL_WITH_KEY = URL =>
  `${URL}?api_key=${API_KEY}&language=${LINGUAGE}&region=${REGION}`;
