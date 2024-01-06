import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
    selector: 'app-recent-listings',
    templateUrl: './recent-listings.component.html',
    styleUrls: ['./recent-listings.component.scss']
})
export class RecentListingsComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

    propertySlidesOne: OwlOptions = {
		nav: false,
        dots: true,
        loop: true,
        margin: 25,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            515: {
                items: 2
            },
            695: {
                items: 2
            },
            935: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    }

}