"use strict";

let numberOfFilms;

function start(){
    while(true){

        numberOfFilms=prompt('Сколько фильмов вы уже посмотрели?','');
        if(numberOfFilms==''||numberOfFilms==null||numberOfFilms.lenght>50||numberOfFilms<0||isNaN(numberOfFilms)){
            alert('введены неверные данные!');
            continue;
        }
        break;
    }
    
    
}
        
        const personalMovieDB={
                    count:numberOfFilms,
                    movies:{},
                    actors:{},
                    genres:[],
                    privat:false
                };
       
function rememberMyFilms(){
    for(let i=0;i<2;i++){
        const nameOfFilm=prompt('Один из последних фильмов?',''),
              rate=prompt('Насколько оцените его?','');

              if(nameOfFilm==''||nameOfFilm==null||nameOfFilm.lenght>50||rate<0||isNaN(rate)||rate==''||rate==null){
                alert('введены неверные данные!');
                i--;
                }
                else{
                    personalMovieDB.movies[nameOfFilm]=rate;
                }            

    }
}   
    
    function rateOfViewer(){
            if(personalMovieDB.count<10){
            alert('You seen too few movies');
        }
        else if(personalMovieDB.count>=10 && personalMovieDB.count<=30 ){
            alert('You are classical viewer!');
        }
        else{
            alert('You are good!');
        }
    }

    function showMyDB(obj){
        if(!obj.privat){
            console.log(obj);
        }
        else{
            console.log('Private information!');
        }
    }

    function writeYourGenres(){
        for(let i=0;i<3;i++){ 
            personalMovieDB.genres[i]=prompt(`Введите название вашего любимого жанра №${i+1}`,'');
        }
    }
    
    
    start();  
    rememberMyFilms();
    rateOfViewer();
    writeYourGenres();
    showMyDB(personalMovieDB);
    















