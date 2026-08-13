import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topbar } from '../topbar/topbar';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="flex min-h-screen bg-slate-50">

      <!-- Sidebar -->
      <aside class="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:block">

        <div class="flex h-16 items-center border-b border-slate-200 px-6">
          <h1 class="text-xl font-bold text-slate-900">
            LeadOrbit
          </h1>
        </div>

        <nav class="p-4">

          <a
            routerLink="/dashboard"
            routerLinkActive="bg-blue-50 text-blue-600"
            class="mb-1 flex items-center rounded-lg px-4 py-3
                   text-sm font-medium text-slate-600
                   hover:bg-slate-50">
            Dashboard
          </a>

          <a
            routerLink="/leads"
            routerLinkActive="bg-blue-50 text-blue-600"
            class="mb-1 flex items-center rounded-lg px-4 py-3
                   text-sm font-medium text-slate-600
                   hover:bg-slate-50">
            Leads
          </a>

          <a
            routerLink="/facebook-pages"
            routerLinkActive="bg-blue-50 text-blue-600"
            class="mb-1 flex items-center rounded-lg px-4 py-3
                   text-sm font-medium text-slate-600
                   hover:bg-slate-50">
            Facebook Pages
          </a>

          <a
            routerLink="/lead-forms"
            routerLinkActive="bg-blue-50 text-blue-600"
            class="mb-1 flex items-center rounded-lg px-4 py-3
                   text-sm font-medium text-slate-600
                   hover:bg-slate-50">
            Lead Forms
          </a>

          <a
            routerLink="/integrations"
            routerLinkActive="bg-blue-50 text-blue-600"
            class="mb-1 flex items-center rounded-lg px-4 py-3
                   text-sm font-medium text-slate-600
                   hover:bg-slate-50">
            Integrations
          </a>

          <a
            routerLink="/webhooks"
            routerLinkActive="bg-blue-50 text-blue-600"
            class="mb-1 flex items-center rounded-lg px-4 py-3
                   text-sm font-medium text-slate-600
                   hover:bg-slate-50">
            Webhooks
          </a>

          <a
            routerLink="/api"
            routerLinkActive="bg-blue-50 text-blue-600"
            class="mb-1 flex items-center rounded-lg px-4 py-3
                   text-sm font-medium text-slate-600
                   hover:bg-slate-50">
            API
          </a>

          <div class="my-4 border-t border-slate-200"></div>

          <a
            routerLink="/subscription"
            routerLinkActive="bg-blue-50 text-blue-600"
            class="mb-1 flex items-center rounded-lg px-4 py-3
                   text-sm font-medium text-slate-600
                   hover:bg-slate-50">
            Subscription
          </a>

          <a
            routerLink="/settings"
            routerLinkActive="bg-blue-50 text-blue-600"
            class="mb-1 flex items-center rounded-lg px-4 py-3
                   text-sm font-medium text-slate-600
                   hover:bg-slate-50">
            Settings
          </a>

        </nav>

        <!-- Sidebar Bottom -->
        <div class="absolute bottom-0 w-64 border-t border-slate-200 bg-white p-4">

          <button
            type="button"
            class="w-full rounded-lg px-4 py-3 text-left
                   text-sm font-medium text-red-600
                   hover:bg-red-50">
            Logout
          </button>

        </div>

      </aside>


      <!-- Main Area -->
      <div class="flex min-w-0 flex-1 flex-col">

        <!-- Topbar -->
        <header
          class="flex h-16 items-center justify-between
                 border-b border-slate-200 bg-white px-4 sm:px-6">

          <!-- Mobile Menu -->
          <button
            type="button"
            class="rounded-lg p-2 text-slate-600
                   hover:bg-slate-100 lg:hidden"
            (click)="toggleMobileMenu()">

            ☰

          </button>

          <div class="hidden lg:block">
            <span class="text-sm text-slate-500">
              Lead Management
            </span>
          </div>

          <!-- Right Side -->
          <div class="ml-auto flex items-center gap-4">

            <!-- Notification -->
            <button
              type="button"
              class="relative rounded-lg p-2 text-slate-600
                     hover:bg-slate-100">

              🔔

              <span
                class="absolute right-1 top-1 h-2 w-2
                       rounded-full bg-red-500">
              </span>

            </button>

            <!-- Profile -->
            <button
              type="button"
              class="flex items-center gap-2 rounded-lg
                     p-1 hover:bg-slate-50">

              <div
                class="flex h-9 w-9 items-center justify-center
                       rounded-full bg-blue-100
                       text-sm font-semibold text-blue-600">
                R
              </div>

              <div class="hidden text-left sm:block">

                <p class="text-sm font-medium text-slate-900">
                  Rukhsar
                </p>

                <p class="text-xs text-slate-500">
                  Admin
                </p>

              </div>

            </button>

          </div>

        </header>


        <!-- Mobile Navigation -->
        @if (mobileMenuOpen) {

          <div class="border-b border-slate-200 bg-white p-4 lg:hidden">

            <nav class="space-y-1">

              <a
                routerLink="/dashboard"
                (click)="closeMobileMenu()"
                class="block rounded-lg px-4 py-3 text-sm
                       font-medium text-slate-600
                       hover:bg-slate-50">
                Dashboard
              </a>

              <a
                routerLink="/leads"
                (click)="closeMobileMenu()"
                class="block rounded-lg px-4 py-3 text-sm
                       font-medium text-slate-600
                       hover:bg-slate-50">
                Leads
              </a>

              <a
                routerLink="/facebook-pages"
                (click)="closeMobileMenu()"
                class="block rounded-lg px-4 py-3 text-sm
                       font-medium text-slate-600
                       hover:bg-slate-50">
                Facebook Pages
              </a>

              <a
                routerLink="/lead-forms"
                (click)="closeMobileMenu()"
                class="block rounded-lg px-4 py-3 text-sm
                       font-medium text-slate-600
                       hover:bg-slate-50">
                Lead Forms
              </a>

              <a
                routerLink="/integrations"
                (click)="closeMobileMenu()"
                class="block rounded-lg px-4 py-3 text-sm
                       font-medium text-slate-600
                       hover:bg-slate-50">
                Integrations
              </a>

              <a
                routerLink="/webhooks"
                (click)="closeMobileMenu()"
                class="block rounded-lg px-4 py-3 text-sm
                       font-medium text-slate-600
                       hover:bg-slate-50">
                Webhooks
              </a>

              <a
                routerLink="/subscription"
                (click)="closeMobileMenu()"
                class="block rounded-lg px-4 py-3 text-sm
                       font-medium text-slate-600
                       hover:bg-slate-50">
                Subscription
              </a>

              <a
                routerLink="/settings"
                (click)="closeMobileMenu()"
                class="block rounded-lg px-4 py-3 text-sm
                       font-medium text-slate-600
                       hover:bg-slate-50">
                Settings
              </a>

            </nav>

          </div>

        }


        <!-- Page Content -->
        <main class="flex-1">

          <router-outlet></router-outlet>

        </main>

      </div>

    </div>
  `
})
export class MainLayout {

  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}