import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  template: `
    <div [class.dark]="isDark()" class="min-h-screen transition-colors duration-500">
      <div class="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-12 transition-colors duration-500 dark:bg-slate-950 sm:px-6 lg:px-8">
        
        <!-- Ambient Background Glows -->
        <div class="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl transition-all duration-700 dark:bg-blue-600/10"></div>
        <div class="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl transition-all duration-700 dark:bg-indigo-600/10"></div>

        <!-- Theme Toggle Button -->
        <button 
          (click)="toggleTheme()" 
          type="button"
          class="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-md text-slate-600 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          [attr.aria-label]="isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          @if (isDark()) {
            <!-- Sun Icon -->
            <svg class="h-5 w-5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          } @else {
            <!-- Moon Icon -->
            <svg class="h-5 w-5 text-slate-700 transition-transform duration-300 -rotate-12 hover:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
          }
        </button>

        <!-- Main Card -->
        <div class="relative w-full max-w-md space-y-8">
          <div class="group relative rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 dark:border-slate-800/80 dark:bg-slate-900/80 dark:shadow-none sm:p-10">
            
            <!-- Header Section -->
            <div class="text-center">
              <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-110">
                <!-- Orbit/Logo Icon -->
                <svg class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
              </div>

              <h1 class="mt-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                Create Account
              </h1>
              <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Join LeadOrbit to start organizing your pipeline today.
              </p>
            </div>

            <!-- Form -->
            <form class="mt-8 space-y-4" (submit)="$event.preventDefault()">
              
              <!-- Full Name Field -->
              <div class="space-y-1.5">
                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Full Name
                </label>
                <div class="relative rounded-xl shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500/40">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 dark:text-slate-500">
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Alex Morgan"
                    class="block w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder-slate-500 dark:hover:border-slate-700 dark:focus:border-blue-500 dark:focus:bg-slate-950"
                  />
                </div>
              </div>

              <!-- Email Field -->
              <div class="space-y-1.5">
                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <div class="relative rounded-xl shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500/40">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 dark:text-slate-500">
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    class="block w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder-slate-500 dark:hover:border-slate-700 dark:focus:border-blue-500 dark:focus:bg-slate-950"
                  />
                </div>
              </div>

              <!-- Password Field -->
              <div class="space-y-1.5">
                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Password
                </label>
                <div class="relative rounded-xl shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500/40">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 dark:text-slate-500">
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                  </div>
                  <input
                    [type]="showPassword() ? 'text' : 'password'"
                    placeholder="••••••••"
                    class="block w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-10 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder-slate-500 dark:hover:border-slate-700 dark:focus:border-blue-500 dark:focus:bg-slate-950"
                  />
                  <!-- Toggle Password Visibility -->
                  <button 
                    type="button"
                    (click)="togglePassword()" 
                    class="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                  >
                    @if (showPassword()) {
                      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.025 10.025 0 012.122-.363c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-2.138 3.412M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18" />
                      </svg>
                    } @else {
                      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                    }
                  </button>
                </div>
              </div>

              <!-- Confirm Password Field -->
              <div class="space-y-1.5">
                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Confirm Password
                </label>
                <div class="relative rounded-xl shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500/40">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 dark:text-slate-500">
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <input
                    [type]="showConfirmPassword() ? 'text' : 'password'"
                    placeholder="••••••••"
                    class="block w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-10 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder-slate-500 dark:hover:border-slate-700 dark:focus:border-blue-500 dark:focus:bg-slate-950"
                  />
                  <!-- Toggle Confirm Password Visibility -->
                  <button 
                    type="button"
                    (click)="toggleConfirmPassword()" 
                    class="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                  >
                    @if (showConfirmPassword()) {
                      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.025 10.025 0 012.122-.363c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-2.138 3.412M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18" />
                      </svg>
                    } @else {
                      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                    }
                  </button>
                </div>
              </div>

              <!-- Terms Checkbox -->
              <div class="flex items-center pt-1">
                <input
                  id="terms"
                  type="checkbox"
                  class="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/40 dark:border-slate-800 dark:bg-slate-950 dark:checked:bg-blue-600"
                />
                <label for="terms" class="ml-2.5 block text-xs text-slate-600 dark:text-slate-400">
                  I agree to the <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-400">Terms of Service</a> & <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-400">Privacy Policy</a>
                </label>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="group relative flex w-full justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/35 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 mt-2"
              >
                <span class="flex items-center gap-2">
                  Create Account
                  <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </span>
              </button>

            </form>

            <!-- Card Footer -->
            <div class="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
              Already have an account? 
              <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-400">Sign in</a>
            </div>

          </div>
        </div>

      </div>
    </div>
  `
})
export class Register {
  isDark = signal(true);
  showPassword = signal(false);
  showConfirmPassword = signal(false);

  toggleTheme() {
    this.isDark.update(val => !val);
  }

  togglePassword() {
    this.showPassword.update(val => !val);
  }

  toggleConfirmPassword() {
    this.showConfirmPassword.update(val => !val);
  }
}
