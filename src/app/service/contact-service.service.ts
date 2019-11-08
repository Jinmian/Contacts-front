import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../contacts/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  private contactsUrl: string;

  constructor(private http: HttpClient) {
    this.contactsUrl = 'http://localhost:8080/contacts';
  }

  public findAll(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.contactsUrl);
  }
  public save(contact: Contact) {
    return this.http.post<Contact>(this.contactsUrl, contact);
  }
}
