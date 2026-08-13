import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  template: `
    <div [class.dark]="isDark()" class="min-h-screen transition-colors duration-500">
      <div class="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-12 transition-colors duration-500 dark:bg-slate-950 sm:px-6 lg:px-8">
        
        <!-- Ambient Background Glows (Continuous Motion Effects) -->
        <div class="absolute -top-40 -left-40 h-96 w-96 animate-pulse rounded-full bg-blue-500/20 blur-3xl transition-all duration-1000 dark:bg-blue-600/10"></div>
        <div class="absolute -bottom-40 -right-40 h-96 w-96 animate-pulse rounded-full bg-indigo-500/20 blur-3xl transition-all duration-1000 dark:bg-indigo-600/10" style="animation-delay: 1s;"></div>

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
              <div class="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-110">
                <!-- Outer Pulsing Glow -->
                <span class="absolute -inset-1 animate-ping rounded-2xl bg-blue-500/30 opacity-75"></span>
                <!-- Key/Lock Icon -->
                <svg class="relative h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 0121 9z"/>
                </svg>
              </div>

              <h1 class="mt-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                @if (step() === 1) { Forgot Password }
                @else if (step() === 2) { Set New Password }
                @else { Password Updated! }
              </h1>
              
              <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
                @if (step() === 1) { Enter your email address to receive reset instructions. }
                @else if (step() === 2) { Enter and confirm your new security credentials. }
                @else { Your credentials have been successfully updated. }
              </p>
            </div>

            <!-- STEP 1: Enter Email -->
            @if (step() === 1) {
              <form class="mt-8 space-y-5" (submit)="handleEmailSubmit($event)">
                <div class="space-y-2">
                  <label class="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Registered Email
                  </label>
                  <div class="relative rounded-xl shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500/40">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 dark:text-slate-500">
                      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                      </svg>
                    </div>
                    <input
                      type="email"
                      required
                      [value]="email()"
                      (input)="email.set($any($event.target).value)"
                      placeholder="name@company.com"
                      class="block w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder-slate-500 dark:hover:border-slate-700 dark:focus:border-blue-500 dark:focus:bg-slate-950"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  class="group relative flex w-full justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/35 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                >
                  <span class="flex items-center gap-2">
                    Verify & Continue
                    <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </span>
                </button>
              </form>
            }

            <!-- STEP 2: Enter New Password -->
            @if (step() === 2) {
              <form class="mt-8 space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-300" (submit)="handlePasswordReset($event)">
                
                <!-- Email Read-only Badge -->
                <div class="flex items-center justify-between rounded-xl border border-slate-200/60 bg-slate-100/50 px-3.5 py-2 dark:border-slate-800/60 dark:bg-slate-950/40">
                  <span class="text-xs text-slate-500 dark:text-slate-400">Resetting for:</span>
                  <span class="text-xs font-semibold text-slate-800 dark:text-slate-200">{{ email() }}</span>
                </div>

                <!-- New Password Field -->
                <div class="space-y-1.5">
                  <label class="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    New Password
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
                      required
                      class="block w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-10 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder-slate-500 dark:hover:border-slate-700 dark:focus:border-blue-500 dark:focus:bg-slate-950"
                    />
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
                    Confirm New Password
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
                      required
                      class="block w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-10 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder-slate-500 dark:hover:border-slate-700 dark:focus:border-blue-500 dark:focus:bg-slate-950"
                    />
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

                <!-- Submit Button -->
                <button
                  type="submit"
                  class="group relative flex w-full justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/35 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 mt-2"
                >
                  <span class="flex items-center gap-2">
                    Update Password
                    <svg class="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                </button>
              </form>
            }

            <!-- STEP 3: Password Updated Success State -->
            @if (step() === 3) {
              <div class="mt-8 space-y-6 text-center animate-in zoom-in-95 duration-300">
                <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                  <svg class="h-8 w-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>

                <a
                  href="#"
                  class="group relative inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/35 active:scale-[0.98]"
                >
                  Back to Sign in
                </a>
              </div>
            }

            <!-- Card Footer -->
            <div class="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
              Remembered your password? 
              <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-400">Sign in</a>
            </div>

          </div>
        </div>

      </div>
    </div>
  `
})
export class ForgotPassword {
  isDark = signal(true);
  step = signal<1 | 2 | 3>(1);
  email = signal('');
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

  handleEmailSubmit(event: Event) {
    event.preventDefault();
    if (this.email().trim()) {
      this.step.set(2);
    }
  }

  handlePasswordReset(event: Event) {
    event.preventDefault();
    this.step.set(3);
  }
}