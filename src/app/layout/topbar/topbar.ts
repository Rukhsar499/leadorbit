import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-topbar',
  standalone: true,

  template: `
    <header
      class="sticky top-0 z-40 flex h-[72px] items-center
             justify-between gap-4 border-b border-slate-200/80
             bg-white/90 px-4 backdrop-blur-xl
             transition-colors duration-300
             dark:border-slate-800/80
             dark:bg-slate-950/90
             sm:px-6 lg:px-8">

      <!-- ================= LEFT ================= -->
      <div class="flex min-w-0 items-center gap-4">

        <!-- Brand -->
        <div class="hidden sm:block">
          <div class="flex items-center gap-2.5">

            <!-- Logo -->
            <div
              class="flex h-9 w-9 shrink-0 items-center justify-center
                     rounded-xl bg-gradient-to-br from-blue-600
                     to-indigo-600 text-white shadow-lg
                     shadow-blue-500/20">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="h-5 w-5">

                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 13.5 8.5 8l4 4L21 3.5" />

                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 9V3h-6" />

              </svg>

            </div>

            <div>
              <h1
                class="text-sm font-bold tracking-tight
                       text-slate-900 dark:text-white">

                LeadOrbit

              </h1>

              <p
                class="text-[11px] font-medium
                       text-slate-400 dark:text-slate-500">

                Lead Management

              </p>
            </div>

          </div>
        </div>


        <!-- Mobile Brand -->
        <div class="sm:hidden">

          <div
            class="flex h-9 w-9 items-center justify-center
                   rounded-xl bg-gradient-to-br from-blue-600
                   to-indigo-600 text-white shadow-lg
                   shadow-blue-500/20">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="h-5 w-5">

              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 13.5 8.5 8l4 4L21 3.5" />

              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 9V3h-6" />

            </svg>

          </div>

        </div>


        <!-- Search -->
        <div class="hidden md:block">

          <div class="relative w-56 lg:w-72">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.8"
              stroke="currentColor"
              class="pointer-events-none absolute left-3
                     top-1/2 h-4 w-4 -translate-y-1/2
                     text-slate-400 dark:text-slate-500">

              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-4.35-4.35m2.1-5.4a7.5
                   7.5 0 1 1-15 0 7.5 7.5
                   0 0 1 15 0Z" />

            </svg>

            <input
              type="text"
              placeholder="Search leads..."
              class="h-10 w-full rounded-xl border
                     border-slate-200 bg-slate-50
                     pl-10 pr-12 text-sm text-slate-800
                     outline-none transition-all
                     placeholder:text-slate-400
                     focus:border-blue-400
                     focus:bg-white
                     focus:ring-4
                     focus:ring-blue-500/10
                     dark:border-slate-700
                     dark:bg-slate-900
                     dark:text-white
                     dark:placeholder:text-slate-500
                     dark:focus:border-blue-500
                     dark:focus:bg-slate-900"
            />

            <span
              class="absolute right-2.5 top-1/2
                     hidden -translate-y-1/2 rounded-md
                     border border-slate-200 bg-white
                     px-1.5 py-0.5 text-[10px] font-medium
                     text-slate-400 lg:block
                     dark:border-slate-700
                     dark:bg-slate-800">

              ⌘ K

            </span>

          </div>

        </div>

      </div>


      <!-- ================= RIGHT ================= -->
      <div class="flex items-center gap-1.5 sm:gap-2">


        <!-- Mobile Search -->
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center
                 rounded-xl text-slate-500 transition-all
                 hover:bg-slate-100 hover:text-slate-900
                 dark:text-slate-400
                 dark:hover:bg-slate-800
                 dark:hover:text-white md:hidden">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="h-5 w-5">

            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-4.35-4.35m2.1-5.4a7.5
                 7.5 0 1 1-15 0 7.5 7.5
                 0 0 1 15 0Z" />

          </svg>

        </button>


        <!-- ================= THEME ================= -->
        <button
          type="button"
          (click)="theme.toggle()"
          [attr.aria-label]="theme.isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
          class="group flex h-10 w-10 items-center
                 justify-center rounded-xl border
                 border-slate-200 bg-white
                 text-slate-500 transition-all
                 duration-200
                 hover:-translate-y-0.5
                 hover:border-blue-200
                 hover:bg-blue-50
                 hover:text-blue-600
                 dark:border-slate-700
                 dark:bg-slate-900
                 dark:text-slate-400
                 dark:hover:border-slate-600
                 dark:hover:bg-slate-800
                 dark:hover:text-yellow-400">

          @if (theme.isDark()) {

            <!-- Sun -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.8"
              stroke="currentColor"
              class="h-5 w-5 transition-transform
                     duration-300 group-hover:rotate-45">

              <circle
                cx="12"
                cy="12"
                r="3.5" />

              <path
                stroke-linecap="round"
                d="M12 2v2M12 20v2M4.93 4.93l1.42
                   1.42M17.65 17.65l1.42 1.42M2
                   12h2M20 12h2M4.93 19.07l1.42-1.42
                   M17.65 6.35l1.42-1.42" />

            </svg>

          } @else {

            <!-- Moon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.8"
              stroke="currentColor"
              class="h-5 w-5 transition-transform
                     duration-300 group-hover:-rotate-12">

              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12.79A9 9 0 1 1
                   11.21 3 7 7 0 0 0
                   21 12.79Z" />

            </svg>

          }

        </button>


        <!-- ================= NOTIFICATION ================= -->
        <div class="relative">

          <button
            type="button"
            (click)="toggleNotifications()"
            class="group relative flex h-10 w-10
                   items-center justify-center
                   rounded-xl border
                   border-slate-200 bg-white
                   text-slate-500 transition-all
                   duration-200
                   hover:-translate-y-0.5
                   hover:border-blue-200
                   hover:bg-blue-50
                   hover:text-blue-600
                   dark:border-slate-700
                   dark:bg-slate-900
                   dark:text-slate-400
                   dark:hover:bg-slate-800
                   dark:hover:text-white">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.8"
              stroke="currentColor"
              class="h-5 w-5">

              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848
                   23.848 0 0 0 5.454-1.31
                   A8.967 8.967 0 0 1
                   18 9.75V9a6 6 0 0 0-12
                   0v.75a8.967 8.967 0 0
                   1-2.312 6.022c1.733.64
                   3.56 1.085 5.455 1.31
                   m5.714 0a24.255 24.255
                   0 0 1-5.714 0
                   m5.714 0a3 3 0 1 1-5.714 0" />

            </svg>

            <!-- Notification Badge -->
            <span
              class="absolute right-1.5 top-1.5
                     h-2 w-2 rounded-full
                     bg-red-500 ring-2 ring-white
                     dark:ring-slate-900">
            </span>

          </button>


          <!-- Notification Dropdown -->
          @if (notificationsOpen) {

            <div
              class="absolute right-0 top-12 z-50 w-80
                     overflow-hidden rounded-2xl border
                     border-slate-200 bg-white shadow-2xl
                     shadow-slate-900/10
                     dark:border-slate-700
                     dark:bg-slate-900
                     dark:shadow-black/30">

              <div
                class="flex items-center justify-between
                       border-b border-slate-100 px-4 py-3
                       dark:border-slate-800">

                <div>
                  <h3
                    class="text-sm font-semibold
                           text-slate-900 dark:text-white">

                    Notifications

                  </h3>

                  <p
                    class="text-xs text-slate-400
                           dark:text-slate-500">

                    You have 3 new notifications

                  </p>
                </div>

                <button
                  type="button"
                  class="text-xs font-medium text-blue-600
                         hover:text-blue-700">

                  Mark all read

                </button>

              </div>


              <!-- Notification 1 -->
              <div
                class="flex gap-3 border-b
                       border-slate-100 px-4 py-3
                       transition hover:bg-slate-50
                       dark:border-slate-800
                       dark:hover:bg-slate-800/60">

                <div
                  class="flex h-9 w-9 shrink-0
                         items-center justify-center
                         rounded-xl bg-blue-100
                         text-blue-600
                         dark:bg-blue-500/10
                         dark:text-blue-400">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.8"
                    stroke="currentColor"
                    class="h-4 w-4">

                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 8a6 6 0 0 0-12
                         0c0 7-3 7-3 9h18c0-2-3-2-3-9" />

                  </svg>

                </div>

                <div>
                  <p
                    class="text-sm font-medium
                           text-slate-800
                           dark:text-slate-200">

                    New lead received

                  </p>

                  <p
                    class="mt-0.5 text-xs
                           text-slate-400">

                    2 minutes ago

                  </p>
                </div>

              </div>


              <!-- Notification 2 -->
              <div
                class="flex gap-3 border-b
                       border-slate-100 px-4 py-3
                       transition hover:bg-slate-50
                       dark:border-slate-800
                       dark:hover:bg-slate-800/60">

                <div
                  class="flex h-9 w-9 shrink-0
                         items-center justify-center
                         rounded-xl bg-green-100
                         text-green-600
                         dark:bg-green-500/10
                         dark:text-green-400">

                  ✓

                </div>

                <div>
                  <p
                    class="text-sm font-medium
                           text-slate-800
                           dark:text-slate-200">

                    Facebook connected

                  </p>

                  <p
                    class="mt-0.5 text-xs
                           text-slate-400">

                    1 hour ago

                  </p>
                </div>

              </div>


              <!-- Notification 3 -->
              <div
                class="flex gap-3 px-4 py-3
                       transition hover:bg-slate-50
                       dark:hover:bg-slate-800/60">

                <div
                  class="flex h-9 w-9 shrink-0
                         items-center justify-center
                         rounded-xl bg-purple-100
                         text-purple-600
                         dark:bg-purple-500/10
                         dark:text-purple-400">

                  ↗

                </div>

                <div>
                  <p
                    class="text-sm font-medium
                           text-slate-800
                           dark:text-slate-200">

                    Lead sync completed

                  </p>

                  <p
                    class="mt-0.5 text-xs
                           text-slate-400">

                    Yesterday

                  </p>
                </div>

              </div>


              <div
                class="border-t border-slate-100 p-2
                       dark:border-slate-800">

                <button
                  type="button"
                  class="w-full rounded-lg py-2
                         text-center text-xs
                         font-semibold text-blue-600
                         transition hover:bg-blue-50
                         dark:hover:bg-blue-500/10">

                  View all notifications

                </button>

              </div>

            </div>

          }

        </div>


        <!-- Divider -->
        <div
          class="mx-1 hidden h-8 w-px bg-slate-200
                 dark:bg-slate-700 sm:block">
        </div>


        <!-- ================= PROFILE ================= -->
        <div class="relative">

          <button
            type="button"
            (click)="toggleProfile()"
            class="group flex items-center gap-2
                   rounded-xl p-1.5 transition-all
                   duration-200
                   hover:bg-slate-100
                   dark:hover:bg-slate-800">

            <!-- Avatar -->
            <div
              class="flex h-9 w-9 items-center
                     justify-center rounded-xl
                     bg-gradient-to-br from-blue-500
                     via-indigo-500 to-purple-600
                     text-sm font-bold text-white
                     shadow-md shadow-blue-500/20
                     transition-transform duration-200
                     group-hover:scale-105">

              R

            </div>


            <!-- User Info -->
            <div class="hidden text-left md:block">

              <p
                class="text-sm font-semibold
                       text-slate-800 dark:text-white">

                Rukhsar

              </p>

              <p
                class="text-[11px] font-medium
                       text-slate-400 dark:text-slate-500">

                Administrator

              </p>

            </div>


            <!-- Chevron -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="hidden h-4 w-4
                     text-slate-400 transition-transform
                     duration-200 md:block"
              [class.rotate-180]="profileOpen">

              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m6 9 6 6 6-6" />

            </svg>

          </button>


          <!-- Profile Dropdown -->
          @if (profileOpen) {

            <div
              class="absolute right-0 top-12 z-50 w-64
                     overflow-hidden rounded-2xl border
                     border-slate-200 bg-white shadow-2xl
                     shadow-slate-900/10
                     dark:border-slate-700
                     dark:bg-slate-900
                     dark:shadow-black/30">

              <!-- Profile Header -->
              <div
                class="border-b border-slate-100
                       bg-slate-50 px-4 py-4
                       dark:border-slate-800
                       dark:bg-slate-800/50">

                <div class="flex items-center gap-3">

                  <div
                    class="flex h-11 w-11 items-center
                           justify-center rounded-xl
                           bg-gradient-to-br from-blue-500
                           to-purple-600
                           font-bold text-white">

                    R

                  </div>

                  <div class="min-w-0">

                    <p
                      class="truncate text-sm font-semibold
                             text-slate-900
                             dark:text-white">

                      Rukhsar

                    </p>

                    <p
                      class="truncate text-xs
                             text-slate-400">

                      admin@leadorbit.com

                    </p>

                  </div>

                </div>

              </div>


              <!-- Profile Options -->
              <div class="p-2">

                <button
                  type="button"
                  class="flex w-full items-center gap-3
                         rounded-xl px-3 py-2.5 text-left
                         text-sm text-slate-600
                         transition hover:bg-slate-100
                         hover:text-slate-900
                         dark:text-slate-300
                         dark:hover:bg-slate-800
                         dark:hover:text-white">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.8"
                    stroke="currentColor"
                    class="h-5 w-5 text-slate-400">

                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 1
                         1-7.5 0 3.75 3.75 0 0
                         1 7.5 0ZM4.5 20.25a7.5
                         7.5 0 0 1 15 0" />

                  </svg>

                  My Profile

                </button>


                <button
                  type="button"
                  class="flex w-full items-center gap-3
                         rounded-xl px-3 py-2.5 text-left
                         text-sm text-slate-600
                         transition hover:bg-slate-100
                         hover:text-slate-900
                         dark:text-slate-300
                         dark:hover:bg-slate-800
                         dark:hover:text-white">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.8"
                    stroke="currentColor"
                    class="h-5 w-5 text-slate-400">

                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.594 3.94c.09-.542
                         .56-.94 1.11-.94h2.592c.55
                         0 1.02.398 1.11.94l.09.54a1.125
                         1.125 0 0 0 1.62.795l.5-.27
                         a1.125 1.125 0 0 1 1.44.34l1.296
                         2.245a1.125 1.125 0 0 1-.33
                         1.44l-.44.32a1.125 1.125 0
                         0 0 0 1.83l.44.32a1.125 1.125
                         0 0 1 .33 1.44l-1.296 2.245a1.125
                         1.125 0 0 1-1.44.34l-.5-.27a1.125
                         1.125 0 0 0-1.62.795l-.09.54a1.125
                         1.125 0 0 1-1.11.94h-2.592a1.125
                         1.125 0 0 1-1.11-.94l-.09-.54a1.125
                         1.125 0 0 0-1.62-.795l-.5.27a1.125
                         1.125 0 0 1-1.44-.34L3.79
                         10.63a1.125 1.125 0 0 1 .33-1.44l.44-.32
                         a1.125 1.125 0 0 0 0-1.83l-.44-.32a1.125
                         1.125 0 0 1-.33-1.44L5.086 3.035a1.125
                         1.125 0 0 1 1.44-.34l.5.27a1.125
                         1.125 0 0 0 1.62-.795l.09-.54Z" />

                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />

                  </svg>

                  Settings

                </button>


                <div
                  class="my-1 border-t border-slate-100
                         dark:border-slate-800">
                </div>


                <button
                  type="button"
                  class="flex w-full items-center gap-3
                         rounded-xl px-3 py-2.5 text-left
                         text-sm font-medium text-red-500
                         transition hover:bg-red-50
                         dark:hover:bg-red-500/10">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.8"
                    stroke="currentColor"
                    class="h-5 w-5">

                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25
                         2.25 0 0 0 13.5 3h-6a2.25
                         2.25 0 0 0-2.25 2.25v13.5A2.25
                         2.25 0 0 0 7.5 21h6a2.25
                         2.25 0 0 0 2.25-2.25V15
                         m3-6-3 3m0 0 3 3m-3-3h12" />

                  </svg>

                  Logout

                </button>

              </div>

            </div>

          }

        </div>

      </div>

    </header>
  `

})
export class Topbar {

  theme = inject(ThemeService);

  notificationsOpen = false;

  profileOpen = false;


  toggleNotifications(): void {

    this.notificationsOpen = !this.notificationsOpen;

    if (this.notificationsOpen) {
      this.profileOpen = false;
    }

  }


  toggleProfile(): void {

    this.profileOpen = !this.profileOpen;

    if (this.profileOpen) {
      this.notificationsOpen = false;
    }

  }

}