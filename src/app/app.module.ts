import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact-component/contact-component.component';
import { ContactListComponent } from './contact-list-component/contact-list-component.component';
import { AddContactComponent } from './add-contact-component/add-contact-component.component';
import { SearchContactComponent } from './search-contact-component/search-contact-component.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { ModalComponent } from './modal/modal.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactDataService } from './ContactData.service';
import { ModalShowService } from './modal-show.service';
import { CockpitComponentComponent } from './cockpit-component/cockpit-component.component';
import { FilterContactPipe } from './filter-contact.pipe';
import { SortComponent } from './sort/sort.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '' , component: AddContactComponent },
  { path: 'contactList', component: ContactListComponent },
  { path: 'contactList/:index', component: ContactDetailComponent },
  { path: 'contactList/:index/edit', component: EditContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    AddContactComponent,
    SearchContactComponent,
    BackdropComponent,
    ModalComponent,
    EditContactComponent,
    CockpitComponentComponent,
    FilterContactPipe,
    SortComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [ContactDataService, ModalShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
