import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hometwo-banner',
    templateUrl: './hometwo-banner.component.html',
    styleUrls: ['./hometwo-banner.component.scss']
})
export class HometwoBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    heroPropertySlides: OwlOptions = {
        nav: false,
        dots: false,
        loop: true,
        margin: 25,
        navText: ['<i class="flaticon-arrow-left"></i>', '<i class="flaticon-right-arrow-3"></i>'],
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        autoHeight: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            992: {
                items: 1
            },
            1200: {
                items: 2
            },
            624: {
                items: 2
            }
        }
    }

}