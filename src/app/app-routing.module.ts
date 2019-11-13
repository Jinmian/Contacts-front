import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {SingleContactComponent} from './contact-list/single-contact/single-contact.component';


const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/add', component: ContactFormComponent },
  { path: 'contacts/:id', component: SingleContactComponent },
  { path: '', component: ContactListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
