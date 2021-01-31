"use strict";

const numberOfFilms=prompt('Сколько фильмов вы уже посмотрели?','');
document.write(numberOfFilms);

const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

const nameOfFilm=prompt('Один из последних фильмов?',''),
      rate=prompt('Насколько оцените его?',''),
      nameOfFilm2=prompt('Один из последних фильмов?',''),
      rate2=prompt('Насколько оцените его?','');


      personalMovieDB.movies[nameOfFilm]=rate;
      personalMovieDB.movies[nameOfFilm2]=rate2;

      console.log(personalMovieDB);
