import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { ContactListComponentComponent } from './contact-list-component/contact-list-component.component';
import { AddContactComponentComponent } from './add-contact-component/add-contact-component.component';
import { SearchContactComponentComponent } from './search-contact-component/search-contact-component.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { ModalComponent } from './modal/modal.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponentComponent,
    ContactListComponentComponent,
    AddContactComponentComponent,
    SearchContactComponentComponent,
    BackdropComponent,
    ModalComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
