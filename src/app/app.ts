import { AfterContentInit, Component, signal } from '@angular/core';
import { ToggleThemeService } from './service/toggle-theme-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements AfterContentInit {
  protected readonly title = signal('solo-adventurer-toolbox-ui');
  currentTheme: string | null = "";

  constructor(private _themeService: ToggleThemeService) {}

  ngAfterContentInit(): void {
    var storedTheme: string | null = ''
    storedTheme = 'light'

    if (localStorage != undefined)
        storedTheme = localStorage.getItem("Theme");
    this.currentTheme = storedTheme ? storedTheme : 'dark';
    document.documentElement.setAttribute('data-theme', this.currentTheme);    
  }

  toggleTheme() {
    this.currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this._themeService.setCurrentTheme(newTheme);
    this.currentTheme = newTheme;
    localStorage.setItem("Theme", newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }
}
