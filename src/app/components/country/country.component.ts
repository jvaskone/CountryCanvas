import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries/countries.service';
import { Country } from '../../model/country';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent implements OnInit {
  @Input() country?: Country;

  constructor(public countriesService: CountriesService) {

  }

  ngOnInit(): void {
      
  }

}