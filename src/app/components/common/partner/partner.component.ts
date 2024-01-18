import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {
    partners = [
        {"name": "ECOBANK", "logo": "ecobank.png"},
        {"name": "SARTORISEN", "logo": "sartorisen.png"},
        {"name": "COMMUNE DE DIASS", "logo": "commune-diass.png"},
        {"name": "BNDE DAKAR", "logo": "bnde.jpg"},
        {"name": "ABASUS HOLDING", "logo": "abasus-holding.png"},
        {"name": "XAMLEMA", "logo": "xamlema.jpg"}
    ]
    constructor() { }

    ngOnInit(): void {}

    partnerSlides: OwlOptions = {
        nav: false,
        loop: true,
        margin: 25,
        dots: false,
        autoplay: true,
        autoHeight: true,
        smartSpeed: 1300,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    }

}