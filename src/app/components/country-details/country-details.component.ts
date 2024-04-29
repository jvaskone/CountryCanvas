import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../model/country';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountriesService } from '../../services/countries/countries.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, RouterLink],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss'
})
export class CountryDetailsComponent implements OnInit{
  @Input() country?: Country;
  languages: any;
  currencies: any;
  density: number = 0.0;

  constructor( 
    public activatedRoute: ActivatedRoute,
    private countryService: CountriesService) {

  }

  ngOnInit(): void {
    console.log(this.country);
     this.activatedRoute.params.subscribe(params =>{
       this.countryService.getCountry(params['id']).subscribe(response =>
        {
          this.country = response;
          this.languages = this.country.languages;
          this.currencies = this.country.currencies;
          this.density = this.country.population / this.country.area;
        });      
     })
  }

  getLanguageKeys(): string[] {
    return Object.keys(this.languages);
  }

  getCurrencyKeys(): string[] {
    return Object.keys(this.currencies);
  }
}
