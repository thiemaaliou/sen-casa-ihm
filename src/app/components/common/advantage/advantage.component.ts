import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ContactComponent } from '../contact/contact.component';
import { ProgramService } from 'src/app/services/program.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent implements OnInit {
  partnersLogo: string[] = [
    "/assets/img/partner/bhs-logo.png",
    "/assets/img/partner/bis-logo.png",
    "/assets/img/partner/om-logo.png",
    "/assets/img/partner/upay-logo.png",
    "/assets/img/partner/sartorisen-logo.png",
    "/assets/img/partner/senecasa-logo.png",
  ];
  modalRef: MdbModalRef<ContactComponent> | null = null;
  programs: any[] = [];
  constructor(private modalService: MdbModalService, private programService: ProgramService, private router: Router) { }

  ngOnInit(): void {
    this.getOpenPrograms()
  }

  getOpenPrograms(){
    this.programService.getPrograms().subscribe({
      next: (resp: any) => {
        this.programs = resp.data
      }
    })
  }

  openModalContact(){
    this.modalRef = this.modalService.open(ContactComponent, {
      modalClass: 'modal-lg'
    })
  }

  goToListing(program: any){
    localStorage.setItem('casa-selected-program', JSON.stringify(program));
    this.router.navigate(['/listings']);
  }

}
