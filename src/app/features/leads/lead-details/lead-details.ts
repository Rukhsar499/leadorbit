import { Component } from '@angular/core';

@Component({
  selector: 'app-lead-details',
  standalone: true,

  template: `

    <div class="min-h-full bg-slate-50 p-4 dark:bg-slate-950 sm:p-6 lg:p-8">

      <!-- Header -->

      <div class="mb-6">

        <button
          type="button"
          class="mb-4 inline-flex items-center gap-2
                 text-sm font-medium text-slate-500
                 transition hover:text-blue-600
                 dark:text-slate-400
                 dark:hover:text-blue-400">

          ← Back to Leads

        </button>

        <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div>

            <div class="flex items-center gap-3">

              <h1
                class="text-2xl font-bold
                       text-slate-900
                       dark:text-white">

                Lead Details

              </h1>

              <span
                class="rounded-full bg-blue-50
                       px-2.5 py-1 text-xs
                       font-semibold text-blue-600
                       dark:bg-blue-500/10
                       dark:text-blue-400">

                New

              </span>

            </div>

            <p
              class="mt-1 text-sm
                     text-slate-500
                     dark:text-slate-400">

              Lead ID: #125

            </p>

          </div>

        </div>

      </div>


      <!-- ================= INFORMATION ================= -->

      <div class="grid gap-5 lg:grid-cols-3">


        <!-- Lead Information -->

        <div
          class="rounded-2xl border
                 border-slate-200 bg-white p-5
                 dark:border-slate-800
                 dark:bg-slate-900
                 lg:col-span-2">

          <h2
            class="text-base font-semibold
                   text-slate-900
                   dark:text-white">

            Lead Information

          </h2>


          <div
            class="mt-5 grid gap-5
                   sm:grid-cols-2">

            <!-- Name -->

            <div>

              <p class="text-xs font-medium text-slate-400">
                Name
              </p>

              <p class="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                John Doe
              </p>

            </div>


            <!-- Phone -->

            <div>

              <p class="text-xs font-medium text-slate-400">
                Phone
              </p>

              <p class="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                +91 9876543210
              </p>

            </div>


            <!-- Email -->

            <div>

              <p class="text-xs font-medium text-slate-400">
                Email
              </p>

              <p class="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                john@example.com
              </p>

            </div>


            <!-- Lead ID -->

            <div>

              <p class="text-xs font-medium text-slate-400">
                Lead ID
              </p>

              <p class="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                #125
              </p>

            </div>

          </div>

        </div>


        <!-- Source -->

        <div
          class="rounded-2xl border
                 border-slate-200 bg-white p-5
                 dark:border-slate-800
                 dark:bg-slate-900">

          <h2
            class="text-base font-semibold
                   text-slate-900
                   dark:text-white">

            Source

          </h2>


          <div class="mt-5 space-y-4">

            <div>

              <p class="text-xs text-slate-400">
                Facebook Page
              </p>

              <p class="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                LeadOrbit Official
              </p>

            </div>


            <div>

              <p class="text-xs text-slate-400">
                Lead Form
              </p>

              <p class="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                Website Enquiry
              </p>

            </div>


            <div>

              <p class="text-xs text-slate-400">
                Campaign
              </p>

              <p class="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                Summer Campaign
              </p>

            </div>


            <div>

              <p class="text-xs text-slate-400">
                Ad Set
              </p>

              <p class="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                Bangalore Audience
              </p>

            </div>


            <div>

              <p class="text-xs text-slate-400">
                Ad
              </p>

              <p class="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                Lead Generation Ad
              </p>

            </div>

          </div>

        </div>

      </div>


      <!-- ================= TIMELINE ================= -->

      <div
        class="mt-5 rounded-2xl border
               border-slate-200 bg-white p-5
               dark:border-slate-800
               dark:bg-slate-900">

        <h2
          class="text-base font-semibold
                 text-slate-900
                 dark:text-white">

          Lead Timeline

        </h2>


        <div class="relative mt-6">


          <!-- Event -->

          <div class="relative flex gap-4 pb-8">

            <div
              class="relative z-10 flex h-9 w-9
                     shrink-0 items-center
                     justify-center rounded-full
                     bg-blue-100 text-blue-600
                     dark:bg-blue-500/10
                     dark:text-blue-400">

              ✓

            </div>

            <div>

              <p class="text-sm font-semibold text-slate-900 dark:text-white">
                Lead Created
              </p>

              <p class="mt-1 text-xs text-slate-400">
                13 Aug 2026, 10:30 AM
              </p>

            </div>

          </div>


          <!-- Event -->

          <div class="relative flex gap-4 pb-8">

            <div
              class="relative z-10 flex h-9 w-9
                     shrink-0 items-center
                     justify-center rounded-full
                     bg-purple-100 text-purple-600
                     dark:bg-purple-500/10
                     dark:text-purple-400">

              ↓

            </div>

            <div>

              <p class="text-sm font-semibold text-slate-900 dark:text-white">
                Received by LeadOrbit
              </p>

              <p class="mt-1 text-xs text-slate-400">
                13 Aug 2026, 10:30 AM
              </p>

            </div>

          </div>


          <!-- Event -->

          <div class="relative flex gap-4 pb-8">

            <div
              class="relative z-10 flex h-9 w-9
                     shrink-0 items-center
                     justify-center rounded-full
                     bg-green-100 text-green-600
                     dark:bg-green-500/10
                     dark:text-green-400">

              ✓

            </div>

            <div>

              <p class="text-sm font-semibold text-slate-900 dark:text-white">
                Webhook Delivered
              </p>

              <p class="mt-1 text-xs text-slate-400">
                13 Aug 2026, 10:31 AM
              </p>

            </div>

          </div>


          <!-- Event -->

          <div class="relative flex gap-4">

            <div
              class="relative z-10 flex h-9 w-9
                     shrink-0 items-center
                     justify-center rounded-full
                     bg-yellow-100 text-yellow-600
                     dark:bg-yellow-500/10
                     dark:text-yellow-400">

              ↻

            </div>

            <div>

              <p class="text-sm font-semibold text-slate-900 dark:text-white">
                Status Changed
              </p>

              <p class="mt-1 text-xs text-slate-400">
                13 Aug 2026, 11:15 AM
              </p>

            </div>

          </div>


        </div>

      </div>

    </div>

  `
})
export class LeadDetails {}