let numberOfFilms;

function proverka(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN (numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}
proverka();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?'),
              b = prompt('На сколько оцените его?');   
        if(a != '' && b != '' && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b; 
            console.log('done');
        }
        else{
            console.log('error');
            i--; 
        }
    }
}
rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр номер ${i}`);
    }
}
writeYourGenres();

function showMyDB(hidden){
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.private);

console.log(personalMovieDB);