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
//Code similar to Characters but with few extra details
    death: any;
    deaths: Observable<any>;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
//The main method display a list of data retrieved from API request of getDeaths()
      this.deaths = this.api.getDeaths();
      this.deaths.subscribe(data => {
           console.log('info', data);
       });
  }
//The method of search is similar to ID in the characters, however instead of showing each character, shows the 
//number of deaths realted to each character in the series

  search() {
         this.deaths = this.api.getDeath(this.death);
         this.deaths.subscribe(res => {
             console.log('my data', res);
         });
     }
}
