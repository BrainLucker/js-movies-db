'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	var movie = prompt('Один из последних просмотренных фильмов?', '');
	var rating = prompt('На сколько оцените его?', '');

	if (movie != null && movie != '' && movie.length < 50 &&
	rating != null && rating != '') {
		personalMovieDB.movies[movie] = rating;
		console.log('Movie ' + movie + ' has added to DB');
	} else {
		i--;
		console.log('Error while adding movie to BD');
	}
}

console.log(personalMovieDB);

let msg;
if (personalMovieDB.count >= 30) 
	msg = 'Вы киноман';
else if (personalMovieDB.count >= 10)
	msg = 'Вы классический зритель';
else if (personalMovieDB.count > 0)
	msg = 'Просмотрено довольно мало фильмов';
else
	msg = 'Произошла ошибка';

console.log(msg);