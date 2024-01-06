import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listings-page-two',
  templateUrl: './listings-page-two.component.html',
  styleUrls: ['./listings-page-two.component.scss']
})
export class ListingsPageTwoComponent implements OnInit {
  program: any;
  constructor() { }

  ngOnInit(): void {
    let pr = localStorage.getItem('casa-selected-program');
    if(pr != null){
      this.program = JSON.parse(pr);
    }
    console.log(this.program)
  }

}
