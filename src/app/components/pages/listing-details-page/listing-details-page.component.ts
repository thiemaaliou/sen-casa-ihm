import { Component, OnInit } from '@angular/core';
import { View360Options, EquirectProjection, CubemapProjection } from "@egjs/ngx-view360";

@Component({
    selector: 'app-listing-details-page',
    templateUrl: './listing-details-page.component.html',
    styleUrls: ['./listing-details-page.component.scss']
})
export class ListingDetailsPageComponent implements OnInit {
    options: Partial<View360Options> = {
        projection: new CubemapProjection({
          src: [
            "assets/img/property/property-1.jpg",
            "assets/img/property/property-2.jpg",
            "assets/img/property/property-3.jpg",
            "assets/img/property/property-1.jpg",
            "assets/img/property/property-2.jpg",
            "assets/img/property/property-3.jpg",
          ]
        },
        )
      }
    constructor() { }

    ngOnInit(): void {}

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}