webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/ContactData.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var ContactDataService = /** @class */ (function () {
    function ContactDataService() {
        var _this = this;
        this.contactList = [];
        this.queryString = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.contactSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.selectedContactVisible = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.sortContactHandler = function (value) {
            // contacts.sort(compareValues('phone', 'asc'))
            console.log(value);
            var field = value === 'default' ? null : value;
            if (_this.contactList.length > 1 && field !== null) {
                _this.contactList.sort(_this.compareValues(field, 'asc'));
                console.log(_this.contactList);
            }
        };
        this.compareValues = function (key, order) {
            if (order === void 0) { order = 'asc'; }
            return function (a, b) {
                if (!a.hasOwnProperty(key) ||
                    !b.hasOwnProperty(key)) {
                    return 0;
                }
                var varA = (typeof a[key] === 'string') ?
                    a[key].toUpperCase() : a[key];
                var varB = (typeof b[key] === 'string') ?
                    b[key].toUpperCase() : b[key];
                var comparison = 0;
                if (varA > varB) {
                    comparison = 1;
                }
                else if (varA < varB) {
                    comparison = -1;
                }
                return ((order === 'desc') ?
                    (comparison * -1) : comparison);
            };
        };
    }
    ContactDataService.prototype.getSearchQuery = function () {
        if (this.searchQuery === '') {
            return;
        }
        else {
            return this.searchQuery;
        }
    };
    ContactDataService.prototype.getContacts = function (queryObj) {
        if (queryObj === void 0) { queryObj = ''; }
        if (queryObj === '') {
            return this.contactList;
        }
        else {
            var foundContacts_1 = [];
            var results_1 = [];
            this.contactList.forEach(function (el, index) {
                var myRe = new RegExp(queryObj, 'gi');
                if ((el.name.search(myRe) !== -1) || (el.phone.search(myRe) !== -1) || (el.email.search(myRe) !== -1)) {
                    results_1.push(el.name.match(myRe));
                    foundContacts_1.push(el);
                }
            });
            console.log(results_1);
            console.log('FoundContacts: ', foundContacts_1);
            return foundContacts_1;
        }
    };
    // findExistingContact(el, i){
    //   let field = '';
    //   if (name === el.name) {
    //     field = 'name';
    //   } else if (phone === el.phone) {
    //     field = 'phone';
    //   } else if (email === el.email) {
    //     field = 'email';
    //   }
    // }
    ContactDataService.prototype.addContactHandler = function (sentContact) {
        // if (newContact.name !== '' && newContact.phone !== '' && newContact.email !== '') {
        //   this.contactList.push(newContact);
        // }
        var field = '';
        var findExistingContact = this.contactList.findIndex(function (el, i) {
            // return (name === el.name) || (phone === el.phone) || (email === el.email);
            if (sentContact.name === el.name) {
                field = 'name';
                return true;
            }
            else if (sentContact.phone === el.phone) {
                field = 'phone';
                return true;
            }
            else if (sentContact.email === el.email) {
                field = 'email';
                return true;
            }
            return false;
        });
        console.log(findExistingContact);
        if (findExistingContact === -1) {
            var newContact = sentContact;
            this.contactList.push(newContact);
        }
        else {
            alert("Contact with field " + field + " already exists!");
        }
    };
    ContactDataService.prototype.deleteContactHandler = function (contact, index) {
        console.log(index); // passed from child component (contact) so as to use the index to change the contactList array
        this.contactList.splice(index, 1);
    };
    ContactDataService.prototype.editContactHandler = function (contact, index) {
        this.contactList.splice(index, 1, contact);
    };
    ContactDataService.prototype.findContactIndex = function (contact) {
        var findContact = this.contactList.findIndex(function (el, i) {
            return contact.name === el.name;
        });
        console.log(findContact);
        return findContact;
    };
    return ContactDataService;
}());



/***/ }),

/***/ "./src/app/add-contact-component/add-contact-component.component.css":
/***/ (function(module, exports) {

module.exports = ".AddContact {\n  /* text-align: center; */\n  border: 2px solid #ccc ;\n  /* padding: 20px; */\n  margin:30px auto;\n  width: 100%;\n}\n\n.card-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /* justify-content: center; */\n  background-color: rgba(0, 116, 217, 1.0);\n  color:white;\n}\n\n.card-header span {\n  margin-right:5px;\n}\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\ninput.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n\n.spanContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/add-contact-component/add-contact-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"AddContact\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n\n      <div>\n          <span><i class=\"fas fa-user-plus\"></i> Add Contact</span>\n          <!-- <h5> Add Contact</h5> -->\n      </div>\n\n    </div>\n    <div class=\"card-body\">\n      <form (ngSubmit)=\"onSubmit(form); form.resetForm()\" #form=\"ngForm\">\n\n        <div class=\"row\">\n            <div class=\"form-group col-xs-3 col-md-3\">\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>\n                  </div>\n                    <input type=\"text\" minlength=\"2\" class=\"form-control\" name=\"name\"\n                    [value]=\"name\" placeholder=\"Name\" ngModel required #nameCtrl=\"ngModel\"/>\n                </div>\n            </div>\n            <div class=\"form-group col-xs-3 col-md-3\">\n              <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" name=\"phone\"\n                [value]=\"phone\" placeholder=\"Phone\" ngModel required #phoneCtrl=\"ngModel\"/>\n              </div>\n            </div>\n            <div class=\"form-group col-xs-3 col-md-3\">\n              <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-at\" aria-hidden=\"true\"></i></span>\n                </div>\n                <input type=\"email\" class=\"form-control\" name=\"email\"\n                [value]=\"email\" placeholder=\"Email\" ngModel required #emailCtrl=\"ngModel\"/>\n              </div>\n            </div>\n\n          </div>\n          <!-- <div class=\"row\">\n              <div class=\"col-xs-3 col-md-3\">\n                  <span class=\"help-block\" *ngIf=\"nameCtrl.invalid && nameCtrl.touched\">Please enter a name</span>\n              </div>\n              <div class=\"col-xs-3 col-md-3\">\n                  <span class=\"help-block\" *ngIf=\"phoneCtrl.invalid && phoneCtrl.touched\">Please enter a phone number</span>\n              </div>\n              <div class=\"col-xs-3 col-md-3\">\n                  <span class=\"help-block\" *ngIf=\"emailCtrl.invalid && emailCtrl.touched\">Please enter an email address</span>\n              </div>\n          </div> -->\n          <div class=\"row\">\n              <div class=\"form-group col-xs-3 col-md-3\">\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"fa fa-building\" aria-hidden=\"true\"></i></span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" name=\"organization\"\n                  [value]=\"organization\" placeholder=\"Organization\" ngModel required #orgCtrl=\"ngModel\"/>\n                </div>\n              </div>\n              <div class=\"form-group col-xs-3 col-md-3\">\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"fa fa-sticky-note\" aria-hidden=\"true\"></i></span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" name=\"notes\"\n                  [value]=\"notes\" placeholder=\"Notes\" ngModel #noteCtrl=\"ngModel\"/>\n                </div>\n              </div>\n              <div class=\"form-group col-xs-2 col-md-2\">\n                  <button class=\"btn\"\n                    type=\"submit\"\n                    [disabled]=\"form.invalid\"\n                    [ngClass]=\"{'btn-primary': nameCtrl !== '' && phoneCtrl !== '' && emailCtrl !== '' && orgCtrl !== '', 'btn-default': nameCtrl == '' && phoneCtrl == '' && emailCtrl == '' && orgCtrl == ''}\"\n                    >Add Contact</button>\n              </div>\n          </div>\n      </form>\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/add-contact-component/add-contact-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddContactComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ContactData_service__ = __webpack_require__("./src/app/ContactData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddContactComponentComponent = /** @class */ (function () {
    function AddContactComponentComponent(contactServObj) {
        this.name = '';
        this.phone = '';
        this.email = '';
        this.organization = '';
        this.notes = '';
        this.contactServObj = contactServObj;
    }
    AddContactComponentComponent.prototype.onAddContact = function (event) {
        if (this.name !== '' && this.phone !== '' && this.email !== '') {
            this.newContact.name = this.name;
            this.newContact.phone = this.phone;
            this.newContact.email = this.email;
        }
        console.log(this.newContact);
    };
    AddContactComponentComponent.prototype.onSubmit = function (submittedForm) {
        if (submittedForm.invalid) {
            return;
        }
        console.log(submittedForm);
        if (submittedForm.value.name !== '' && submittedForm.value.phone !== ''
            && submittedForm.value.email !== '' && submittedForm.value.organization !== '') {
            this.contactServObj.addContactHandler({ name: submittedForm.value.name, phone: submittedForm.value.phone,
                email: submittedForm.value.email, organization: submittedForm.value.organization, notes: submittedForm.value.notes });
            this.name = '';
            this.phone = '';
            this.email = '';
            this.organization = '';
            this.notes = '';
        }
    };
    AddContactComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-add-contact-component',
            template: __webpack_require__("./src/app/add-contact-component/add-contact-component.component.html"),
            styles: [__webpack_require__("./src/app/add-contact-component/add-contact-component.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ContactData_service__["a" /* ContactDataService */]])
    ], AddContactComponentComponent);
    return AddContactComponentComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body {\n  font-size: 16px;\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div style=\"text-align:center\">\n  <app-cockpit-component></app-cockpit-component>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col\">\n          <app-search-contact-component>\n\n          </app-search-contact-component>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col\">\n          <app-add-contact-component>\n\n          </app-add-contact-component>\n      </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <app-sort></app-sort>\n    </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-12\">\n          <div class=\"list-group\">\n            <app-contact-list-component></app-contact-list-component>\n          </div>\n      </div>\n      <!-- <div class=\"col-4\">\n        <h3>Contact Detail</h3>\n          <app-contact-detail\n          *ngIf=\"selectedContact; else infoText\"\n          [contact]=\"selectedContact\"></app-contact-detail>\n          <ng-template #infoText>\n            <p>Please select a contact</p>\n          </ng-template>\n      </div> -->\n  </div>\n</div>\n<!-- [ngStyle]=\"{display: selectedContact ? 'none' : 'block'}\" -->\n<!-- <div>\n  <app-contact-list-component>\n\n  </app-contact-list-component>\n</div> -->\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ContactData_service__ = __webpack_require__("./src/app/ContactData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome__ = __webpack_require__("./node_modules/@fortawesome/fontawesome/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-solid/index.es.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(contactServObj) {
        this.contactServObj = contactServObj;
        this.title = 'app';
        __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid__["g" /* faEdit */]);
        __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid__["j" /* faTrashAlt */]);
        __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid__["f" /* faChevronRight */], __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid__["i" /* faStickyNote */], __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid__["l" /* faUserPlus */]);
        __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid__["e" /* faChevronLeft */], __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid__["h" /* faPhone */], __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid__["k" /* faUser */], __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid__["d" /* faBuilding */], __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid__["a" /* faAddressBook */], __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid__["b" /* faAddressCard */], __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid__["c" /* faAt */]);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactServObj.contactSelected.subscribe(function (contact) {
            _this.selectedContact = contact;
        });
        this.contactServObj.selectedContactVisible.subscribe(function (showOrNot) {
            _this.selectedContactVisible = showOrNot;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ContactData_service__["a" /* ContactDataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_component_contact_component_component__ = __webpack_require__("./src/app/contact-component/contact-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_list_component_contact_list_component_component__ = __webpack_require__("./src/app/contact-list-component/contact-list-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_contact_component_add_contact_component_component__ = __webpack_require__("./src/app/add-contact-component/add-contact-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_contact_component_search_contact_component_component__ = __webpack_require__("./src/app/search-contact-component/search-contact-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__backdrop_backdrop_component__ = __webpack_require__("./src/app/backdrop/backdrop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modal_modal_component__ = __webpack_require__("./src/app/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_contact_edit_contact_component__ = __webpack_require__("./src/app/edit-contact/edit-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ContactData_service__ = __webpack_require__("./src/app/ContactData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modal_show_service__ = __webpack_require__("./src/app/modal-show.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cockpit_component_cockpit_component_component__ = __webpack_require__("./src/app/cockpit-component/cockpit-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__filter_contact_pipe__ = __webpack_require__("./src/app/filter-contact.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sort_sort_component__ = __webpack_require__("./src/app/sort/sort.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contact_detail_contact_detail_component__ = __webpack_require__("./src/app/contact-detail/contact-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__contact_component_contact_component_component__["a" /* ContactComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_5__contact_list_component_contact_list_component_component__["a" /* ContactListComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_6__add_contact_component_add_contact_component_component__["a" /* AddContactComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_7__search_contact_component_search_contact_component_component__["a" /* SearchContactComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_8__backdrop_backdrop_component__["a" /* BackdropComponent */],
                __WEBPACK_IMPORTED_MODULE_9__modal_modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_10__edit_contact_edit_contact_component__["a" /* EditContactComponent */],
                __WEBPACK_IMPORTED_MODULE_13__cockpit_component_cockpit_component_component__["a" /* CockpitComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_14__filter_contact_pipe__["a" /* FilterContactPipe */],
                __WEBPACK_IMPORTED_MODULE_15__sort_sort_component__["a" /* SortComponent */],
                __WEBPACK_IMPORTED_MODULE_16__contact_detail_contact_detail_component__["a" /* ContactDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__ContactData_service__["a" /* ContactDataService */], __WEBPACK_IMPORTED_MODULE_12__modal_show_service__["a" /* ModalShowService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/backdrop/backdrop.component.css":
/***/ (function(module, exports) {

module.exports = ".backdrop {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 100;\n  left:0;\n  top:0;\n  background-color: rgba(0,0,0,0.5);\n}\n"

/***/ }),

/***/ "./src/app/backdrop/backdrop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackdropComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackdropComponent = /** @class */ (function () {
    function BackdropComponent() {
        this.sendBackDropClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    BackdropComponent.prototype.closeBackDropHandler = function (event) {
        // this.backDropShow = false;
        this.sendBackDropClose.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], BackdropComponent.prototype, "backDropShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], BackdropComponent.prototype, "sendBackDropClose", void 0);
    BackdropComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-backdrop',
            template: "<div [ngClass]=\"{'backdrop': backDropShow === true,\n              null: backDropShow === false}\"\n              (click)=\"closeBackDropHandler($event)\"></div>",
            styles: [__webpack_require__("./src/app/backdrop/backdrop.component.css")]
        })
    ], BackdropComponent);
    return BackdropComponent;
}());



/***/ }),

/***/ "./src/app/cockpit-component/cockpit-component.component.css":
/***/ (function(module, exports) {

module.exports = ".Cockpit-header {\n  /* background-image: linear-gradient(\n    to right,\n    rgba(44, 62, 80, 0.7)\n  ),\n    url('../../../src/assets/images/address-book-entry-contact-information.jpg'); */\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  /* background-origin: border-box; */\n  background-color:rgba(17, 17, 17, 0.8);\n  /* height: 200px; */\n  padding: 20px;\n  /* margin-bottom: 20px; */\n  color: white;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.container {\n  margin:auto;\n  /* display: block; */\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.Cockpit-title {\n  font-size: 2.3em;\n  margin:20px;\n  /* font-family: \"open sans\", sans-serif; */\n}\n\n.box1 {\n  width:150px;\n  height:100px;\n  background-color: rgba(0, 116, 217, 0.8);\n  border: 2px solid white;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  justify-items: stretch;\n  /* padding:10px; */\n  text-align:center;\n\n}\n\n/* .fas fa-address-book fa-4x {\n\n  margin:auto;\n} */\n"

/***/ }),

/***/ "./src/app/cockpit-component/cockpit-component.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"Cockpit-header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"box1\">\n        <div class=\"container\">\n            <i class=\"fas fa-address-book fa-5x\"></i>\n        </div>\n      </div>\n      <!-- <div class=\"box2\">\n        <h2 class=\"Cockpit-title\">Angular Address-Book</h2>\n      </div> -->\n    </div>\n    <div class=\"row\">\n      <div class=\"box2\">\n          <h2 class=\"Cockpit-title\">Angular Address-Book</h2>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/cockpit-component/cockpit-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CockpitComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CockpitComponentComponent = /** @class */ (function () {
    function CockpitComponentComponent() {
    }
    CockpitComponentComponent.prototype.ngOnInit = function () {
    };
    CockpitComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-cockpit-component',
            template: __webpack_require__("./src/app/cockpit-component/cockpit-component.component.html"),
            styles: [__webpack_require__("./src/app/cockpit-component/cockpit-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CockpitComponentComponent);
    return CockpitComponentComponent;
}());



/***/ }),

/***/ "./src/app/contact-component/contact-component.component.css":
/***/ (function(module, exports) {

module.exports = ".contact {\n  text-align: center;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 31% 30% 31% 4% 4%;\n      grid-template-columns: 31% 30% 31% 4% 4%;\n  justify-items: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin:10px auto;\n  /* margin-right: 10px; */\n  padding: 10px;\n  -webkit-box-shadow:0 2px 3px rgb(26, 25, 25);\n          box-shadow:0 2px 3px rgb(26, 25, 25);\n}\n\n.contactChild {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\nbutton {\n  border-radius: 50%;\n}\n\nbutton:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n\n}\n"

/***/ }),

/***/ "./src/app/contact-component/contact-component.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"contact\"\n  (click)=\"onSelected()\">\n    <div class=\"contactChild\">Name: {{contact.name}}</div>\n    <div class=\"contactChild\">Phone: {{contact.phone}}</div>\n    <div class=\"contactChild\">Email: {{contact.email}}</div>\n    <div class=\"contactChild\">\n      <button class=\"btn btn-danger\" (click)=\"deleteContact($event)\">x</button>\n    </div>\n    <div class=\"contactChild\">\n      <button class=\"btn\" (click)=\"showModalHandler($event)\">e</button>\n    </div>\n</div>\n<div>\n    <app-modal [modalShow]=\"modalShow\" [importedContact]=\"contact\"\n      (sendModalClose)=\"closeModalHandler($event)\">\n    </app-modal>\n</div> -->\n<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"col-8 float-left\">\n      <div class=\"list-group-item clearfix\">\n        <div class=\"float-left\">\n            <h4 class=\"list-group-item-heading\">{{ contact.name }}</h4>\n            <h6 class=\"list-group-item-text\">Phone: {{ contact.phone }}</h6>\n            <h6 class=\"list-group-item-text\">Email: {{ contact.email }}</h6>\n        </div>\n        <div class=\"float-right\">\n            <button class=\"btn btn-light\" (click)=\"deleteContact($event)\"><i class=\"fas fa-trash-alt\"></i></button>\n            <button class=\"btn btn-light\" (click)=\"showModalHandler($event)\"><i class=\"fas fa-edit\"></i></button>\n            <button class=\"btn btn-light\" (click)=\"onSelected()\" *ngIf=\"wasClicked===false\"><i class=\"fas fa-chevron-right\"></i></button>\n            <button class=\"btn btn-light\" (click)=\"onSelected()\" *ngIf=\"wasClicked===true\"><i class=\"fas fa-chevron-left\"></i></button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-4 float-right\">\n        <app-contact-detail\n          *ngIf=\"selectedContact\"\n          [contact]=\"selectedContact\"></app-contact-detail>\n    </div>\n  </div>\n</div>\n\n<div>\n    <app-modal [modalShow]=\"modalShow\" [importedContact]=\"contact\"\n      (sendModalClose)=\"closeModalHandler($event)\">\n    </app-modal>\n</div>\n"

/***/ }),

/***/ "./src/app/contact-component/contact-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ContactData_service__ = __webpack_require__("./src/app/ContactData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponentComponent = /** @class */ (function () {
    // modalShow = this.modalServObj.getModalStatus();
    function ContactComponentComponent(contactServObj) {
        this.wasClicked = false;
        this.modalShow = false;
        this.contactServObj = contactServObj;
    }
    ContactComponentComponent.prototype.deleteContact = function (event) {
        // console.log(this.index);
        // this.contactToRemove.emit(this.contact);
        this.contactServObj.deleteContactHandler(this.contact, this.index);
    };
    ContactComponentComponent.prototype.showModalHandler = function (event) {
        // this.backDropShow = true;
        this.modalShow = true;
        // this.modalToShow.showModalHandler();
    };
    ContactComponentComponent.prototype.closeModalHandler = function (negativeFeedback) {
        // this.backDropShow = false;
        this.modalShow = negativeFeedback;
    };
    ContactComponentComponent.prototype.onSelected = function () {
        console.log("contact " + this.contact.name + " clicked!");
        this.wasClicked = this.wasClicked ? false : true;
        console.log(this.wasClicked);
        if (this.wasClicked) {
            this.selectedContact = this.contact;
        }
        else if (!this.wasClicked) {
            this.selectedContact = null;
        }
        this.contactServObj.contactSelected.emit(this.contact);
        this.contactServObj.selectedContactVisible.emit(this.wasClicked);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ContactComponentComponent.prototype, "contact", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ContactComponentComponent.prototype, "index", void 0);
    ContactComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-contact-component',
            template: __webpack_require__("./src/app/contact-component/contact-component.component.html"),
            styles: [__webpack_require__("./src/app/contact-component/contact-component.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ContactData_service__["a" /* ContactDataService */]])
    ], ContactComponentComponent);
    return ContactComponentComponent;
}());



/***/ }),

/***/ "./src/app/contact-detail/contact-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact-detail/contact-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h4>{{ contact.name }}</h4>\n    <h6>Phone: {{ contact.phone}}</h6>\n    <h6>Email: {{ contact.email }}</h6>\n    <h6>Organization: {{ contact.organization }}</h6>\n    <h6>Notes: {{ contact.notes }}</h6>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact-detail/contact-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ContactData_service__ = __webpack_require__("./src/app/ContactData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_model__ = __webpack_require__("./src/app/contact.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactDetailComponent = /** @class */ (function () {
    function ContactDetailComponent(contactServObj) {
        this.contactServObj = contactServObj;
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__contact_model__["a" /* Contact */])
    ], ContactDetailComponent.prototype, "contact", void 0);
    ContactDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-contact-detail',
            template: __webpack_require__("./src/app/contact-detail/contact-detail.component.html"),
            styles: [__webpack_require__("./src/app/contact-detail/contact-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ContactData_service__["a" /* ContactDataService */]])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());



/***/ }),

/***/ "./src/app/contact-list-component/contact-list-component.component.css":
/***/ (function(module, exports) {

module.exports = ".mainContainer {\n  /* text-align: center; */\n  /* border: 2px solid #ccc ; */\n  padding: 10px;\n  margin:auto;\n  width: 100%;\n\n}\n\n.list-group {\n  text-align: center;\n  padding: 0px;\n  /* border: 1px solid #000 ; */\n  margin: auto;\n  display: block;\n}\n\n.list-group-item {\n  text-align: center;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 33% 33% 33%;\n      grid-template-columns: 33% 33% 33%;\n  justify-items: stretch;\n  margin:10px;\n  /* margin-right: 10px; */\n  padding: 10px;\n  -webkit-box-shadow:0 2px 3px rgb(26, 25, 25);\n          box-shadow:0 2px 3px rgb(26, 25, 25);\n}\n"

/***/ }),

/***/ "./src/app/contact-list-component/contact-list-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"mainContainer\">\n\n          <app-contact-component\n\n            *ngFor=\"let contact of contactList | filterContact: searchQuery; let i = index\"\n            [contact]=\"contact\"\n            [index] = \"i\"\n            >\n          </app-contact-component>\n\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact-list-component/contact-list-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ContactData_service__ = __webpack_require__("./src/app/ContactData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactListComponentComponent = /** @class */ (function () {
    function ContactListComponentComponent(contactServObj) {
        this.contactList = [];
        this.contactServObj = contactServObj;
        // this.searchableList = ['name', 'phone', 'email'];
    }
    ContactListComponentComponent.prototype.ngOnChanges = function (changes) {
        // this.queryString = this.contactServObj.searchQuery;
        console.log('ngOnChanges called!');
        for (var _i = 0, _a = Object.keys(changes); _i < _a.length; _i++) {
            var key = _a[_i];
            console.log(key + " changed.Current: " + changes[key].currentValue + ".Previous: " + changes[key].previousValue);
        }
    };
    ContactListComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactList = this.contactServObj.getContacts();
        // console.log('ngOnInit called!');
        this.contactServObj.queryString.subscribe(function (query) {
            _this.searchQuery = query;
        });
    };
    ContactListComponentComponent.prototype.passedOnSearchTerm = function (event) {
        console.log(event);
    };
    ContactListComponentComponent.prototype.ngDoCheck = function () {
        // console.log('ngDoCheck called!');
        // this.queryString = this.contactServObj.getSearchQuery();
        // console.log(this.queryString);
        // console.log(this.searchQuery);
    };
    ContactListComponentComponent.prototype.ngAfterContentInit = function () {
        // console.log('ngAfterContentInit called!');
    };
    ContactListComponentComponent.prototype.ngAfterContentChecked = function () {
        // console.log('ngAfterContentChecked called!');
    };
    ContactListComponentComponent.prototype.ngAfterViewInit = function () {
        // console.log('ngAfterViewInit called!');
    };
    ContactListComponentComponent.prototype.ngAfterViewChecked = function () {
        // console.log('ngAfterViewChecked called!');
    };
    ContactListComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-contact-list-component',
            template: __webpack_require__("./src/app/contact-list-component/contact-list-component.component.html"),
            styles: [__webpack_require__("./src/app/contact-list-component/contact-list-component.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ContactData_service__["a" /* ContactDataService */]])
    ], ContactListComponentComponent);
    return ContactListComponentComponent;
}());



/***/ }),

/***/ "./src/app/contact.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact(name, phone, email, organization, notes) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.organization = organization;
        this.notes = notes;
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/edit-contact/edit-contact.component.css":
/***/ (function(module, exports) {

module.exports = ".outer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding:0.5rem 0rem;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n\n.inner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin: 0.3rem 0;\n}\n\n"

/***/ }),

/***/ "./src/app/edit-contact/edit-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"outer\">\n  <form (ngSubmit)=\"onSubmit(editForm); editForm.resetForm()\" #editForm=\"ngForm\">\n      <p><strong>Edit Contact: {{contact.name}}</strong></p>\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Name\" [(ngModel)]=\"name\" #nameCtrl=\"ngModel\" required/>\n      </div>\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"phone\" placeholder=\"Phone\" [(ngModel)]=\"phone\" #phoneCtrl=\"ngModel\" required/>\n      </div>\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" #emailCtrl=\"ngModel\" required/>\n      </div>\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"organization\" placeholder=\"Organization\" [(ngModel)]=\"organization\" #orgCtrl=\"ngModel\" required/>\n      </div>\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"notes\" placeholder=\"Notes / Comments\" [(ngModel)]=\"notes\" #noteCtrl=\"ngModel\"/>\n      </div>\n      <div class=\"form-group\">\n          <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"editForm.invalid\">Save</button>\n          <button class=\"btn btn-default\" (click)=\"onCancel($event)\">Cancel</button>\n      </div>\n  </form>\n  <!-- (ngSubmit)=\"onSubmit(editForm); editForm.resetForm()\" -->\n</div>\n"

/***/ }),

/***/ "./src/app/edit-contact/edit-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ContactData_service__ = __webpack_require__("./src/app/ContactData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_model__ = __webpack_require__("./src/app/contact.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditContactComponent = /** @class */ (function () {
    function EditContactComponent(contactServObj) {
        this.sendModalClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.name = '';
        this.phone = '';
        this.email = '';
        this.organization = '';
        this.notes = '';
        this.contactServObj = contactServObj;
    }
    EditContactComponent.prototype.ngOnInit = function () {
        // this.contactList = this.contactServObj.getContacts();
    };
    EditContactComponent.prototype.onCancel = function (event) {
        this.sendModalClose.emit(false);
    };
    // onSave(event) {
    //   this.index = this.contactServObj.findContactIndex(this.contact);
    //   // this.contactServObj.editContactHandler(index);
    //   const contactToSave = {name: this.name, phone: this.phone, email: this.email};
    //   console.log(contactToSave);
    //   this.contactServObj.editContactHandler(contactToSave, this.index);
    // }
    EditContactComponent.prototype.onSubmit = function (submittedForm) {
        if (submittedForm.invalid) {
            return;
        }
        // console.log(submittedForm.value);
        var contactToSave = { name: submittedForm.value.name, phone: submittedForm.value.phone,
            email: submittedForm.value.email, organization: submittedForm.value.organization, notes: submittedForm.value.notes };
        console.log(contactToSave);
        this.index = this.contactServObj.findContactIndex(this.contact);
        this.contactServObj.editContactHandler(contactToSave, this.index);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], EditContactComponent.prototype, "sendModalClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__contact_model__["a" /* Contact */])
    ], EditContactComponent.prototype, "contact", void 0);
    EditContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-edit-contact',
            template: __webpack_require__("./src/app/edit-contact/edit-contact.component.html"),
            styles: [__webpack_require__("./src/app/edit-contact/edit-contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ContactData_service__["a" /* ContactDataService */]])
    ], EditContactComponent);
    return EditContactComponent;
}());



/***/ }),

/***/ "./src/app/filter-contact.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterContactPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterContactPipe = /** @class */ (function () {
    function FilterContactPipe() {
    }
    FilterContactPipe.prototype.transform = function (value, filterString) {
        if (value.length === 0 || filterString === '') {
            return value;
        }
        var myRe = new RegExp(filterString, 'gi');
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if ((item.name.search(myRe) !== -1) || (item.phone.search(myRe) !== -1) || (item.email.search(myRe) !== -1)) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    FilterContactPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'filterContact'
        })
    ], FilterContactPipe);
    return FilterContactPipe;
}());



/***/ }),

/***/ "./src/app/modal-show.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalShowService; });
// import { Injectable } from '@angular/core';
var ModalShowService = /** @class */ (function () {
    function ModalShowService() {
        this.modalShow = false;
    }
    ModalShowService.prototype.showModalHandler = function () {
        // this.backDropShow = true;
        this.modalShow = true;
    };
    ModalShowService.prototype.closeModalHandler = function () {
        // this.backDropShow = false;
        this.modalShow = false;
    };
    ModalShowService.prototype.getModalStatus = function () {
        if (this.modalShow) {
            return true;
        }
        else {
            return false;
        }
    };
    return ModalShowService;
}());



/***/ }),

/***/ "./src/app/modal/modal.component.css":
/***/ (function(module, exports) {

module.exports = ".Modal {\n  position: fixed;\n  z-index: 500;\n  background-color: white;\n  width: 70%;\n  border: 1px solid #ccc;\n  -webkit-box-shadow: 1px 1px 1px black;\n          box-shadow: 1px 1px 1px black;\n  padding: 16px;\n  left: 15%;\n  top: 30%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n\n@media (min-width: 600px) {\n  .Modal {\n      width: 500px;\n      left: calc(50% - 250px);\n  }\n}\n"

/***/ }),

/***/ "./src/app/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<app-backdrop [backDropShow]=\"modalShow\" (sendBackDropClose)=\"closeModalHandler($event)\"></app-backdrop>\n<div class=\"Modal\"\n    [ngStyle]=\"{\n        transform: modalShow? 'translateY(0)' : 'translateY(-100vh)',\n        opacity: modalShow? '1' : '0'\n    }\">\n    <app-edit-contact [contact]=\"importedContact\" (sendModalClose)=\"closeModalHandler($event)\"></app-edit-contact>\n</div>\n"

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        // @Input() backDropShow;
        this.sendModalClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    ModalComponent.prototype.closeModalHandler = function (event) {
        console.log(event);
        this.sendModalClose.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "importedContact", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "modalShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "sendModalClose", void 0);
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-modal',
            template: __webpack_require__("./src/app/modal/modal.component.html"),
            styles: [__webpack_require__("./src/app/modal/modal.component.css")]
        })
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/search-contact-component/search-contact-component.component.css":
/***/ (function(module, exports) {

module.exports = ".searchContainer {\n  text-align: center;\n  margin:auto;\n  display: inline;\n  padding:20px;\n\n}\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/search-contact-component/search-contact-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"searchContainer\">\n  <div class=\"row\">\n    <form class=\"form-inline\" #searchForm=\"ngForm\">\n      <div class=\"form-group\">\n            <!-- <label>Search:</label> -->\n            <input class=\"form-control\" type=\"text\" minlength=\"2\"\n            placeholder=\"Search Contact..\" name=\"search\"\n            [(ngModel)]=\"query\" #searchCtrl=\"ngModel\" required\n            (keyup)=\"onKey($event)\"/>\n            <!-- <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"searchForm.invalid\">Submit</button>\n            <button class=\"btn\" type=\"reset\" (click)=\"onReset($event)\">Reset</button> -->\n            <!-- (ngSubmit)=\"onSubmit(searchForm)\" -->\n      </div>\n  </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search-contact-component/search-contact-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchContactComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ContactData_service__ = __webpack_require__("./src/app/ContactData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchContactComponentComponent = /** @class */ (function () {
    function SearchContactComponentComponent(contactServObj) {
        this.contactServObj = contactServObj;
    }
    // No longer needed due to filter pipes
    // onSubmit(submittedSearch) {
    //   if (submittedSearch.invalid) {
    //     return;
    //   }
    //   console.log(submittedSearch);
    //   if (submittedSearch.value.search !== '') {
    //     // this.contactServObj.getContacts(submittedSearch.value.search); // the service will be used when I learn about lifecycle hooks
    //     this.searchTerm.emit(submittedSearch.value.search);
    //     // console.log(submittedSearch.value.search);
    //     console.log(this.query);
    //     this.contactServObj.searchQuery = submittedSearch.value.search;
    //   }
    // }
    // No longer needed due to filter pipes
    // onReset(event) {
    //   console.log(this.query);
    //   this.contactServObj.searchQuery = '';
    // }
    SearchContactComponentComponent.prototype.onKey = function (event) {
        // console.log(event.target.value);
        this.contactServObj.searchQuery = event.target.value;
        // console.log(typeof event.target.value);
        this.contactServObj.queryString.emit(event.target.value);
    };
    SearchContactComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-search-contact-component',
            template: __webpack_require__("./src/app/search-contact-component/search-contact-component.component.html"),
            styles: [__webpack_require__("./src/app/search-contact-component/search-contact-component.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ContactData_service__["a" /* ContactDataService */]])
    ], SearchContactComponentComponent);
    return SearchContactComponentComponent;
}());



/***/ }),

/***/ "./src/app/sort/sort.component.css":
/***/ (function(module, exports) {

module.exports = ".sortContainer {\n  width:100%;\n  text-align: center;\n  display:-webkit-inline-box;\n  display:-ms-inline-flexbox;\n  display:inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  justify-items: stretch;\n  margin:auto;\n}\n\n.sortContainer .form-inline .form-group select {\n  margin-left: 10px;\n}\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/sort/sort.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sortContainer\">\n    <form class=\"form-inline\">\n      <div class=\"form-group\">\n          <label>Sort By:</label>\n          <select (change)=\"onSelectChange($event)\" class=\"form-control\" name=\"sort\">\n              <option value=\"default\">Choose</option>\n              <option name=\"name\" value=\"name\">Name</option>\n              <option name=\"phone\" value=\"phone\">Phone</option>\n              <option name=\"email\" value=\"email\">Email</option>\n          </select>\n      </div>\n    </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/sort/sort.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ContactData_service__ = __webpack_require__("./src/app/ContactData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortComponent = /** @class */ (function () {
    function SortComponent(contactServObj) {
        this.contactServObj = contactServObj;
    }
    SortComponent.prototype.ngOnInit = function () {
    };
    SortComponent.prototype.onSelectChange = function (event) {
        console.log(event.target.value);
        // const field = event.target.value === 'default' ? null : event.target.value;
        this.contactServObj.sortContactHandler(event.target.value);
    };
    SortComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-sort',
            template: __webpack_require__("./src/app/sort/sort.component.html"),
            styles: [__webpack_require__("./src/app/sort/sort.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ContactData_service__["a" /* ContactDataService */]])
    ], SortComponent);
    return SortComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map