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
import { ContactDataService } from './ContactData.service';
import { ModalShowService } from './modal-show.service';
import { CockpitComponentComponent } from './cockpit-component/cockpit-component.component';
import { FilterContactPipe } from './filter-contact.pipe';
import { SortComponent } from './sort/sort.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponentComponent,
    ContactListComponentComponent,
    AddContactComponentComponent,
    SearchContactComponentComponent,
    BackdropComponent,
    ModalComponent,
    EditContactComponent,
    CockpitComponentComponent,
    FilterContactPipe,
    SortComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ContactDataService, ModalShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
