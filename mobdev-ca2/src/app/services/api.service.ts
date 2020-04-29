import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//Import service to get requests to get Service! 
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }
    //This allow to check for the import functionality 

    getEpisodes() {
        //We define functions to call the method in the Episode logic page
        return this.http.get(`https://www.breakingbadapi.com/api/episodes`)
    }

    getEpisode(id) {
        //This function will select the epsiode desired! 
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`)
    }
    getCharacters() {
        //We define functions to call the method in the Characters logic page
        return this.http.get('https://www.breakingbadapi.com/api/characters')
    }

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`)
    }
    getQuotes() {
        //Same as getEpisodes but for Quotes
        return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
    }

    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`)
    }
    getDeaths() {
        return this.http.get(`https://www.breakingbadapi.com/api/deaths`)
    }


}
