import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-country-popup',
  templateUrl: './country-popup.component.html',
  styleUrls: ['./country-popup.component.css']
})
export class CountryPopupComponent implements OnInit {
  @Input() country;

  param = {}
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.param = { country: this.country }
  }

}
