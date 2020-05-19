import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FavouriteService } from './../../services/favourite.service';
//Favourite Service is settled in the Favourite Service, which allows to use the page to create a like and dislike service 

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})

export class CharacterDetailsPage implements OnInit {

    //We need some variables, characters to obtain all characters, isFavourite to check a boolean flag
    //ID is only for this page
    character: any;
    isFavourite = false;
    ID = null;
    

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }
    //Inside the construtor we call the functions we want to use

    ngOnInit() {

        this.ID = this.activatedRoute.snapshot.paramMap.get('id');
        //We have the route to check for one ID in our method

        this.api.getCharacter(this.ID).subscribe(res => {
            //Once we retrieved this information from the api.service we run the following commands:
            //put the ID in the array and the ID will be accessed in the first box
            this.character = res[0];  
            //Print all data in the console, this way we can check the information is being retrieved
            console.log(JSON.stringify(this.character.char_id));
         });
         
         //We will check if the page is favourite or not, if the ID is favourite, we keep favourite
         this.favouriteService.isFavourite(this.ID).then(isFav => {
             this.isFavourite = isFav;
         });

     }

     //The following two methods will check if the page is favourite or unfavourite, and procced with alternate 
     //solution once the user wants to like or dislike the pages
     favouriteChar() {

         this.favouriteService.favouriteChar(this.ID).then(() => {
             this.isFavourite = true;
         });
     }

     unfavouriteChar() {
         this.favouriteService.unfavouriteChar(this.ID).then(() => {
             this.isFavourite = false;
         });
    
    }

}
