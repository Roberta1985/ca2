import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FavouriteService } from './../../services/favourite.service';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    character: any;
    isFavourite = false;
    charId = null;
    

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

    ngOnInit() {
       

        this.charId = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getCharacter(this.charId).subscribe(res => {
            this.character = res[0];  
            console.log(JSON.stringify(this.character.char_id));
         this.character = res[0];
             console.log(JSON.stringify(this.character.char_id));
         });

         this.favouriteService.isFavourite(this.charId).then(isFav => {
             this.isFavourite = isFav;
         });

     }
     favouriteChar() {

         this.favouriteService.favouriteChar(this.charId).then(() => {
             this.isFavourite = true;
         });
     }

     unfavouriteChar() {
         this.favouriteService.unfavouriteChar(this.charId).then(() => {
             this.isFavourite = false;
         });
    
    }

}
