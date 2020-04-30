import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

    death: any;
    deaths: Observable<any>;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {

      this.deaths = this.api.getDeaths();
      this.deaths.subscribe(data => {
           console.log('info', data);
       });
  }
  search() {
         this.deaths = this.api.getDeath(this.death);
         this.deaths.subscribe(res => {
             console.log('my data', res);
         });
     }
}
