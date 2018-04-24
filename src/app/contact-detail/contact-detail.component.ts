import { Component, OnInit, Input } from '@angular/core';
import { ContactDataService } from '../ContactData.service';
import { Contact } from '../contact.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  index: number;
  constructor(private contactServObj: ContactDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.index = +this.route.snapshot.params['index'];
    this.contact = this.contactServObj.getContact(this.index);
  }
  onSelected($event) {

  }

}
