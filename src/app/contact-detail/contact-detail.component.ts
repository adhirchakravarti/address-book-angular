import { Component, OnInit, Input } from '@angular/core';
import { ContactDataService } from '../ContactData.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;
  constructor(private contactServObj: ContactDataService) { }

  ngOnInit() {
  }

}
