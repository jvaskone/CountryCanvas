import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesService } from '../../services/countries/countries.service';
import { CommonModule, NgFor } from '@angular/common';
import { Country } from '../../model/country';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  countries!: Array<Country>;

  constructor(private countriesService: CountriesService) {

  }

  ngOnInit(): void {
      this.countriesService.getCountries().subscribe(response => {
        this.countries = response;
      });
      console.log(this.countries);
  }
}
