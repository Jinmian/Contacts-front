import { Component, OnInit } from '@angular/core';
import {Contact} from '../../../contacts/contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactServiceService} from '../../../service/contact-service.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  id: number;
  contact: Contact;
  constructor(private route: ActivatedRoute,
              private contactService: ContactServiceService,
              private router: Router) { }

  ngOnInit() {
    this.contact = new Contact();
    this.id = this.route.snapshot.params['id'];
    this.contactService.getSingleContact(this.id).subscribe(data =>{
      console.log(data);
      this.contact = data;
    },error => console.log(error));
  }
  updateContact() {
    this.contactService.updateContact(this.id, this.contact).subscribe(data => console.log(data),
      error => console.log(error));
    this.contact = new Contact();
    this.goToList();
  }
  goToList() {
    this.router.navigate(['/contacts']);
  }
  onSubmit() {
    this.updateContact();
  }
}
