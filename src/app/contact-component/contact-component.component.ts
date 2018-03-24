import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent {

  @Input() contact;
  @Input() index;
  @Output() contactToRemove = new EventEmitter<{name: string, phone: string, email: string}>();

  deleteContact(event) {
    // console.log(this.index);
    this.contactToRemove.emit(this.contact);
  }

}
