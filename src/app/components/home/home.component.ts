import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries/countries.service';
import { NgFor, NgIf } from '@angular/common';
import { Country } from '../../model/country';
import { CountryComponent } from "../country/country.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NgFor, NgIf, CountryComponent]
})
export class HomeComponent implements OnInit{

  countries!: Array<Country>;

  constructor(private countriesService: CountriesService) {

  }

  ngOnInit(): void {
      this.countriesService.getCountries().subscribe(response => {
        this.countries = response;
        this.countries = this.countries.sort((c1, c2) => c2.population - c1.population);
      });      
  }
}
