import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Navbar } from "./layout/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly router = inject(Router);
  protected readonly title = signal('otop');
  protected readonly showNavbar = signal(true);

  constructor() {
    this.updateNavbarVisibility(this.router.url);

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.updateNavbarVisibility(event.urlAfterRedirects));
  }

  private updateNavbarVisibility(url: string): void {
    const hiddenRoutes = ['/login', '/admin'];
    this.showNavbar.set(!hiddenRoutes.some((route) => url.startsWith(route)));
  }
}
