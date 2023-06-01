#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

//Function to fetch movie characters

function fetchMovieCharacters() {
	const url = 'https://swapi-api.alx-tools.com/api/films/3/';

	request(url + movieId, function(err, response, body) {
		if (!err && response.statusCode === 200) {
			const filmData = JSON.parse(body);
			const characters = filmData.characters;

			//Fetch and print names of characters

			fetchCharacterNames(characters, 0);
		} else {
			console.log('Error:', err);
		}
	});
}

//Function to fetch character names recursively

function fetchCharacterNames(characters, index) {
	if (index >= characters.length) {
		return;
	}

	request(characters[index], function(err, response, body) {
		if (!err && response.statusCode === 200) {
			const characterData = JSON.parse(body);
			console.log(characterData.name);

			//Fetch next character's name
			fetchCharacterNames(characters, index + 1);
		} else {
			console.log('Error:', err);
		}
	});
}
