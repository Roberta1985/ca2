import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FavouriteService } from './../../services/favourite.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {
 //Code similar to Episode-details.page.ts
    episode: any; 
    ID = null; 
    isFavourite = false;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

    ngOnInit() {
        
        this.ID = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getEpisode(this.ID).subscribe(data => {
             this.episode = data[0];
             console.log(JSON.stringify(this.episode.episode_id));

      });

         this.favouriteService.isFav(this.ID).then(isFav => {
             this.isFavourite = isFav;
         });

     }
     unfavouriteEp() {
         this.favouriteService.unfavouriteEp(this.ID).then(() => {
             this.isFavourite = false;
         });
     }

     favouriteEp() {
         
         this.favouriteService.favouriteEp(this.ID).then(() => {
             this.isFavourite = true;
         });
     }

     
}
