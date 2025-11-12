import { Component } from '@angular/core'
import { ToggleThemeService } from '../service/toggle-theme-service'

@Component({
  selector: 'app-toggle-theme',
  standalone: false,
  templateUrl: './toggle-theme.html',
  styleUrl: './toggle-theme.scss',
})
export class ToggleThemeComponent {
  private currentTheme: string | null = ''

  constructor(private _themeService: ToggleThemeService) {
    const storedTheme = localStorage.getItem('Theme')
    this.currentTheme = storedTheme ? storedTheme : 'dark'
    document.documentElement.setAttribute('data-theme', this.currentTheme)
  }

  protected setTheme(theme: string) {
    if (this.currentTheme == theme)
      return

    const newTheme = theme
    this._themeService.setCurrentTheme(newTheme)
    this.currentTheme = newTheme
    localStorage.setItem('Theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)

  }
}
