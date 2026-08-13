import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDark = signal(false);

  constructor() {

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      this.isDark.set(true);
      document.documentElement.classList.add('dark');
    }

  }

  toggle(): void {

    const darkMode = !this.isDark();

    this.isDark.set(darkMode);

    if (darkMode) {

      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');

    } else {

      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');

    }

  }

}