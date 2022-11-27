const numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');

const personalMoviDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');
personalMoviDB.movies[a] = b;
personalMoviDB.movies[c] = d;

console.log(personalMoviDB);