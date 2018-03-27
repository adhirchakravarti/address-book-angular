import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactDataService } from '../ContactData.service';

@Component({
  selector: 'app-search-contact-component',
  templateUrl: './search-contact-component.component.html',
  styleUrls: ['./search-contact-component.component.css']
})
export class SearchContactComponentComponent {

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
    }
  }

}
