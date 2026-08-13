import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div class="min-h-screen bg-slate-50">

      <!-- Header -->
      <header class="border-b border-slate-200 bg-white">
        <div class="flex items-center justify-between px-6 py-4">

          <div>
            <h1 class="text-xl font-bold text-slate-900">
              Dashboard
            </h1>

            <p class="mt-1 text-sm text-slate-500">
              Welcome back to LeadOrbit
            </p>
          </div>

          <div
            class="flex h-10 w-10 items-center justify-center
                   rounded-full bg-blue-100 font-semibold text-blue-600">
            R
          </div>

        </div>
      </header>

      <!-- Main Content -->
      <main class="p-6">

        <!-- KPI Cards -->
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-sm text-slate-500">
              Total Leads
            </p>

            <h2 class="mt-2 text-3xl font-bold text-slate-900">
              1,248
            </h2>

            <p class="mt-2 text-sm text-green-600">
              +12.5% this month
            </p>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-sm text-slate-500">
              New Leads
            </p>

            <h2 class="mt-2 text-3xl font-bold text-slate-900">
              186
            </h2>

            <p class="mt-2 text-sm text-green-600">
              +8.2% this week
            </p>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-sm text-slate-500">
              Conversion Rate
            </p>

            <h2 class="mt-2 text-3xl font-bold text-slate-900">
              24.8%
            </h2>

            <p class="mt-2 text-sm text-green-600">
              +3.4% this month
            </p>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-sm text-slate-500">
              Connected Pages
            </p>

            <h2 class="mt-2 text-3xl font-bold text-slate-900">
              4
            </h2>

            <p class="mt-2 text-sm text-slate-500">
              Facebook Pages
            </p>
          </div>

        </div>

        <!-- Recent Leads -->
        <div class="mt-6 rounded-xl border border-slate-200 bg-white shadow-sm">

          <div class="flex items-center justify-between border-b border-slate-200 px-6 py-4">

            <div>
              <h2 class="font-semibold text-slate-900">
                Recent Leads
              </h2>

              <p class="mt-1 text-sm text-slate-500">
                Latest leads received from your connected sources
              </p>
            </div>

            <button
              class="rounded-lg bg-blue-600 px-4 py-2 text-sm
                     font-medium text-white transition
                     hover:bg-blue-700">
              View All
            </button>

          </div>

          <div class="overflow-x-auto">

            <table class="w-full text-left text-sm">

              <thead class="bg-slate-50 text-slate-500">
                <tr>
                  <th class="px-6 py-3 font-medium">Name</th>
                  <th class="px-6 py-3 font-medium">Email</th>
                  <th class="px-6 py-3 font-medium">Source</th>
                  <th class="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>

              <tbody class="divide-y divide-slate-100">

                <tr>
                  <td class="px-6 py-4 font-medium text-slate-900">
                    Rahul Sharma
                  </td>

                  <td class="px-6 py-4 text-slate-500">
                    rahul@example.com
                  </td>

                  <td class="px-6 py-4 text-slate-500">
                    Facebook
                  </td>

                  <td class="px-6 py-4">
                    <span
                      class="rounded-full bg-green-100 px-3 py-1
                             text-xs font-medium text-green-700">
                      New
                    </span>
                  </td>
                </tr>

                <tr>
                  <td class="px-6 py-4 font-medium text-slate-900">
                    Priya Singh
                  </td>

                  <td class="px-6 py-4 text-slate-500">
                    priya@example.com
                  </td>

                  <td class="px-6 py-4 text-slate-500">
                    Facebook
                  </td>

                  <td class="px-6 py-4">
                    <span
                      class="rounded-full bg-yellow-100 px-3 py-1
                             text-xs font-medium text-yellow-700">
                      Contacted
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </main>

    </div>
  `
})
export class Dashboard {

}