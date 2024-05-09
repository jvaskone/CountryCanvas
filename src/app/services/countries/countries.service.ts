import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Country } from '../../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  apiUrl: string = "https://restcountries.com/v3.1";
  countryNamesAndCodes = new Map<string, string>;

  constructor(private httpClient: HttpClient) { 
    this.getCountries().subscribe(countries => {      
      for(let i=0; i< countries.length; i++) {
        let country = countries.at(i);
        if(country) {
          this.countryNamesAndCodes.set(country?.cca3, country?.name.common);
        }
      }
    });  

  }

  getCountries(): Observable<Array<Country>>{
    return this.httpClient.get<Array<Country>>(`${this.apiUrl}/all`);
  }

  getCountry(name: String): Observable<Country>{
    return this.httpClient.get<Array<Country>>(`${this.apiUrl}/alpha/${name}`).pipe(
      map((item) => item[0]));
  }

  getCountryNameFromCode(code: string) {
    if(this.countryNamesAndCodes.has(code)) {
      return this.countryNamesAndCodes.get(code);
    }
    else {
      return code;
    }
  }
}
