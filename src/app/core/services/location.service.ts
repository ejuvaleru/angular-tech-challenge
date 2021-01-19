import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  $userLocation = new BehaviorSubject<string>('');
  $defaultLocation = new BehaviorSubject<string>('United States');

  constructor(
    private http: HttpClient,
  ) {
    this.getUserLocation();
  }

  // Get user position in the Earth
  getUserLocation() {
    if (this.hasLocationCompatibility()) {
      navigator.geolocation.getCurrentPosition((position) => {
        if(position) {
          let response = this.getUserCountry(position.coords.latitude, position.coords.longitude)
          response.then(country => {
            this.$userLocation.next(country);
          });
        }
      },
        (err) => {
          err.message;
        }
      )
    } else {
      'Please enable navigation';
    }
  }

  // Use a geocding API to get the user Country
  async getUserCountry(lat, lon): Promise<string> {
    return await this.http.get(`${environment.geocoding.url}?access_key=${environment.geocoding.api_key}&query=${lat},${lon}`).toPromise().then((res: any) => {
      if (res) {
        return res.data[0].country;
      } else {
        return 'I dont know where are you from :c';
      }
    }).catch(err => {
      return 'Error';
    });
  }

  // Verify if navigator is compatible
  hasLocationCompatibility(): boolean {
    return (navigator.geolocation) ? true : false;
  }

  onChangeLocation(newLocation: string) {
    this.$defaultLocation.next(newLocation);
  }

}

