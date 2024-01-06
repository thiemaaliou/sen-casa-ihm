import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-homethree-banner',
    templateUrl: './homethree-banner.component.html',
    styleUrls: ['./homethree-banner.component.scss']
})
export class HomethreeBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    heroSlidesTwo: OwlOptions = {
        items: 1,
        nav: false,
        dots: true,
        loop: true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-next-1"></i>'],
        autoplay: true,
        smartSpeed: 1300,
        autoplayTimeout: 4000,
        autoplayHoverPause: false
    }

}