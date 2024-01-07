import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }

  getPrograms(){
    return this.http.get(`${environment.apiUrl}casa/program`).pipe(response => response)
  }

  getProperties(){
    return this.http.get(`${environment.apiUrl}casa/properties`).pipe(response => response)
  }

  addClientAccount(account: any){
    return this.http.post(`${environment.apiUrl}casa/client/account`, account).pipe(response => response)
  }

  addSubscription(data: any){
    return this.http.post(`${environment.apiUrl}casa/subscription/new`, data).pipe(response => response)
  }
}
