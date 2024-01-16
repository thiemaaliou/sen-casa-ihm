import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { FaqComponent } from './components/common/faq/faq.component';
import { PopularListingsComponent } from './components/common/popular-listings/popular-listings.component';
import { LatestListingsComponent } from './components/common/latest-listings/latest-listings.component';
import { TestimonialsComponent } from './components/common/testimonials/testimonials.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { VideoComponent } from './components/common/video/video.component';
import { OverviewComponent } from './components/common/overview/overview.component';
import { HowItWorksComponent } from './components/common/how-it-works/how-it-works.component';
import { SearchComponent } from './components/common/search/search.component';
import { RecentListingsComponent } from './components/common/recent-listings/recent-listings.component';
import { PlaceComponent } from './components/common/place/place.component';
import { AdvantageComponent } from './components/common/advantage/advantage.component';
import { AboutComponent } from './components/common/about/about.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { HomethreeBannerComponent } from './components/pages/home-demo-one/homethree-banner/homethree-banner.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ListingsPageOneComponent } from './components/pages/listings-page-one/listings-page-one.component';
import { ListingsPageTwoComponent } from './components/pages/listings-page-two/listings-page-two.component';
import { ListingDetailsPageComponent } from './components/pages/listing-details-page/listing-details-page.component';
import { HowItWorksPageComponent } from './components/pages/how-it-works-page/how-it-works-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { TestimonialsPageComponent } from './components/pages/testimonials-page/testimonials-page.component';
import { TermsOfServicePageComponent } from './components/pages/terms-of-service-page/terms-of-service-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { ProfileAuthenticationPageComponent } from './components/pages/profile-authentication-page/profile-authentication-page.component';

import { ContactComponent } from './components/common/contact/contact.component';

import { NgxView360Module } from "@egjs/ngx-view360";
import { ProgramService } from './services/program.service';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { SortDescriptionComponent } from './components/common/sort-description/sort-description.component';
import { DiassSaafiComponent } from './components/pages/projets/about-page copy/diass-saafi.component';
import { StrategiquelCardComponent } from './components/common/strategique-card/strategique-card.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeDemoOneComponent,
        HomethreeBannerComponent,
        NavbarComponent,
        FooterComponent,
        NotFoundComponent,
        SubscribeComponent,
        FaqComponent,
        PopularListingsComponent,
        LatestListingsComponent,
        TestimonialsComponent,
        FunfactsComponent,
        VideoComponent,
        OverviewComponent,
        HowItWorksComponent,
        SearchComponent,
        RecentListingsComponent,
        PlaceComponent,
        AdvantageComponent,
        AboutComponent,
        PartnerComponent,
        AboutPageComponent,
        ListingsPageOneComponent,
        ListingsPageTwoComponent,
        ListingDetailsPageComponent,
        HowItWorksPageComponent,
        FaqPageComponent,
        TestimonialsPageComponent,
        TermsOfServicePageComponent,
        PrivacyPolicyPageComponent,
        BlogPageComponent,
        BlogDetailsPageComponent,
        ContactPageComponent,
        ProfileAuthenticationPageComponent,
        ContactComponent,
        SortDescriptionComponent,

        DiassSaafiComponent,
        StrategiquelCardComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        BrowserModule,
        MdbTabsModule,
        CarouselModule,
        AppRoutingModule,
        MdbDropdownModule,
        MdbAccordionModule,
        MdbModalModule,
        NgxScrollTopModule,
        BrowserAnimationsModule,

        NgxView360Module,

        HttpClientModule,
        
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true
        }),
    ],
    providers: [
        ProgramService,
        // {provide: LOCALE_ID, useValue: 'fr-FR' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }