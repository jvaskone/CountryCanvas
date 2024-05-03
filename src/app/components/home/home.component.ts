import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries/countries.service';
import { CommonModule } from '@angular/common';
import { Country } from '../../model/country';
import { CountryComponent } from "../country/country.component";
import { RouterModule } from '@angular/router';
import { ThemeSwitcherService } from '../../services/theme-switcher.service';
import { FormsModule } from '@angular/forms';


enum SortingOptions {
  Population = 'Population',
  Area = 'Area',
  Alphabetically = 'Alphabetically',
  Density = 'Density'
}

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CommonModule, FormsModule, CountryComponent, RouterModule]
})
export class HomeComponent implements OnInit{

  countries!: Array<Country>;
  
  sortBy: SortingOptions[] = [
    SortingOptions.Population,
    SortingOptions.Area,
    SortingOptions.Alphabetically,
    SortingOptions.Density
  ];
  selectedSortBy: string = SortingOptions.Population;
  dropDown: boolean = false;

  constructor(private countriesService: CountriesService,
    public themeService: ThemeSwitcherService) {

  }

  setDropDown(b: boolean) {
    this.dropDown = b;
  }


  ngOnInit(): void {
    console.log("ONINIT: "+this.selectedSortBy)
      this.countriesService.getCountries().subscribe(response => {
        this.countries = response;
        this.countries = this.countries.sort((c1, c2) => c2.population - c1.population);
      });      
  }

  handleSortByChanged(selectedValue: string) {
    this.selectedSortBy = selectedValue;
    this.dropDown = false;
    console.log(selectedValue);
    this.countriesService.getCountries().subscribe(response => {
      this.countries = response;
      switch(selectedValue) {
        case SortingOptions.Population:
          this.countries = this.countries.sort((c1, c2) => c2.population - c1.population);
          break;
        case SortingOptions.Area: 
          this.countries = this.countries.sort((c1, c2) => c2.area - c1.area);
          break;
        case SortingOptions.Alphabetically: 
        this.countries = this.countries.sort((c1, c2) => c1.name.common.localeCompare(c2.name.common));
          break;
        case SortingOptions.Density:
          this.countries = this.countries.sort((c1, c2) => (c2.population / c2.area) - (c1.population / c1.area));
          break;
      }
    });    
  }

}
