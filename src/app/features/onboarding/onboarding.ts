import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ConnectionState = 
  | 'INITIAL' 
  | 'CONNECTING' 
  | 'SUCCESS' 
  | 'FAILED' 
  | 'CANCELLED' 
  | 'PERMISSION_DENIED';

export interface FacebookPage {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  isConnected: boolean;
  activeFormsCount: number;
}

export interface LeadForm {
  id: string;
  pageId: string;
  name: string;
  leadsCount: number;
}

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      [class.dark]="theme() === 'dark'"
      class="relative min-h-screen font-sans antialiased transition-colors duration-500 selection:bg-blue-500 selection:text-white"
      [ngClass]="theme() === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'">
      
      <!-- Ambient Background Glows -->
      <div class="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full blur-[120px] transition-opacity duration-500"
        [ngClass]="theme() === 'dark' ? 'bg-blue-600/20' : 'bg-blue-400/20'"></div>
      <div class="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full blur-[140px] transition-opacity duration-500"
        [ngClass]="theme() === 'dark' ? 'bg-indigo-600/15' : 'bg-indigo-300/30'"></div>
      <div class="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full blur-[120px] transition-opacity duration-500"
        [ngClass]="theme() === 'dark' ? 'bg-sky-500/10' : 'bg-sky-300/20'"></div>

      <div class="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col justify-between px-4 py-8 sm:px-6 lg:px-8">
        
        <!-- Header & Theme Toggle Bar -->
        <header class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 text-sm font-black text-white shadow-lg shadow-blue-500/30">
              O
            </div>
            <div>
              <span class="text-xl font-bold tracking-tight" [ngClass]="theme() === 'dark' ? 'text-white' : 'text-slate-900'">LeadOrbit</span>
              <p class="text-[10px] font-semibold tracking-wider uppercase" [ngClass]="theme() === 'dark' ? 'text-slate-400' : 'text-slate-500'">Account Setup</p>
            </div>
          </div>

          <!-- Light / Dark Theme Switch Button -->
          <button 
            type="button" 
            (click)="toggleTheme()" 
            class="flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-medium transition-all duration-300 shadow-sm hover:scale-105"
            [ngClass]="theme() === 'dark' 
              ? 'border-slate-800 bg-slate-900/80 text-slate-300 hover:bg-slate-800' 
              : 'border-slate-200 bg-white/80 text-slate-700 hover:bg-slate-100'">
            @if (theme() === 'dark') {
              <!-- Sun Icon for switching to light -->
              <svg class="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m0 13.5V21m8.966-8.966h-2.25m-13.5 0H3m15.364-6.364l-1.591 1.591M6.758 17.242l-1.591 1.591m12.728 0l-1.591-1.591M6.758 6.758L5.167 5.167M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
              </svg>
              <span>Light Mode</span>
            } @else {
              <!-- Moon Icon for switching to dark -->
              <svg class="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
              <span>Dark Mode</span>
            }
          </button>
        </header>

        <!-- Main Content Area -->
        <main class="my-auto py-6">
          
          <!-- Stepper Progress Bar -->
          <nav aria-label="Progress" class="mb-8">
            <ol role="list" 
              class="flex items-center justify-between rounded-2xl border p-4 shadow-xl backdrop-blur-xl transition-colors duration-300 sm:p-5"
              [ngClass]="theme() === 'dark' ? 'border-slate-800/80 bg-slate-900/60' : 'border-slate-200/80 bg-white/70'">
              @for (step of steps; track step.number; let last = $last) {
                <li class="relative flex flex-1 items-center">
                  <div class="group flex items-center gap-3">
                    <div 
                      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold transition-all duration-300 shadow-md"
                      [ngClass]="{
                        'bg-gradient-to-tr from-blue-600 to-indigo-500 text-white shadow-blue-500/25 ring-2 ring-blue-400/30': currentStep() === step.number,
                        'bg-emerald-500/10 text-emerald-500 border border-emerald-500/30': currentStep() > step.number,
                        'border text-slate-400': currentStep() < step.number,
                        'border-slate-700/50 bg-slate-800/80': currentStep() < step.number && theme() === 'dark',
                        'border-slate-200 bg-slate-100/80': currentStep() < step.number && theme() === 'light'
                      }">
                      @if (currentStep() > step.number) {
                        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      } @else {
                        <span>{{ step.number }}</span>
                      }
                    </div>

                    <div class="hidden flex-col sm:flex">
                      <span class="text-xs font-semibold tracking-wider uppercase transition-colors"
                        [ngClass]="{
                          'text-slate-100': currentStep() >= step.number && theme() === 'dark',
                          'text-slate-900': currentStep() >= step.number && theme() === 'light',
                          'text-slate-500': currentStep() < step.number
                        }">
                        {{ step.title }}
                      </span>
                      <span class="text-[10px] text-slate-400">Step 0{{ step.number }}</span>
                    </div>
                  </div>

                  @if (!last) {
                    <div class="mx-3 h-[2px] flex-1 rounded-full transition-all duration-500"
                      [ngClass]="{
                        'bg-gradient-to-r from-emerald-500 to-blue-600': currentStep() > step.number,
                        'bg-slate-800': currentStep() <= step.number && theme() === 'dark',
                        'bg-slate-200': currentStep() <= step.number && theme() === 'light'
                      }">
                    </div>
                  }
                </li>
              }
            </ol>
          </nav>

          <!-- Dynamic Step Content Body -->
          <div 
            class="relative overflow-hidden rounded-3xl border p-6 shadow-2xl backdrop-blur-2xl transition-all duration-300 sm:p-10"
            [ngClass]="theme() === 'dark' ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200/90 bg-white/90'">
            
            <!-- STEP 1: WELCOME -->
            @if (currentStep() === 1) {
              <div class="text-center animate-fadeIn">
                <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-500/10 ring-1 ring-blue-500/30 text-4xl shadow-inner">
                  👋
                </div>

                <h2 class="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl"
                  [ngClass]="theme() === 'dark' ? 'text-white' : 'text-slate-900'">
                  Welcome to LeadOrbit
                </h2>

                <p class="mx-auto mt-4 max-w-lg text-base leading-relaxed"
                  [ngClass]="theme() === 'dark' ? 'text-slate-400' : 'text-slate-600'">
                  Let's connect your first Facebook Page and start receiving high-intent leads automatically in real-time.
                </p>

                <div class="mt-8 flex justify-center">
                  <button 
                    type="button" 
                    (click)="nextStep()"
                    class="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-blue-600/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-600/40 active:scale-[0.98]">
                    <span>Get Started</span>
                    <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            }

            <!-- STEP 2: FACEBOOK CONNECTION -->
            @if (currentStep() === 2) {
              <div class="animate-fadeIn">
                <div class="text-center">
                  <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-4 ring-blue-500/10">
                    <svg class="h-8 w-8 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>

                  <h2 class="mt-6 text-2xl font-bold tracking-tight sm:text-3xl"
                    [ngClass]="theme() === 'dark' ? 'text-white' : 'text-slate-900'">
                    Connect your Facebook Account
                  </h2>

                  <p class="mx-auto mt-3 max-w-md text-sm leading-relaxed"
                    [ngClass]="theme() === 'dark' ? 'text-slate-400' : 'text-slate-600'">
                    LeadOrbit needs permission to access your eligible Facebook Pages and Lead Ads.
                  </p>
                </div>

                <!-- Facebook Connection State Handling -->
                <div class="mx-auto mt-8 max-w-md">
                  @switch (connectionState()) {
                    
                    @case ('INITIAL') {
                      <button 
                        type="button" 
                        (click)="initiateFacebookOAuth()"
                        class="group relative flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-600/35 active:scale-[0.99]">
                        <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        <span>Connect Facebook</span>
                      </button>
                    }

                    @case ('CONNECTING') {
                      <div class="flex flex-col items-center justify-center rounded-xl border p-6 text-center"
                        [ngClass]="theme() === 'dark' ? 'border-slate-800 bg-slate-950/50' : 'border-slate-200 bg-slate-50'">
                        <div class="h-8 w-8 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
                        <p class="mt-4 text-sm font-medium" [ngClass]="theme() === 'dark' ? 'text-slate-300' : 'text-slate-700'">Connecting to Facebook OAuth...</p>
                        <p class="mt-1 text-xs text-slate-400">Authenticating access permissions</p>
                      </div>
                    }

                    @case ('SUCCESS') {
                      <div class="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-center">
                        <div class="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                          ✓
                        </div>
                        <p class="mt-3 text-sm font-semibold text-emerald-500">Account Connected Successfully</p>
                        <p class="mt-1 text-xs text-slate-400">Redirecting to Page selection...</p>
                      </div>
                    }

                    @case ('FAILED') {
                      <div class="rounded-xl border border-rose-500/30 bg-rose-500/10 p-5 text-center">
                        <p class="text-sm font-semibold text-rose-500">Connection Failed</p>
                        <p class="mt-1 text-xs text-slate-400">Unable to authenticate with Facebook. Please try again.</p>
                        <button type="button" (click)="initiateFacebookOAuth()" class="mt-4 rounded-lg bg-rose-600 px-4 py-2 text-xs font-semibold text-white hover:bg-rose-500">
                          Retry Connection
                        </button>
                      </div>
                    }

                    @case ('CANCELLED') {
                      <div class="rounded-xl border border-amber-500/30 bg-amber-500/10 p-5 text-center">
                        <p class="text-sm font-semibold text-amber-500">Authentication Cancelled</p>
                        <p class="mt-1 text-xs text-slate-400">The Facebook login process was closed before completion.</p>
                        <button type="button" (click)="initiateFacebookOAuth()" class="mt-4 rounded-lg bg-amber-600 px-4 py-2 text-xs font-semibold text-white hover:bg-amber-500">
                          Try Again
                        </button>
                      </div>
                    }

                    @case ('PERMISSION_DENIED') {
                      <div class="rounded-xl border border-amber-500/30 bg-amber-500/10 p-5 text-center">
                        <p class="text-sm font-semibold text-amber-500">Permission Denied</p>
                        <p class="mt-1 text-xs text-slate-400">LeadOrbit requires Page and Lead permissions to function properly.</p>
                        <button type="button" (click)="initiateFacebookOAuth()" class="mt-4 rounded-lg bg-amber-600 px-4 py-2 text-xs font-semibold text-white hover:bg-amber-500">
                          Grant Permissions
                        </button>
                      </div>
                    }
                  }
                </div>
              </div>
            }

            <!-- STEP 3: SELECT PAGE -->
            @if (currentStep() === 3) {
              <div class="animate-fadeIn">
                <div class="flex items-center justify-between border-b pb-5"
                  [ngClass]="theme() === 'dark' ? 'border-slate-800' : 'border-slate-200'">
                  <div>
                    <h2 class="text-xl font-bold" [ngClass]="theme() === 'dark' ? 'text-white' : 'text-slate-900'">Select Facebook Pages</h2>
                    <p class="mt-1 text-xs" [ngClass]="theme() === 'dark' ? 'text-slate-400' : 'text-slate-500'">Choose the Facebook Pages you want to stream leads from.</p>
                  </div>
                  <span class="rounded-full px-3 py-1 text-xs font-medium"
                    [ngClass]="theme() === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'">
                    {{ selectedPageIds().length }} Selected
                  </span>
                </div>

                <!-- Page Cards List -->
                <div class="mt-6 grid gap-4">
                  @for (page of pages; track page.id) {
                    <div 
                      (click)="togglePageSelection(page.id)"
                      class="group relative flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition-all duration-200"
                      [ngClass]="{
                        'border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/5': selectedPageIds().includes(page.id),
                        'border-slate-800 bg-slate-950/40 hover:border-slate-700 hover:bg-slate-800/40': !selectedPageIds().includes(page.id) && theme() === 'dark',
                        'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50': !selectedPageIds().includes(page.id) && theme() === 'light'
                      }">
                      
                      <div class="flex items-center gap-4">
                        <img [src]="page.imageUrl" [alt]="page.name" class="h-12 w-12 rounded-xl object-cover ring-1 ring-slate-700/20" />
                        <div>
                          <div class="flex items-center gap-2">
                            <h3 class="text-sm font-bold" [ngClass]="theme() === 'dark' ? 'text-white' : 'text-slate-900'">{{ page.name }}</h3>
                            <span class="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-500 ring-1 ring-inset ring-emerald-500/20">
                              Connected
                            </span>
                          </div>
                          <p class="mt-0.5 text-xs" [ngClass]="theme() === 'dark' ? 'text-slate-400' : 'text-slate-500'">{{ page.category }} • {{ page.activeFormsCount }} Lead Forms available</p>
                        </div>
                      </div>

                      <div 
                        class="flex h-6 w-6 items-center justify-center rounded-lg border transition-all duration-200"
                        [ngClass]="{
                          'border-blue-500 bg-blue-600 text-white': selectedPageIds().includes(page.id),
                          'border-slate-700 bg-slate-800/50 text-transparent': !selectedPageIds().includes(page.id) && theme() === 'dark',
                          'border-slate-300 bg-slate-100 text-transparent': !selectedPageIds().includes(page.id) && theme() === 'light'
                        }">
                        ✓
                      </div>
                    </div>
                  }
                </div>

                <div class="mt-8 flex items-center justify-between border-t pt-6"
                  [ngClass]="theme() === 'dark' ? 'border-slate-800' : 'border-slate-200'">
                  <button type="button" (click)="previousStep()" 
                    class="rounded-xl border px-5 py-2.5 text-xs font-semibold transition-colors"
                    [ngClass]="theme() === 'dark' ? 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'">
                    Back
                  </button>
                  <button 
                    type="button" 
                    (click)="nextStep()" 
                    [disabled]="selectedPageIds().length === 0"
                    class="rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed">
                    Continue
                  </button>
                </div>
              </div>
            }

            <!-- STEP 4: SELECT FORMS -->
            @if (currentStep() === 4) {
              <div class="animate-fadeIn">
                <div class="flex items-center justify-between border-b pb-5"
                  [ngClass]="theme() === 'dark' ? 'border-slate-800' : 'border-slate-200'">
                  <div>
                    <h2 class="text-xl font-bold" [ngClass]="theme() === 'dark' ? 'text-white' : 'text-slate-900'">Select Lead Forms</h2>
                    <p class="mt-1 text-xs" [ngClass]="theme() === 'dark' ? 'text-slate-400' : 'text-slate-500'">Displaying forms associated with your selected Facebook Pages.</p>
                  </div>
                  <button type="button" (click)="selectAllForms()" class="text-xs font-semibold text-blue-500 hover:underline">
                    Select All
                  </button>
                </div>

                <div class="mt-6 space-y-3">
                  @for (form of filteredLeadForms(); track form.id) {
                    <label 
                      class="flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all duration-200"
                      [ngClass]="{
                        'border-blue-500 bg-blue-500/10': selectedFormIds().includes(form.id),
                        'border-slate-800 bg-slate-950/40 hover:border-slate-700': !selectedFormIds().includes(form.id) && theme() === 'dark',
                        'border-slate-200 bg-white hover:border-slate-300': !selectedFormIds().includes(form.id) && theme() === 'light'
                      }">
                      <div class="flex items-center gap-3">
                        <input 
                          type="checkbox" 
                          [checked]="selectedFormIds().includes(form.id)"
                          (change)="toggleFormSelection(form.id)"
                          class="h-4 w-4 rounded border-slate-700 bg-slate-800 text-blue-600 focus:ring-blue-500/20" />
                        <div>
                          <p class="text-sm font-semibold" [ngClass]="theme() === 'dark' ? 'text-white' : 'text-slate-900'">{{ form.name }}</p>
                          <p class="text-[11px] text-slate-400">Historical submissions: {{ form.leadsCount }}</p>
                        </div>
                      </div>
                      <span class="text-xs font-mono text-slate-400">ID: {{ form.id }}</span>
                    </label>
                  }
                </div>

                <div class="mt-8 flex items-center justify-between border-t pt-6"
                  [ngClass]="theme() === 'dark' ? 'border-slate-800' : 'border-slate-200'">
                  <button type="button" (click)="previousStep()" 
                    class="rounded-xl border px-5 py-2.5 text-xs font-semibold transition-colors"
                    [ngClass]="theme() === 'dark' ? 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'">
                    Back
                  </button>
                  <button 
                    type="button" 
                    (click)="nextStep()" 
                    [disabled]="selectedFormIds().length === 0"
                    class="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-xs font-semibold text-white shadow-lg shadow-blue-600/20 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed">
                    Continue
                  </button>
                </div>
              </div>
            }

            <!-- STEP 5: COMPLETION -->
            @if (currentStep() === 5) {
              <div class="text-center animate-fadeIn py-4">
                <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 ring-8 ring-emerald-500/5">
                  <svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>

                <h2 class="mt-6 text-3xl font-extrabold tracking-tight" [ngClass]="theme() === 'dark' ? 'text-white' : 'text-slate-900'">You're all set!</h2>
                <p class="mx-auto mt-3 max-w-md text-sm" [ngClass]="theme() === 'dark' ? 'text-slate-400' : 'text-slate-600'">
                  LeadOrbit is ready to receive your Facebook leads automatically.
                </p>

                <div class="mt-8 flex justify-center">
                  <a href="/dashboard"
                    type="button" 
                    (click)="goToDashboard()"
                    class="group inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:bg-emerald-400 active:scale-95">
                    <span>Go to Dashboard</span>
                    <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            }

          </div>
        </main>

        <!-- Footer -->
        <footer class="text-center text-xs" [ngClass]="theme() === 'dark' ? 'text-slate-600' : 'text-slate-400'">
          &copy; {{ currentYear }} LeadOrbit Inc. Encrypted end-to-end OAuth connection.
        </footer>
      </div>
    </div>
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `]
})
export class Onboarding {
  readonly currentYear = new Date().getFullYear();

  // Reactive theme state Signal ('dark' or 'light')
  theme = signal<'dark' | 'light'>('dark');

  // Logic signals state management
  currentStep = signal<number>(1);
  connectionState = signal<ConnectionState>('INITIAL');
  selectedPageIds = signal<string[]>([]);
  selectedFormIds = signal<string[]>(['form-1', 'form-2']);

  steps = [
    { number: 1, title: 'Welcome' },
    { number: 2, title: 'Facebook' },
    { number: 3, title: 'Pages' },
    { number: 4, title: 'Forms' },
    { number: 5, title: 'Complete' }
  ];

  pages: FacebookPage[] = [
    {
      id: 'page-1',
      name: 'Real Estate Holdings',
      category: 'Real Estate Company',
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=100&auto=format&fit=crop&q=80',
      isConnected: true,
      activeFormsCount: 3
    },
    {
      id: 'page-2',
      name: 'Apex Digital Agency',
      category: 'Marketing Agency',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&auto=format&fit=crop&q=80',
      isConnected: true,
      activeFormsCount: 1
    }
  ];

  leadForms: LeadForm[] = [
    { id: 'form-1', pageId: 'page-1', name: 'Property Enquiry', leadsCount: 142 },
    { id: 'form-2', pageId: 'page-1', name: 'Book a Site Visit', leadsCount: 89 },
    { id: 'form-3', pageId: 'page-1', name: 'Download Brochure', leadsCount: 310 },
    { id: 'form-4', pageId: 'page-2', name: 'Agency Consultation', leadsCount: 54 }
  ];

  filteredLeadForms = computed(() => {
    const pages = this.selectedPageIds();
    if (pages.length === 0) return this.leadForms;
    return this.leadForms.filter(f => pages.includes(f.pageId));
  });

  toggleTheme(): void {
    this.theme.update(current => (current === 'dark' ? 'light' : 'dark'));
  }

  nextStep(): void {
    if (this.currentStep() < 5) {
      this.currentStep.update(step => step + 1);
    }
  }

  previousStep(): void {
    if (this.currentStep() > 1) {
      this.currentStep.update(step => step - 1);
    }
  }

  initiateFacebookOAuth(): void {
    this.connectionState.set('CONNECTING');

    setTimeout(() => {
      this.connectionState.set('SUCCESS');
      
      setTimeout(() => {
        if (this.selectedPageIds().length === 0 && this.pages.length > 0) {
          this.selectedPageIds.set([this.pages[0].id]);
        }
        this.nextStep();
      }, 1000);
    }, 1500);
  }

  togglePageSelection(id: string): void {
    this.selectedPageIds.update(ids => 
      ids.includes(id) ? ids.filter(i => i !== id) : [...ids, id]
    );
  }

  toggleFormSelection(id: string): void {
    this.selectedFormIds.update(ids => 
      ids.includes(id) ? ids.filter(i => i !== id) : [...ids, id]
    );
  }

  selectAllForms(): void {
    const allIds = this.filteredLeadForms().map(f => f.id);
    this.selectedFormIds.set(allIds);
  }

  goToDashboard(): void {
    console.log('Navigating to dashboard with payload:', {
      pages: this.selectedPageIds(),
      forms: this.selectedFormIds()
    });
  }
}
