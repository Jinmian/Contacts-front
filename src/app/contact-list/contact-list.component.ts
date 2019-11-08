import { Component, OnInit } from '@angular/core';
import {Contact} from '../contacts/contact';
import {ContactServiceService} from '../service/contact-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactServiceService) { }

  ngOnInit() {
    this.contactService.findAll().subscribe(data =>{
      this.contacts = data;
    });
  }

}
