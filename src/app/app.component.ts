import { Component, OnInit } from '@angular/core';
import { ContactDataService } from './ContactData.service';
import { Contact } from './contact.model';
import fontawesome from '@fortawesome/fontawesome';
import {faTrashAlt, faEdit, faChevronRight, faChevronLeft, faUser, faUserPlus,
  faBuilding, faStickyNote, faAddressBook, faAddressCard, faAt, faPhone} from '@fortawesome/fontawesome-free-solid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  selectedContact;
  selectedContactVisible;
  selectedTab: number;

  constructor(private contactServObj: ContactDataService) {
    fontawesome.library.add(faChevronRight, faStickyNote, faUserPlus, faTrashAlt, faEdit);
    fontawesome.library.add(faChevronLeft, faPhone, faUser, faBuilding, faAddressBook, faAddressCard, faAt);
  }

  ngOnInit() {
    this.contactServObj.contactSelected.subscribe((contact: object) => {
      this.selectedContact = contact;
    });
    this.contactServObj.selectedContactVisible.subscribe((showOrNot: boolean) => {
      this.selectedContactVisible = showOrNot;
    });
    this.selectedTab = 1;
  }
  makeActive(event) {
    // console.log(event.target.id);
    this.selectedTab = event.target.id;
  }
}
