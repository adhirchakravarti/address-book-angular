import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ContactDataService } from '../ContactData.service';
import { ModalShowService } from '../modal-show.service';
import { Contact } from '../contact.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  @Output() sendModalClose = new EventEmitter<boolean>();
  @Input() contact: Contact;
  index: number;
  name = '';
  phone = '';
  email = '';
  organization = '';
  notes = '';
  oldContact: Contact;
  editForm: FormGroup;

  contactServObj: ContactDataService;


  constructor(contactServObj: ContactDataService, private router: Router, private route: ActivatedRoute) {
    this.contactServObj = contactServObj;
  }
  ngOnInit() {
    // this.contactList = this.contactServObj.getContacts();
    this.oldContact = Object.assign({}, this.contact);
    console.log(this.route.snapshot.params);
    this.index = +this.route.snapshot.params['index'];
    console.log(this.index);
    this.contact = this.contactServObj.getContact(this.index);
  }

  onCancel(event) {
    this.sendModalClose.emit(false);
    this.router.navigate(['/contactList']);
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      console.log(submittedForm.invalid);
      return;
    }
    console.log(submittedForm);
    const contactToSave: Contact = {name: submittedForm.value.name, phone: submittedForm.value.phone,
      email: submittedForm.value.email, organization: submittedForm.value.organization, notes: submittedForm.value.notes};
    console.log(contactToSave);
    this.index = this.contactServObj.findContactIndex(this.contact);
    console.log(this.index);
    if (this.index !== -1) {
      this.contactServObj.editContactHandler(contactToSave, this.index);
    } else {
      alert(`contact ${this.contact.name} doesn't exist! Cannot edit...`);
    }
    this.router.navigate(['/contactList']);
  }
}
