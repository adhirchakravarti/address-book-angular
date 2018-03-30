import { Injectable } from '@angular/core';

export class ModalShowService {
  private modalShow = false;

  constructor() { }

  showModalHandler() {
    // this.backDropShow = true;
    this.modalShow = true;
  }

  closeModalHandler() {
    // this.backDropShow = false;
    this.modalShow = false;
  }

  getModalStatus() {
    return this.modalShow;
  }
}
