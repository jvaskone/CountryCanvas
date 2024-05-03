import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ThemeSwitcherService } from './services/theme-switcher.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CountryCanvas';
  theme; //"light-theme" | "dark-theme" = "light-theme";
  nightMode = false;

  constructor(public themeService: ThemeSwitcherService) {
    this.theme = themeService.theme;
    this.nightMode = themeService.theme == "dark-theme";
    //console.log("this.nightmode: "+this.nightMode);
  }

  switchTheme() {
    this.themeService.switchTheme();
    this.theme = this.themeService.theme;
  }
}
