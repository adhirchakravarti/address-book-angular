import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactDataService } from '../ContactData.service';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  @Output() contactListUpdate: EventEmitter<any> = new EventEmitter<any>();
  sortForm: FormGroup;

  constructor(private contactServObj: ContactDataService) { }

  ngOnInit() {
    this.sortForm = new FormGroup({
        sort: new FormControl()
    });
  }

  onSelectChange(event) {
    console.log(event.target.value);
    // const field = event.target.value === 'default' ? null : event.target.value;
    this.contactServObj.sortContactHandler(event.target.value);
    console.log(this.sortForm);
    this.sortForm.reset();
    this.contactListUpdate.emit();
  }
}
