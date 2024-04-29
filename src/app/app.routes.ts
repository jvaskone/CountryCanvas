import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },     
    { path: 'country/:id', component: CountryDetailsComponent }
        
    
];
