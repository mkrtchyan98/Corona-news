import { REQUEST_DATA,RECIEVE_DATA,RECIEVE_COUNTRIES } from './actionTypes';
import {BASE_URL_DETAILS,BASE_URL_COUNTRIES,API_KEY} from './api';

 function recieveData (data) {
	return {
		type:RECIEVE_DATA,
		data
	}
}

 function requestData () {
	return {
		type:REQUEST_DATA,
		
	}
}
function recieveCountries(data) {
	return {
		type:RECIEVE_COUNTRIES,
		data
	}
}

export function fetchData (country) {
	const urlCountry = `${BASE_URL_DETAILS}${country}`;
	return dispatch => {
		dispatch(requestData())
		return  fetch(urlCountry, {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
    "x-rapidapi-key": `${API_KEY}`
  }
})
		.then(response => response.json())
		.then(
			data => {
				dispatch(recieveData(data));
			})
		
	}
}

export function fetchCountries() {
		const urlCountry = `${BASE_URL_COUNTRIES}`;
	return dispatch => {
		dispatch(requestData())
		return  fetch(urlCountry, {
 "method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key":  `${API_KEY}`
	}
})
		.then(response => response.json())
		.then(
			data => {
				dispatch(recieveCountries(data));
			})
		
	}
}


