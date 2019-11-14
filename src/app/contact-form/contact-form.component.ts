import { Component, OnInit } from '@angular/core';
import {Contact} from '../contacts/contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactServiceService} from '../service/contact-service.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent{

  contact: Contact;
  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactServiceService) {
    this.contact = new Contact();
  }

  onSubmit(){
    this.contactService.create(this.contact).subscribe(result => this.gotoContactList());
  }
  gotoContactList(){
    this.router.navigate(['/contacts']);
  }
  back() {
    this.router.navigate(['/contacts']);
  }
}
