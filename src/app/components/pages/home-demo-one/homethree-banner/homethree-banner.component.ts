import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SortDescriptionComponent } from 'src/app/components/common/sort-description/sort-description.component';

@Component({
    selector: 'app-homethree-banner',
    templateUrl: './homethree-banner.component.html',
    styleUrls: ['./homethree-banner.component.scss']
})
export class HomethreeBannerComponent implements OnInit {
    modalRef: MdbModalRef<SortDescriptionComponent> | null = null;
    
    constructor(private modalService: MdbModalService) { }

    ngOnInit(): void {}

    heroSlidesTwo: OwlOptions = {
        items: 1,
        nav: false,
        dots: true,
        loop: true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-next-1"></i>'],
        autoplay: false,
        smartSpeed: 1300,
        autoplayTimeout: 10000,
        autoplayHoverPause: true
    }

    showMoreAboutText(){
        this.modalRef = this.modalService.open(SortDescriptionComponent);
    }

}