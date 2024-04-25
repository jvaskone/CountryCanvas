import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<Array<Country>>{
    return this.httpClient.get<Array<Country>>(`${this.apiUrl}/all`);
  }
}
