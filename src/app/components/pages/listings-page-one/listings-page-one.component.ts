import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramService } from 'src/app/services/program.service';

@Component({
  selector: 'app-listings-page-one',
  templateUrl: './listings-page-one.component.html',
  styleUrls: ['./listings-page-one.component.scss']
})
export class ListingsPageOneComponent implements OnInit {

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

}
