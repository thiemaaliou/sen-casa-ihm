import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { View360Options, EquirectProjection, CubemapProjection } from "@egjs/ngx-view360";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { ProgramService } from 'src/app/services/program.service';

@Component({
    selector: 'app-listing-details-page',
    templateUrl: './listing-details-page.component.html',
    styleUrls: ['./listing-details-page.component.scss']
})
export class ListingDetailsPageComponent implements OnInit {
    options: Partial<View360Options> = {}
      properties: any[] = [];
      property: any;
      userForm = new FormGroup({
        first_name: new FormControl('', [Validators.required]),
        last_name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        phone:  new FormControl('', [Validators.required]),
        password: new FormControl('casa2020', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        profession: new FormControl('', [Validators.required]),
        cin: new FormControl('-', [Validators.required])
      })

      heroPropertySlides: OwlOptions = {
        nav: false,
        dots: true,
        loop: true,
        margin: 0,
        // navText: ['<i class="flaticon-arrow-left"></i>', '<i class="flaticon-right-arrow-3"></i>'],
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        autoHeight: true,
        slideBy: 1,
        responsive: {
          0: {
              items: 1
          },
          500: {
              items: 1
          },
          992: {
              items: 1
          },
          1200: {
              items: 1
          },
          624: {
              items: 1
          }
      }
    }

      constructor(private programService: ProgramService, private router: Router, 
        private activeRoute: ActivatedRoute, private toastr: ToastrService) { }

    ngOnInit(): void {
      this.activeRoute.paramMap.subscribe({
        next: (value) => {
          if(value && value.get('id')){
            this.getProperties(Number(value.get('id')))
          }else{
            
          }
        }
      })
     
    }
    
    getProperties(id: number){
      this.programService.getProperties().subscribe({
        next: (resp: any) =>{
          this.properties = resp.data;
          this.property = this.properties.find(p => p.id == id)
          console.log(this.property)
          let srcs = [];
          for(let img of this.property.images){
            srcs.push(img.name);
          }
          this.options.projection =  new CubemapProjection({
            src: srcs
          });
        }
      })
    }

    addClientAccount(){
      if(this.userForm.invalid){
        console.log(this.userForm)
        this.toastr.error('Le formulaire est invalid', 'Corrigez SVP');
        return;
      }
      this.programService.addClientAccount(this.userForm.value).subscribe({
        next: (resp: any) => {
          let data = {
            'casa_client_id': resp.data.id,
            'program_id': this.property.casa_programs_id
          }
          this.programService.addSubscription(data).subscribe({
            next: (resp: any) => {
              this.toastr.success("Votre inscription est en cours d'exmanen. Merci de patienter, un agent vous contactera")
              this.userForm.reset()
            }
          })
        }
      })
    }

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}