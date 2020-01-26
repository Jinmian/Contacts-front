import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../contacts/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  contactsUrl: string;
  contacts: Contact[];

  constructor(private http: HttpClient) {
    this.contactsUrl = 'http://localhost:8080/contacts';
  }

  findAll(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.contactsUrl);
  }
  create(contact: Contact) {
    return this.http.post<Contact>(this.contactsUrl + '/add', contact);
  }
  getSingleContact(id: number): Observable<any> {
    return this.http.get<Contact[]>(this.contactsUrl + '/' + id);
  }
  deleteContact(id: number): Observable<any> {
    return this.http.delete<Contact[]>(this.contactsUrl + '/' + id);
  }
  updateContact(id: number, value: any): Observable<any> {
    return this.http.put<Contact[]>(this.contactsUrl + '/' + id, value);
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keypress;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
