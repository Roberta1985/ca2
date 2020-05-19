import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//Import service to get requests to get Service! 
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }
    //This allow to check for the import functionality and GET requests to the API

    getCharacters(offset) {
        //We define how many characters will be downloaded per time and which index of array 
        return this.http.get(`https://www.breakingbadapi.com/api/characters?limit=20&offset=${offset}`)
    }

    getCharacter(id) {
        //Get characters by ID
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`)
    }
    getEpisodes() {
       
        return this.http.get(`https://pacific-inlet-90657.herokuapp.com/api/episodes`)
    }

    getEpisode(id) {
       
        return this.http.get(`https://pacific-inlet-90657.herokuapp.com/api/episodes/${id}`)
    }


    getQuotes() {
        //Same as getEpisodes but for Quotes
        return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
    }

    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`)
    }
    getAuthor(author) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes?author=${author}`)
    }


    getDeaths() {
        return this.http.get(`https://www.breakingbadapi.com/api/death-count`)
    }

    getDeath(name) {
        return this.http.get(`https://www.breakingbadapi.com/api/death-count?name=${name}`)
    }

}
