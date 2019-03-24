import { Component, OnInit} from '@angular/core';
import { ContactDataService } from '../ContactData.service';
// import { FilterPipe } from '../../../src/pipes';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-list-component',
  templateUrl: './contact-list-component.component.html',
  styleUrls: ['./contact-list-component.component.css']
})
export class ContactListComponent implements OnInit {

    contactList: Contact[] = [];
    searchQuery: string; // alternate subscribed data from contactDataService

  contactServObj: ContactDataService;


  constructor(contactServObj: ContactDataService) {
    this.contactServObj = contactServObj;
  }

  ngOnInit() {
    this.contactList = this.contactServObj.getContacts();
    // console.log('ngOnInit called!');
    this.contactServObj.queryString.subscribe((query: string) => {
      this.searchQuery = query;
    });
  }

  fetchUpdatedList() {
    this.contactList = this.contactServObj.getContacts();
  }

}
