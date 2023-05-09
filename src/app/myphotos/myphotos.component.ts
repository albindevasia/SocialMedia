import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myphotos',
  templateUrl: './myphotos.component.html',

})
export class MyphotosComponent {
  imageUrl!: any;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.imageUrl = this.route.snapshot.paramMap.get('url');
  }
 
   
  
}
