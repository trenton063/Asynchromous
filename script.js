'use strict';

// https://restcountries.com/v2/ 
// change of url use this for countries

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Older way to call. 
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/name/portal');
request.send();