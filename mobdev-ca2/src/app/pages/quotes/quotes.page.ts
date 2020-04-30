import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {
    author: any; 
    quotes: Observable<any>

  constructor(private api: ApiService, private router: Router) { }

   ngOnInit() {
        this.quotes = this.api.getQuotes();
        this.quotes.subscribe(data => {
            console.log('my data', data);
        });
    }

     search() {
         this.quotes = this.api.getAuthor(this.author);
         this.quotes.subscribe(res => {
             console.log('info', res);
         });
     }

    openDetails(quote) {
        let qId = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${qId}`);
    }
}
