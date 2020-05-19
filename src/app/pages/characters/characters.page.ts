import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';


@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
     //Code from: https://youtu.be/Nc1RqvDY-B8

    //Set of variables
    characters = [];

    //This offset is to say first what position of the array I want to start
    offset = 0;

    //We have to set the number max of characters 
    maximumChars = 64;

    constructor(private router: Router, private api: ApiService) { }
    

    ngOnInit() {
        this.charsLoad();
        //This main method will go to next method 
    }

    charsLoad(event?) {
        //This event will load the first characters, as defined in the url in the API
         this.api.getCharacters(this.offset).subscribe(data => {
             console.log("my chararters info:", data);

             this.characters = this.characters.concat(data);

            //This event is to confirm, once the event is done, you can stop the action!  
             if (event) {
                 event.target.complete();
             }
         })
     }
     loadMore(event?) {
        //Once we have completed the first event, we can open(load) for more characters
        //We then set a new value to the offset, not the first anymore. 
         this.offset = this.offset + 20;
         this.charsLoad(event);

         if (this.offset > this.maximumChars) {
             event.target.disabled = true;
         }
     }

    openDetails(character) {
         
        let charId = character.char_id; 
        this.router.navigateByUrl(`/tabs/characters/${charId}`);  
        
    }

}
