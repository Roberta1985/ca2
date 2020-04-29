import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    character: any;
    charId = null;
    
    constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

    ngOnInit() {
        
    
        this.charId = this.activatedRoute.snapshot.paramMap.get('id'); 
        
        this.api.getCharacter(this.charId).subscribe(res => {
          this.character = res[0]; 
          console.log(JSON.stringify(this.character.char_id));
       });
    }

}
