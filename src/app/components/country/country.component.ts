import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries/countries.service';
import { Country } from '../../model/country';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherService } from '../../services/theme-switcher.service';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent implements OnInit {
  @Input() country?: Country;

  constructor(public countriesService: CountriesService, public themeService: ThemeSwitcherService) {

  }

  ngOnInit(): void {
      
  }

}
