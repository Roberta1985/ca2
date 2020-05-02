import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss'],
})

export class QuoteDetailsPage implements OnInit {
 //Similar code to deaths  

    citation: any; 
    CID = null;

    constructor(private activatedRoute: ActivatedRoute, private api:ApiService) { }

    ngOnInit() {

        this.CID = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getQuote(this.CID).subscribe(res => {
            this.citation = res[0];

            console.log(JSON.stringify(res[0]));
        });
    }

}