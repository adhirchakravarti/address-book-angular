import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactDataService } from '../ContactData.service';

@Component({
  selector: 'app-search-contact-component',
  templateUrl: './search-contact-component.component.html',
  styleUrls: ['./search-contact-component.component.css']
})
export class SearchContactComponentComponent {

  query: string;
  contactServObj: ContactDataService;

  @Output() searchTerm = new EventEmitter<string>();

  constructor(contactServObj: ContactDataService) {
    this.contactServObj = contactServObj;
  }

  onSubmit(submittedSearch) {
    if (submittedSearch.invalid) {
      return;
    }
    console.log(submittedSearch);
    if (submittedSearch.value.search !== '') {
      // this.contactServObj.getContacts(submittedSearch.value.search); // the service will be used when I learn about lifecycle hooks
      this.searchTerm.emit(submittedSearch.value.search);
      // console.log(submittedSearch.value.search);
      console.log(this.query);
      this.contactServObj.searchQuery = submittedSearch.value.search;
    }
  }

  onReset(event) {
    console.log(this.query);
    this.contactServObj.searchQuery = '';
  }

  onKey(event) {
    // console.log(event.target.value);
    this.contactServObj.searchQuery = event.target.value;
  }

}
