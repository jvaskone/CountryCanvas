import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries/countries.service';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent {
  countryName!: string;

  constructor(public countriesService: CountriesService) {

  }

  setCountryByName(name: String) {

  }
}
