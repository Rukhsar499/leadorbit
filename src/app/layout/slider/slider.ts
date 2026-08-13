import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  template: `
    <div class="relative w-full overflow-hidden rounded-2xl bg-white">

      <!-- Slides -->
      <div class="flex transition-transform duration-500">

        <div class="min-w-full p-6">
          <div class="rounded-xl bg-blue-50 p-6">
            <h2 class="text-xl font-bold text-slate-900">
              Welcome to LeadOrbit
            </h2>

            <p class="mt-2 text-sm text-slate-500">
              Manage all your leads from one place.
            </p>
          </div>
        </div>

        <div class="min-w-full p-6">
          <div class="rounded-xl bg-green-50 p-6">
            <h2 class="text-xl font-bold text-slate-900">
              Connect Your Pages
            </h2>

            <p class="mt-2 text-sm text-slate-500">
              Connect Facebook Pages and Lead Forms.
            </p>
          </div>
        </div>

      </div>

      <!-- Previous Button -->
      <button
        type="button"
        class="absolute left-3 top-1/2 -translate-y-1/2
               flex h-9 w-9 items-center justify-center
               rounded-full bg-white shadow
               hover:bg-slate-50">

        ‹

      </button>

      <!-- Next Button -->
      <button
        type="button"
        class="absolute right-3 top-1/2 -translate-y-1/2
               flex h-9 w-9 items-center justify-center
               rounded-full bg-white shadow
               hover:bg-slate-50">

        ›

      </button>

      <!-- Dots -->
      <div class="flex justify-center gap-2 pb-5">

        <button
          type="button"
          class="h-2 w-6 rounded-full bg-blue-600">
        </button>

        <button
          type="button"
          class="h-2 w-2 rounded-full bg-slate-300">
        </button>

      </div>

    </div>
  `
})
export class Slider {

}