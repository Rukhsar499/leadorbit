import { Component } from '@angular/core';

@Component({
  selector: 'app-leads',
  standalone: true,

  template: `

    <div class="min-h-full bg-slate-50 p-4 dark:bg-slate-950 sm:p-6 lg:p-8">

      <!-- ================= HEADER ================= -->

      <div class="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>

          <h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Leads
          </h1>

          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage and track all your leads
          </p>

        </div>

        <button
          type="button"
          class="inline-flex items-center justify-center gap-2
                 rounded-xl bg-blue-600 px-4 py-2.5
                 text-sm font-semibold text-white
                 shadow-lg shadow-blue-500/20
                 transition-all
                 hover:-translate-y-0.5
                 hover:bg-blue-700">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="h-4 w-4">

            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4v16m8-8H4" />

          </svg>

          Add Lead

        </button>

      </div>


      <!-- ================= SEARCH + FILTERS ================= -->

      <div
        class="mb-5 rounded-2xl border
               border-slate-200 bg-white p-4
               dark:border-slate-800
               dark:bg-slate-900">

        <div class="grid gap-3 lg:grid-cols-5">

          <!-- Search -->

          <div class="relative lg:col-span-2">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.8"
              stroke="currentColor"
              class="absolute left-3 top-1/2 h-4 w-4
                     -translate-y-1/2 text-slate-400">

              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-4.35-4.35m2.1-5.4a7.5
                   7.5 0 1 1-15 0 7.5 7.5
                   0 0 1 15 0Z" />

            </svg>

            <input
              type="text"
              placeholder="Search by name, phone, email or Lead ID..."
              class="h-11 w-full rounded-xl border
                     border-slate-200 bg-slate-50
                     pl-10 pr-4 text-sm text-slate-900
                     outline-none transition
                     focus:border-blue-500
                     focus:ring-4 focus:ring-blue-500/10
                     dark:border-slate-700
                     dark:bg-slate-800
                     dark:text-white
                     dark:placeholder:text-slate-500"
            />

          </div>


          <!-- Date -->

          <select
            class="h-11 rounded-xl border
                   border-slate-200 bg-slate-50 px-3
                   text-sm text-slate-600 outline-none
                   focus:border-blue-500
                   dark:border-slate-700
                   dark:bg-slate-800
                   dark:text-slate-300">

            <option value="">Date</option>
            <option value="today">Today</option>
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>

          </select>


          <!-- Facebook Page -->

          <select
            class="h-11 rounded-xl border
                   border-slate-200 bg-slate-50 px-3
                   text-sm text-slate-600 outline-none
                   focus:border-blue-500
                   dark:border-slate-700
                   dark:bg-slate-800
                   dark:text-slate-300">

            <option value="">Facebook Page</option>
            <option value="page1">Page One</option>
            <option value="page2">Page Two</option>

          </select>


          <!-- Status -->

          <select
            class="h-11 rounded-xl border
                   border-slate-200 bg-slate-50 px-3
                   text-sm text-slate-600 outline-none
                   focus:border-blue-500
                   dark:border-slate-700
                   dark:bg-slate-800
                   dark:text-slate-300">

            <option value="">Status</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="qualified">Qualified</option>
            <option value="converted">Converted</option>
            <option value="lost">Lost</option>

          </select>

        </div>

      </div>


      <!-- ================= BULK ACTIONS ================= -->

      <div
        class="mb-4 flex flex-col gap-3
               sm:flex-row sm:items-center
               sm:justify-between">

        <div class="flex items-center gap-2">

          <button
            type="button"
            class="rounded-lg border border-slate-200
                   bg-white px-3 py-2 text-xs
                   font-medium text-slate-600
                   transition hover:bg-slate-50
                   dark:border-slate-700
                   dark:bg-slate-900
                   dark:text-slate-300
                   dark:hover:bg-slate-800">

            Change Status

          </button>

          <button
            type="button"
            class="rounded-lg border border-slate-200
                   bg-white px-3 py-2 text-xs
                   font-medium text-slate-600
                   transition hover:bg-slate-50
                   dark:border-slate-700
                   dark:bg-slate-900
                   dark:text-slate-300
                   dark:hover:bg-slate-800">

            Export

          </button>

          <button
            type="button"
            class="rounded-lg border border-red-200
                   bg-white px-3 py-2 text-xs
                   font-medium text-red-500
                   transition hover:bg-red-50
                   dark:border-red-900/50
                   dark:bg-slate-900
                   dark:hover:bg-red-500/10">

            Delete

          </button>

        </div>

        <p class="text-sm text-slate-500 dark:text-slate-400">
          0 leads found
        </p>

      </div>


      <!-- ================= LEAD TABLE ================= -->

      <div
        class="overflow-hidden rounded-2xl border
               border-slate-200 bg-white
               dark:border-slate-800
               dark:bg-slate-900">

        <div class="overflow-x-auto">

          <table class="w-full min-w-[1100px]">

            <thead
              class="border-b border-slate-200
                     bg-slate-50
                     dark:border-slate-800
                     dark:bg-slate-800/50">

              <tr>

                <th class="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    class="h-4 w-4 rounded border-slate-300"
                  />
                </th>

                <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Name
                </th>

                <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Phone
                </th>

                <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Email
                </th>

                <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Facebook Page
                </th>

                <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Lead Form
                </th>

                <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Campaign
                </th>

                <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Status
                </th>

                <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Created At
                </th>

                <th class="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Actions
                </th>

              </tr>

            </thead>


            <tbody>

              <!-- Empty State -->

              <tr>

                <td
                  colspan="10"
                  class="px-6 py-16 text-center">

                  <div class="mx-auto max-w-sm">

                    <div
                      class="mx-auto flex h-14 w-14
                             items-center justify-center
                             rounded-2xl bg-blue-50
                             text-blue-600
                             dark:bg-blue-500/10
                             dark:text-blue-400">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-7 w-7">

                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 19.128a9.38 9.38
                             0 0 0 2.625.372 9.337
                             9.337 0 0 0 4.121-.952
                             4.125 4.125 0 0 0-7.533-2.493
                             M15 19.128v-.003c0-1.113-.285-2.16
                             -.786-3.07M15 19.128v.106A12.318
                             12.318 0 0 1 8.624 21c-2.331
                             0-4.512-.645-6.374-1.766l-.001
                             -.109a6.375 6.375 0 0 1 11.964-3.07
                             M12 6.375a3.375 3.375 0 1 1-6.75
                             0 3.375 3.375 0 0 1 6.75 0Zm8.25
                             2.25a2.625 2.625 0 1 1-5.25
                             0 2.625 2.625 0 0 1 5.25 0Z" />

                      </svg>

                    </div>

                    <h3
                      class="mt-4 text-sm font-semibold
                             text-slate-900
                             dark:text-white">

                      No leads found

                    </h3>

                    <p
                      class="mt-1 text-sm
                             text-slate-500
                             dark:text-slate-400">

                      Your leads will appear here when they are received.

                    </p>

                  </div>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  `
})
export class Leads {}