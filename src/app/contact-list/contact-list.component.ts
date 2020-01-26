import { Component, OnInit } from '@angular/core';
import {Contact} from '../contacts/contact';
import {ContactServiceService} from '../service/contact-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactServiceService,
              private router: Router) { }

  ngOnInit() {
    this.getAllContact();
  }
  getAllContact() {
    this.contactService.findAll().subscribe(data => {
      this.contacts = data.sort((a, b) => a.name.localeCompare(b.name));
    });
  }
  onViewContact(index: number) {
    this.router.navigate(['/contacts', this.contacts[index].id]);
  }
}
