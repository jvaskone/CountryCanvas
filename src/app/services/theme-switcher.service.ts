import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {

  public theme: "light-theme" | "dark-theme" = "light-theme";
  body = document.querySelector('body');
  input = document.getElementById('switch');

  
 
  constructor() { 
    const d = new Date();
    const hours = d.getHours();
    const night = hours >= 19 || hours <= 7; // between 7pm and 7am
    if(night) {
      this.theme = "dark-theme";      
      this.body?.classList.add('dark-theme');      
    }
  }

  isDarkTheme() {
    return this.theme == 'dark-theme';
  }

  switchTheme() {
    let dark = this.isDarkTheme();
    this.theme = dark ? "light-theme" : 'dark-theme';
    //this.body?.classList.toggle('dark-theme');
     if (dark) {
       this.body?.classList.remove('dark-theme');             
     } else {
       this.body?.classList.add('dark-theme');
     }
    console.log("Theme switched, body classList toggled");
  }
}
