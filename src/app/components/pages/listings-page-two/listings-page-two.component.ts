import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramService } from 'src/app/services/program.service';

@Component({
  selector: 'app-listings-page-two',
  templateUrl: './listings-page-two.component.html',
  styleUrls: ['./listings-page-two.component.scss']
})
export class ListingsPageTwoComponent implements OnInit {
  program: any;
  properties: any[] = [];
  constructor(private programService: ProgramService, private router: Router) { }

  ngOnInit(): void {
    let pr = localStorage.getItem('casa-selected-program');
    if(pr != null){
      this.program = JSON.parse(pr);
    }
    this.getProperties();
  }
  

  getProperties(){
    this.programService.getProperties().subscribe({
      next: (resp: any) =>{
        this.properties = resp.data;
        if(this.program != null){
          this.properties = this.properties.filter(p => p.casa_programs_id == this.program.id)
        }
      }
    })
  }

  goToDetailsProperty(property: any){
    this.router.navigate(['/listing-details', property.id])
  }

}
