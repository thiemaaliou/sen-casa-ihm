import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
    selector: 'app-testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

    testimonialSlidesOne: OwlOptions = {
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
                items: 1
            },
            515: {
                items: 2
            },
            695: {
                items: 2
            },
            935: {
                items: 3
            }
        }
    }
    testimonialSlidesTwo: OwlOptions = {
		nav: true,
        dots: false,
        loop: true,
        margin: 25,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-next-1"></i>'],
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        autoHeight: true,
        responsive: {
            0: {
                items: 1
            },
            535: {
                items: 1
            },
            715: {
                items: 2
            },
            995: {
                items: 2
            },
            1195: {
                items: 3
            }
        }
    }
    testimonialSlidesThree: OwlOptions = {
		nav: false,
        dots: true,
        loop: true,
        margin: 25,
        center: true,
        autoplay: false,
        autoHeight: true,
        smartSpeed: 1300,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            515: {
                items: 1
            },
            695: {
                items: 2
            },
            995: {
                items: 2
            },
            1195: {
                items: 4
            }
        }
    }

}