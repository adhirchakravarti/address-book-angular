import { Component, OnInit } from '@angular/core';
import { ContactDataService } from '../ContactData.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-search-contact-component',
  templateUrl: './search-contact-component.component.html',
  styleUrls: ['./search-contact-component.component.css']
})
export class SearchContactComponent {

  query: string;
  contactServObj: ContactDataService;

  constructor(contactServObj: ContactDataService) {
    this.contactServObj = contactServObj;
  }

  onKey(event) {
    // console.log(event.target.value);
    // console.log(typeof event.target.value);
    this.contactServObj.queryString.emit(event.target.value);
  }

}
