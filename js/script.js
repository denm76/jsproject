"use strict";

let numberOfFilms=prompt('Сколько фильмов вы уже посмотрели?','');
        
        const personalMovieDB={
                    count:'',
                    movies:{},
                    actors:{},
                    genres:[],
                    privat:false,
                    start(numberOfFilms){
                            while(true){ 
                            if(numberOfFilms==''||numberOfFilms==null||numberOfFilms.lenght>50||numberOfFilms<0||isNaN(numberOfFilms)){
                                alert('введены неверные данные!');
                                numberOfFilms=prompt('Сколько фильмов вы уже посмотрели?','');
                                continue;
                            }
                            break;
                        }
                        return numberOfFilms;
                    },
                    rememberMyFilms:function(){
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
                                 },

                                 rateOfViewer:function(){
                                    if(personalMovieDB.count<10){
                                    alert('You seen too few movies');
                                }
                                else if(personalMovieDB.count>=10 && personalMovieDB.count<=30 ){
                                    alert('You are classical viewer!');
                                }
                                else{
                                    alert('You are good!');
                                }
                            },

                            showMyDB:function(obj){
                                if(!obj.privat){
                                    console.log(obj);
                                }
                                else{
                                    console.log('Private information!');
                                }
                            },

                            writeYourGenres:function(){
                                for(let i=0;i<3;i++){ 
                                    let genre=prompt(`Введите название вашего любимого жанра №${i+1}`,'');
                                    if(genre==''||genre==null||genre.lenght>50){
                                        alert('введены неверные данные!');
                                        i--;
                                }
                                else{
                                    personalMovieDB.genres[i]=genre;
                                }
                            }
                            
                            let i=1;
                            personalMovieDB.genres.forEach(element => {
                                console.log(`Любимый жанр №${i} - это ${element}`);
                                i++;
                            });
                            },

                            toggleVisibleMyDB:function(obj){
                                if(obj.private==false){
                                    obj.private=true;
                                }
                                else{
                                    obj.private=false;
                                }
                            }
       

                        };  
    

    
    
                        personalMovieDB.count= personalMovieDB.start(numberOfFilms);  
                        personalMovieDB.rememberMyFilms();
                        personalMovieDB.rateOfViewer();
                        personalMovieDB.writeYourGenres();
                        personalMovieDB.toggleVisibleMyDB(personalMovieDB);
                        personalMovieDB.showMyDB(personalMovieDB);

    // function showSome(string,callback){
    //     console.log(`I am can eat ${string}`);
    //     callback();
    // }

    // showSome('Pamador',function(){
    //     console.log('Beach!');
    // });

    
    















