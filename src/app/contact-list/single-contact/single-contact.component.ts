import { Component, OnInit } from '@angular/core';
import {Contact} from '../../contacts/contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactServiceService} from '../../service/contact-service.service';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css']
})
export class SingleContactComponent implements OnInit {

  contact: Contact;
  constructor(private route: ActivatedRoute,
              private contactService: ContactServiceService,
              private router: Router) { }

  ngOnInit() {
    this.getContact();
  }

  getContact() {
    this.contact = new Contact();
    const id = this.route.snapshot.params['id'];
    this.contactService.getSingleContact(+id).subscribe(res =>
    this.contact = res);
  }

  back() {
    this.router.navigate(['/contacts']);
  }
}
