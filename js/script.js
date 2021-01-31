"use strict";


while(true){
    let numberOfFilms=prompt('Сколько фильмов вы уже посмотрели?','');
    if(numberOfFilms==''||numberOfFilms==null||numberOfFilms.lenght>50||numberOfFilms<0||isNaN(numberOfFilms)){
        alert('введены неверные данные!');
        continue;
    }

        const personalMovieDB={
                    count:numberOfFilms,
                    movies:{},
                    actors:{},
                    genres:[],
                    privat:false
                };

    for(let i=0;i<2;i++){
        const nameOfFilm=prompt('Один из последних фильмов?',''),
              rate=prompt('Насколько оцените его?','');

              personalMovieDB.movies[nameOfFilm]=rate;

    }
    

        
        
    if(personalMovieDB.count<10){
        alert('You seen too few movies');
    }
    else if(personalMovieDB.count>=10 && personalMovieDB.count<=30 ){
        alert('You are classical viewer!');
    }
    else{
        alert('You are good!');
    }

    console.log(personalMovieDB);
    
    break;
}











