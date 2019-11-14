import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ContactServiceService} from './service/contact-service.service';
import { SingleContactComponent } from './contact-list/single-contact/single-contact.component';
import { EditContactComponent } from './contact-list/single-contact/edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactFormComponent,
    SingleContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContactServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
