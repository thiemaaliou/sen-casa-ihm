import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { ProgramService } from 'src/app/services/program.service';

@Component({
    selector: 'app-latest-listings',
    templateUrl: './latest-listings.component.html',
    styleUrls: ['./latest-listings.component.scss']
})
export class LatestListingsComponent implements OnInit {
    programs: any[] = [];
    constructor(
        public router: Router,
        private programService: ProgramService
    ) { }

    ngOnInit(): void {
        this.getPrograms()
    }

    getPrograms(){
        this.programService.getPrograms().subscribe({
            next: (resp: any) => {
                this.programs = resp.data;
            }
        })
    }

    propertySlidesTwo: OwlOptions = {
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
    propertyImageSlides: OwlOptions = {
        items: 1,
        nav: true,
        dots: false,
        loop: true,
        margin: 25,
        navText: ['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        autoHeight: true
    }
    propertySlidesThree: OwlOptions = {
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
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            },
            1400: {
                items: 3
            },
            1600: {
                items: 4
            }
        }
    }

}