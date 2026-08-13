import { Component } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  template: `
    <div class="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">

      <div class="mx-auto max-w-4xl">

        <!-- Logo / Brand -->
        <div class="mb-8 text-center">
          <h1 class="text-2xl font-bold text-slate-900">
            LeadOrbit
          </h1>

          <p class="mt-1 text-sm text-slate-500">
            Let's get your account ready
          </p>
        </div>

        <!-- Progress -->
        <div class="mb-8 rounded-xl border border-slate-200 bg-white p-5">

          <div class="flex items-center justify-between">

            @for (step of steps; track step.number) {

              <div class="flex items-center">

                <div
                  class="flex h-9 w-9 items-center justify-center rounded-full
                    text-sm font-semibold transition"
                  [class.bg-blue-600]="currentStep >= step.number"
                  [class.text-white]="currentStep >= step.number"
                  [class.bg-slate-100]="currentStep < step.number"
                  [class.text-slate-500]="currentStep < step.number">

                  @if (currentStep > step.number) {
                    ✓
                  } @else {
                    {{ step.number }}
                  }

                </div>

                <span
                  class="ml-2 hidden text-sm font-medium sm:block"
                  [class.text-slate-900]="currentStep >= step.number"
                  [class.text-slate-400]="currentStep < step.number">

                  {{ step.title }}

                </span>

              </div>

              @if (!$last) {
                <div
                  class="mx-2 h-px flex-1"
                  [class.bg-blue-600]="currentStep > step.number"
                  [class.bg-slate-200]="currentStep <= step.number">
                </div>
              }

            }

          </div>

        </div>

        <!-- Main Card -->
        <div class="rounded-2xl border border-slate-200 bg-white shadow-sm">

          <!-- STEP 1 -->
          @if (currentStep === 1) {

            <div class="px-6 py-10 text-center sm:px-10">

              <div
                class="mx-auto flex h-16 w-16 items-center justify-center
                       rounded-2xl bg-blue-100 text-2xl">
                👋
              </div>

              <h2 class="mt-6 text-2xl font-bold text-slate-900">
                Welcome to LeadOrbit
              </h2>

              <p class="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
                Connect your Facebook account and start receiving your
                leads in one place.
              </p>

              <button
                type="button"
                (click)="nextStep()"
                class="mt-8 rounded-lg bg-blue-600 px-6 py-3
                       text-sm font-semibold text-white
                       transition hover:bg-blue-700">

                Get Started

              </button>

            </div>

          }

          <!-- STEP 2 -->
          @if (currentStep === 2) {

            <div class="px-6 py-10 sm:px-10">

              <div class="text-center">

                <div
                  class="mx-auto flex h-16 w-16 items-center justify-center
                         rounded-2xl bg-blue-100 text-2xl">
                  f
                </div>

                <h2 class="mt-5 text-2xl font-bold text-slate-900">
                  Connect Facebook
                </h2>

                <p class="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
                  Connect your Facebook account to access your Pages
                  and Lead Forms.
                </p>

              </div>

              <div class="mx-auto mt-8 max-w-md">

                <button
                  type="button"
                  (click)="connectFacebook()"
                  class="flex w-full items-center justify-center gap-3
                         rounded-lg bg-blue-600 px-5 py-3
                         text-sm font-semibold text-white
                         transition hover:bg-blue-700">

                  <span class="text-lg font-bold">f</span>

                  Connect with Facebook

                </button>

                @if (facebookConnected) {

                  <div
                    class="mt-4 rounded-lg bg-green-50 p-4
                           text-center text-sm text-green-700">

                    ✓ Facebook account connected successfully.

                  </div>

                }

              </div>

            </div>

          }

          <!-- STEP 3 -->
          @if (currentStep === 3) {

            <div class="px-6 py-10 sm:px-10">

              <h2 class="text-xl font-bold text-slate-900">
                Select Facebook Pages
              </h2>

              <p class="mt-2 text-sm text-slate-500">
                Select the Pages from which you want to receive leads.
              </p>

              <div class="mt-6 space-y-3">

                @for (page of pages; track page.id) {

                  <button
                    type="button"
                    (click)="togglePage(page.id)"
                    class="flex w-full items-center justify-between
                           rounded-xl border p-4 text-left transition"
                    [class.border-blue-500]="selectedPages.includes(page.id)"
                    [class.bg-blue-50]="selectedPages.includes(page.id)"
                    [class.border-slate-200]="!selectedPages.includes(page.id)">

                    <div>

                      <p class="font-medium text-slate-900">
                        {{ page.name }}
                      </p>

                      <p class="mt-1 text-xs text-slate-500">
                        {{ page.category }}
                      </p>

                    </div>

                    <div
                      class="flex h-5 w-5 items-center justify-center
                             rounded border"
                      [class.bg-blue-600]="selectedPages.includes(page.id)"
                      [class.border-blue-600]="selectedPages.includes(page.id)"
                      [class.text-white]="selectedPages.includes(page.id)">

                      @if (selectedPages.includes(page.id)) {
                        ✓
                      }

                    </div>

                  </button>

                }

              </div>

              <div class="mt-8 flex justify-between">

                <button
                  type="button"
                  (click)="previousStep()"
                  class="rounded-lg border border-slate-300 px-5 py-2.5
                         text-sm font-medium text-slate-700
                         hover:bg-slate-50">

                  Back

                </button>

                <button
                  type="button"
                  (click)="nextStep()"
                  [disabled]="selectedPages.length === 0"
                  class="rounded-lg bg-blue-600 px-5 py-2.5
                         text-sm font-semibold text-white
                         hover:bg-blue-700
                         disabled:cursor-not-allowed
                         disabled:opacity-50">

                  Continue

                </button>

              </div>

            </div>

          }

          <!-- STEP 4 -->
          @if (currentStep === 4) {

            <div class="px-6 py-10 sm:px-10">

              <h2 class="text-xl font-bold text-slate-900">
                Select Lead Forms
              </h2>

              <p class="mt-2 text-sm text-slate-500">
                Choose the Lead Forms you want LeadOrbit to monitor.
              </p>

              <div class="mt-6 space-y-3">

                @for (form of leadForms; track form.id) {

                  <button
                    type="button"
                    (click)="toggleForm(form.id)"
                    class="flex w-full items-center justify-between
                           rounded-xl border p-4 text-left transition"
                    [class.border-blue-500]="selectedForms.includes(form.id)"
                    [class.bg-blue-50]="selectedForms.includes(form.id)"
                    [class.border-slate-200]="!selectedForms.includes(form.id)">

                    <div>

                      <p class="font-medium text-slate-900">
                        {{ form.name }}
                      </p>

                      <p class="mt-1 text-xs text-slate-500">
                        {{ form.page }}
                      </p>

                    </div>

                    <div
                      class="flex h-5 w-5 items-center justify-center
                             rounded border"
                      [class.bg-blue-600]="selectedForms.includes(form.id)"
                      [class.border-blue-600]="selectedForms.includes(form.id)"
                      [class.text-white]="selectedForms.includes(form.id)">

                      @if (selectedForms.includes(form.id)) {
                        ✓
                      }

                    </div>

                  </button>

                }

              </div>

              <div class="mt-8 flex justify-between">

                <button
                  type="button"
                  (click)="previousStep()"
                  class="rounded-lg border border-slate-300 px-5 py-2.5
                         text-sm font-medium text-slate-700">

                  Back

                </button>

                <button
                  type="button"
                  (click)="nextStep()"
                  [disabled]="selectedForms.length === 0"
                  class="rounded-lg bg-blue-600 px-5 py-2.5
                         text-sm font-semibold text-white
                         hover:bg-blue-700
                         disabled:cursor-not-allowed
                         disabled:opacity-50">

                  Continue

                </button>

              </div>

            </div>

          }

          <!-- STEP 5 -->
          @if (currentStep === 5) {

            <div class="px-6 py-12 text-center sm:px-10">

              <div
                class="mx-auto flex h-16 w-16 items-center justify-center
                       rounded-full bg-green-100 text-2xl text-green-600">
                ✓
              </div>

              <h2 class="mt-6 text-2xl font-bold text-slate-900">
                You're all set!
              </h2>

              <p class="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
                Your LeadOrbit account is ready. You can now start
                managing your leads.
              </p>

              <button
                type="button"
                (click)="goToDashboard()"
                class="mt-8 rounded-lg bg-blue-600 px-6 py-3
                       text-sm font-semibold text-white
                       hover:bg-blue-700">

                Go to Dashboard

              </button>

            </div>

          }

        </div>

      </div>

    </div>
  `
})
export class Onboarding {

  currentStep = 1;

  facebookConnected = false;

  selectedPages: number[] = [];

  selectedForms: number[] = [];

  steps = [
    {
      number: 1,
      title: 'Welcome'
    },
    {
      number: 2,
      title: 'Facebook'
    },
    {
      number: 3,
      title: 'Pages'
    },
    {
      number: 4,
      title: 'Forms'
    },
    {
      number: 5,
      title: 'Complete'
    }
  ];

  pages = [
    {
      id: 1,
      name: 'LeadOrbit Demo',
      category: 'Software Company'
    },
    {
      id: 2,
      name: 'Marketing Page',
      category: 'Marketing Agency'
    },
    {
      id: 3,
      name: 'Business Page',
      category: 'Business'
    }
  ];

  leadForms = [
    {
      id: 1,
      name: 'Website Enquiry',
      page: 'LeadOrbit Demo'
    },
    {
      id: 2,
      name: 'Get Started Form',
      page: 'Marketing Page'
    },
    {
      id: 3,
      name: 'Contact Us',
      page: 'Business Page'
    }
  ];

  nextStep(): void {
    if (this.currentStep < 5) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  connectFacebook(): void {
    // Real Facebook OAuth will be connected here later.
    this.facebookConnected = true;

    setTimeout(() => {
      this.nextStep();
    }, 500);
  }

  togglePage(pageId: number): void {
    if (this.selectedPages.includes(pageId)) {
      this.selectedPages = this.selectedPages.filter(id => id !== pageId);
    } else {
      this.selectedPages = [...this.selectedPages, pageId];
    }
  }

  toggleForm(formId: number): void {
    if (this.selectedForms.includes(formId)) {
      this.selectedForms = this.selectedForms.filter(id => id !== formId);
    } else {
      this.selectedForms = [...this.selectedForms, formId];
    }
  }

  goToDashboard(): void {
    // Dashboard navigation will be added with Router.
    console.log('Navigate to dashboard');
  }
}