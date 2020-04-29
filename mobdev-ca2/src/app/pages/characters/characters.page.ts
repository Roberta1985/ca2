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

    characters = [];
    offset = 0;
    maximumChars = 64;

    constructor(private router: Router, private api: ApiService) { }
    

    ngOnInit() {
        this.charsLoad();
    }

    charsLoad(event?) {
        
         this.api.getCharacters(this.offset).subscribe(data => {
             console.log("my chararters info:", data);

             this.characters = this.characters.concat(data);

             if (event) {
                 event.target.complete();
             }
         })
     }
     loadMore(event?) {
        
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
