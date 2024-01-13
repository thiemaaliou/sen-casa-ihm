import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sort-description',
    templateUrl: './sort-description.component.html',
    styleUrls: ['./sort-description.component.scss']
})
export class SortDescriptionComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

}