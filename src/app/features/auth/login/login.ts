import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <div class="min-h-screen bg-slate-50 flex items-center justify-center px-4">

      <div class="w-full max-w-md">

        <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">

          <h1 class="text-2xl font-bold text-slate-900">
            Welcome to LeadOrbit
          </h1>

          <p class="mt-2 text-sm text-slate-500">
            Sign in to manage your leads.
          </p>

          <form class="mt-8 space-y-5">

            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                class="w-full rounded-lg border border-slate-300 px-4 py-3
                       outline-none focus:border-blue-500 focus:ring-2
                       focus:ring-blue-100"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                class="w-full rounded-lg border border-slate-300 px-4 py-3
                       outline-none focus:border-blue-500 focus:ring-2
                       focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              class="w-full rounded-lg bg-blue-600 px-4 py-3
                     font-medium text-white hover:bg-blue-700
                     transition">
              Login
            </button>

          </form>

        </div>

      </div>

    </div>
  `
})
export class Login {

}