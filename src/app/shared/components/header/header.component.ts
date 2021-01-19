import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LanguageService } from 'src/app/core/services/language.service';
import { LocationService } from 'src/app/core/services/location.service';
import { CountryPopupComponent } from '../country-popup/country-popup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isMenuCollapsed: boolean = true;
  userCountry = '';
  defaultLocation = '';

  constructor(
    private locationService: LocationService,
    private languageService: LanguageService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.locationService.$defaultLocation.subscribe(res => {
      this.defaultLocation = res;
      this.locationService.$userLocation.subscribe(res => {
        this.userCountry = res;
        if (this.userCountry && this.defaultLocation != this.userCountry && localStorage.getItem('defaultLocation') != this.userCountry) {
          this.openCountryModal();
        }else {
          this.defaultLocation = localStorage.getItem('defaultLocation');
        }
      });
    })
  }

  changeLangage(lng: string) {
    this.languageService.setLanguage(lng);
    this.isMenuCollapsed = true;
  }

  openCountryModal() {
    const modalRef = this.modalService.open(CountryPopupComponent);
    modalRef.componentInstance.country = `${this.userCountry}`;
  }

  onChangeLocation(newLocation: string) {
    localStorage.setItem('defaultLocation', newLocation);
    this.locationService.onChangeLocation(newLocation);
  }

}
