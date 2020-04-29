import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})

export class EpisodesPage implements OnInit {

    episodes: Observable<any>

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
 
      this.episodes = this.api.getEpisodes();
      this.episodes.subscribe(data => {
            console.log('my data: ', data);
        });

  }

  openDetails(episode){
      let epId = episode.episode_id;
      this.router.navigateByUrl(`/tabs/episodes/${epId}`);  
  }

}
