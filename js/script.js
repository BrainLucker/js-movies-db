'use strict';

let numberOfFilms;

function start() {
	let input;
	do {
		input = prompt('Сколько фильмов вы уже посмотрели?', '');
	} while (input === null || input === '' || !isFinite(input));
	numberOfFilms = parseInt(input);
}

function createDB() {
	return {
		count: numberOfFilms,
		movies: {},
		actors: {},
		genres: [],
		privat: false
	};
}

function addMovieToDB() {
	for (let i = 0; i < 2; i++) {
		var movie = prompt('Один из последних просмотренных фильмов?', '');
		var rating = prompt('На сколько оцените его?', '');
	
		if (movie != null && movie != '' && movie.length < 50 &&
		rating != null && rating != '') {
			personalMovieDB.movies[movie] = rating;
			console.log(`Фильм "${movie}" успешно добавлен в БД`);
		} else {
			i--;
			console.log('Ошибка при добалении фильма');
		}
	}
}

function showUserLevel() {
	let msg;
	if (personalMovieDB.count >= 30) {
		msg = 'Вы киноман';
	} else if (personalMovieDB.count >= 10) {
		msg = 'Вы классический зритель';
	} else if (personalMovieDB.count > 0) {
		msg = 'Просмотрено довольно мало фильмов';
	} else {
		msg = 'Произошла ошибка';
	}
	console.log(msg);
}

function showMyDB(hidden) {
	if (!hidden)
		console.log(personalMovieDB);
}

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
		if (genre === null || genre === '') {
			i--;
		} else {
			personalMovieDB.genres[i] = genre;
		}
	}
}

start();

const personalMovieDB = createDB();

addMovieToDB();

showUserLevel();

writeYourGenres();

showMyDB(personalMovieDB.privat);