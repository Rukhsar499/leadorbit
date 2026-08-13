import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  template: `
    <header
      class="flex h-16 items-center justify-between
             border-b border-slate-200 bg-white
             px-4 sm:px-6">

      <!-- Left Side -->
      <div>
        <h1 class="text-lg font-semibold text-slate-900">
          LeadOrbit
        </h1>

        <p class="hidden text-xs text-slate-500 sm:block">
          Lead Management Platform
        </p>
      </div>


      <!-- Right Side -->
      <div class="flex items-center gap-2 sm:gap-4">

        <!-- Notifications -->
        <button
          type="button"
          class="relative rounded-lg p-2 text-slate-600
                 transition hover:bg-slate-100">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="h-5 w-5">

            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848
                 23.848 0 0 0 5.454-1.31A8.967
                 8.967 0 0 1 18 9.75V9a6 6
                 0 0 0-12 0v.75a8.967
                 8.967 0 0 1-2.312
                 6.022c1.733.64 3.56
                 1.085 5.455 1.31m5.714
                 0a24.255 24.255 0 0 1-5.714
                 0m5.714 0a3 3 0 1 1-5.714 0"
            />

          </svg>

          <!-- Notification Badge -->
          <span
            class="absolute right-1.5 top-1.5
                   h-2 w-2 rounded-full bg-red-500">
          </span>

        </button>


        <!-- Profile -->
        <button
          type="button"
          class="flex items-center gap-2 rounded-lg
                 p-1.5 transition hover:bg-slate-50">

          <!-- Avatar -->
          <div
            class="flex h-9 w-9 items-center justify-center
                   rounded-full bg-blue-100
                   text-sm font-semibold text-blue-600">

            R

          </div>


          <!-- User Info -->
          <div class="hidden text-left sm:block">

            <p class="text-sm font-medium text-slate-900">
              Rukhsar
            </p>

            <p class="text-xs text-slate-500">
              Admin
            </p>

          </div>


          <!-- Dropdown Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="hidden h-4 w-4 text-slate-400 sm:block">

            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />

          </svg>

        </button>

      </div>

    </header>
  `
})
export class Topbar {

}