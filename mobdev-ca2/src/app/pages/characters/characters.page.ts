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

    characters: Observable<any>;
    constructor(private router: Router, private api: ApiService) { }
    

    ngOnInit() {
        this.characters = this.api.getCharacters();
        this.characters.subscribe(data => {
            console.log('my data: ', data);
        });
    }

    openDetails(character) {
         let charId = character.char_id; 

        this.router.navigateByUrl(`/tabs/characters/${charId}`);  
        
    }

}
