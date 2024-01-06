import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HowItWorksPageComponent } from './components/pages/how-it-works-page/how-it-works-page.component';
import { ListingDetailsPageComponent } from './components/pages/listing-details-page/listing-details-page.component';
import { ListingsPageOneComponent } from './components/pages/listings-page-one/listings-page-one.component';
import { ListingsPageTwoComponent } from './components/pages/listings-page-two/listings-page-two.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { ProfileAuthenticationPageComponent } from './components/pages/profile-authentication-page/profile-authentication-page.component';
import { TermsOfServicePageComponent } from './components/pages/terms-of-service-page/terms-of-service-page.component';
import { TestimonialsPageComponent } from './components/pages/testimonials-page/testimonials-page.component';

const routes: Routes = [
    {path: '', component: HomeDemoOneComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'listings-one', component: ListingsPageOneComponent},
    {path: 'listings', component: ListingsPageTwoComponent},
    {path: 'listing-details', component: ListingDetailsPageComponent},
    {path: 'how-it-works', component: HowItWorksPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'testimonials', component: TestimonialsPageComponent},
    {path: 'terms-of-service', component: TermsOfServicePageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'blog', component: BlogPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'profile-authentication', component: ProfileAuthenticationPageComponent},
    {path: 'contact', component: ContactPageComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }