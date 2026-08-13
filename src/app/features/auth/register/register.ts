import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  template: `
    <div class="min-h-screen flex items-center justify-center bg-slate-50 px-4">

      <div class="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border border-slate-200">

        <h1 class="text-2xl font-bold text-slate-900">
          Create your account
        </h1>

        <p class="mt-2 text-sm text-slate-500">
          Create your LeadOrbit account to get started.
        </p>

        <form class="mt-8 space-y-5">

          <div>
            <label class="mb-2 block text-sm font-medium text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              class="w-full rounded-lg border border-slate-300 px-4 py-3
                     outline-none focus:border-blue-500
                     focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              class="w-full rounded-lg border border-slate-300 px-4 py-3
                     outline-none focus:border-blue-500
                     focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              class="w-full rounded-lg border border-slate-300 px-4 py-3
                     outline-none focus:border-blue-500
                     focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            class="w-full rounded-lg bg-blue-600 px-4 py-3
                   font-medium text-white transition
                   hover:bg-blue-700">
            Create Account
          </button>

        </form>

      </div>

    </div>
  `
})
export class Register {

}