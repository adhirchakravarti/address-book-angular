import { Component, OnInit } from '@angular/core';
import { ContactDataService } from './ContactData.service';
import { Contact } from './contact.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  selectedTab: number;

  constructor(private contactServObj: ContactDataService, private route: ActivatedRoute, private router: Router) {
    fontawesome.library.add(faChevronRight, faStickyNote, faUserPlus, faTrashAlt, faEdit, 
                      faChevronLeft, faPhone, faUser, faBuilding, faAddressBook, faAddressCard, faAt);
  }

  ngOnInit() {
    this.selectedTab = 1;
    this.router.navigate(['/']);
  }
  makeActive(event) {
    // console.log(event.target.id);
    this.selectedTab = event.target.id;
  }
}
