import { Component, signal, computed, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ThemeMode = 'dark' | 'light';
export type DateRange = 'today' | '7days' | '30days' | 'custom';
export type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Converted' | 'Lost';

export interface KPICard {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
}

export interface LeadItem {
  id: string;
  name: string;
  phone: string;
  email: string;
  page: string;
  form: string;
  campaign: string;
  status: LeadStatus;
  date: string;
}

export interface IntegrationItem {
  id: string;
  name: string;
  type: 'facebook' | 'webhook' | 'crm';
  status: 'connected' | 'active' | 'warning' | 'disconnected';
  statusText: string;
  actionRequired?: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      [class.dark]="theme() === 'dark'"
      class="min-h-screen font-sans antialiased transition-colors duration-500 selection:bg-blue-500 selection:text-white"
      [ngClass]="theme() === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'">
      
      <!-- Continuous Ambient Glowing Orbs -->
      <div class="pointer-events-none fixed -left-40 -top-40 h-[500px] w-[500px] rounded-full blur-[140px] transition-opacity duration-700 animate-pulse-slow"
        [ngClass]="theme() === 'dark' ? 'bg-blue-600/15' : 'bg-blue-400/20'"></div>
      <div class="pointer-events-none fixed -right-40 top-1/3 h-[500px] w-[500px] rounded-full blur-[160px] transition-opacity duration-700 animate-pulse-slow delay-1000"
        [ngClass]="theme() === 'dark' ? 'bg-indigo-600/10' : 'bg-indigo-300/25'"></div>

      <div class="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        
        <!-- Header Section -->
        <header class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div class="flex items-center gap-3">
              <span class="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 animate-ping"></span>
              <h1 class="text-2xl font-extrabold tracking-tight sm:text-3xl"
                [ngClass]="theme() === 'dark' ? 'text-white' : 'text-slate-900'">
                Good morning, {{ userName() }} 👋
              </h1>
            </div>
            <p class="mt-1 text-xs sm:text-sm font-medium" [ngClass]="theme() === 'dark' ? 'text-slate-400' : 'text-slate-500'">
              Here is your live lead generation performance and integration status.
            </p>
          </div>

          <!-- Controls: Filters & Theme Toggle -->
          <div class="flex flex-wrap items-center gap-3">
            
            <!-- Page Selector Filter -->
            <div class="relative">
              <select 
                [value]="selectedPage()" 
                (change)="onPageChange($event)"
                class="appearance-none rounded-xl border px-3.5 py-2 pr-9 text-xs font-semibold tracking-wide transition-all duration-200 outline-none cursor-pointer shadow-sm"
                [ngClass]="theme() === 'dark' 
                  ? 'border-slate-800 bg-slate-900/80 text-slate-200 focus:border-blue-500 hover:bg-slate-800' 
                  : 'border-slate-200 bg-white text-slate-700 focus:border-blue-500 hover:bg-slate-50'">
                <option value="all">All Connected Pages</option>
                <option value="page-1">Real Estate Holdings</option>
                <option value="page-2">Apex Digital Agency</option>
                <option value="page-3">Urban Living Apartments</option>
              </select>
              <div class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>

            <!-- Theme Switcher Button -->
            <button 
              type="button" 
              (click)="toggleTheme()" 
              class="flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-semibold transition-all duration-300 shadow-sm hover:scale-105 active:scale-95"
              [ngClass]="theme() === 'dark' 
                ? 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800' 
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'">
              @if (theme() === 'dark') {
                <svg class="h-4 w-4 text-amber-400 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m0 13.5V21m8.966-8.966h-2.25m-13.5 0H3m15.364-6.364l-1.591 1.591M6.758 17.242l-1.591 1.591m12.728 0l-1.591-1.591M6.758 6.758L5.167 5.167M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
                </svg>
                <span>Light</span>
              } @else {
                <svg class="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
                <span>Dark</span>
              }
            </button>
          </div>
        </header>

        <!-- KPI Cards Grid -->
        <section class="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          @for (card of kpiCards(); track card.id) {
            <div 
              class="group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl backdrop-blur-xl"
              [ngClass]="theme() === 'dark' 
                ? 'border-slate-800/80 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900/90' 
                : 'border-slate-200/80 bg-white/80 hover:border-slate-300 hover:bg-white'">
              
              <div class="flex items-center justify-between">
                <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">{{ card.title }}</span>
                <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 ring-1 ring-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <span class="text-lg">{{ card.icon }}</span>
                </div>
              </div>

              <div class="mt-4 flex items-baseline justify-between">
                <span class="text-2xl sm:text-3xl font-extrabold tracking-tight"
                  [ngClass]="theme() === 'dark' ? 'text-white' : 'text-slate-900'">
                  {{ card.value }}
                </span>
                
                <span class="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-md"
                  [ngClass]="card.isPositive 
                    ? 'bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20' 
                    : 'bg-rose-500/10 text-rose-500 ring-1 ring-rose-500/20'">
                  {{ card.isPositive ? '↑' : '↓' }} {{ card.change }}
                </span>
              </div>
            </div>
          }
        </section>

        <!-- Main Content Area: Chart + Integration Status -->
        <div class="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          <!-- Reusable Chart Container (2 Cols on desktop) -->
          <div 
            class="relative overflow-hidden rounded-3xl border p-6 backdrop-blur-xl shadow-xl transition-all duration-300 lg:col-span-2"
            [ngClass]="theme() === 'dark' ? 'border-slate-800/90 bg-slate-900/70' : 'border-slate-200/90 bg-white/90'">
            
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b pb-5"
              [ngClass]="theme() === 'dark' ? 'border-slate-800' : 'border-slate-200'">
              <div>
                <h2 class="text-lg font-bold tracking-tight" [ngClass]="theme() === 'dark' ? 'text-white' : 'text-slate-900'">
                  Leads Over Time
                </h2>
                <p class="text-xs text-slate-400">Captured lead trends across selected time frame</p>
              </div>

              <!-- Range Filter Selector -->
              <div class="flex items-center gap-1 rounded-xl p-1 border"
                [ngClass]="theme() === 'dark' ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-slate-100'">
                @for (range of dateRanges; track range.id) {
                  <button 
                    type="button" 
                    (click)="setDateRange(range.id)"
                    class="rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200"
                    [ngClass]="selectedRange() === range.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                      : 'text-slate-400 hover:text-slate-200'">
                    {{ range.label }}
                  </button>
                }
              </div>
            </div>

            <!-- SVG Line Chart Visualizer -->
            <div class="mt-6 h-64 w-full">
              <svg class="h-full w-full overflow-visible" viewBox="0 0 500 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradientDark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.4" />
                    <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.0" />
                  </linearGradient>
                  <linearGradient id="chartGradientLight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#2563eb" stop-opacity="0.25" />
                    <stop offset="100%" stop-color="#2563eb" stop-opacity="0.0" />
                  </linearGradient>
                </defs>

                <!-- Grid Background Lines -->
                <line x1="0" y1="40" x2="500" y2="40" stroke="currentColor" class="text-slate-700/20" stroke-dasharray="4" />
                <line x1="0" y1="90" x2="500" y2="90" stroke="currentColor" class="text-slate-700/20" stroke-dasharray="4" />
                <line x1="0" y1="140" x2="500" y2="140" stroke="currentColor" class="text-slate-700/20" stroke-dasharray="4" />

                <!-- Area Fill -->
                <polygon 
                  points="0,200 0,140 80,100 160,120 240,50 320,80 400,30 500,70 500,200" 
                  [attr.fill]="theme() === 'dark' ? 'url(#chartGradientDark)' : 'url(#chartGradientLight)'" />

                <!-- Smooth Trend Line -->
                <path 
                  d="M0,140 Q 40,120 80,100 T 160,120 T 240,50 T 320,80 T 400,30 T 500,70" 
                  fill="none" 
                  stroke="#3b82f6" 
                  stroke-width="3.5" 
                  stroke-linecap="round" />

                <!-- Data Point Pulse Indicators -->
                <circle cx="240" cy="50" r="5" fill="#3b82f6" class="animate-ping opacity-75" />
                <circle cx="240" cy="50" r="5" fill="#3b82f6" class="ring-4 ring-blue-500/30" />
                <circle cx="400" cy="30" r="5" fill="#3b82f6" />
              </svg>
            </div>
          </div>

          <!-- Integration Status Panel (1 Col) -->
          <div 
            class="relative overflow-hidden rounded-3xl border p-6 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between"
            [ngClass]="theme() === 'dark' ? 'border-slate-800/90 bg-slate-900/70' : 'border-slate-200/90 bg-white/90'">
            
            <div>
              <div class="flex items-center justify-between border-b pb-5"
                [ngClass]="theme() === 'dark' ? 'border-slate-800' : 'border-slate-200'">
                <div>
                  <h2 class="text-lg font-bold tracking-tight" [ngClass]="theme() === 'dark' ? 'text-white' : 'text-slate-900'">
                    Integrations
                  </h2>
                  <p class="text-xs text-slate-400">System connections & webhooks</p>
                </div>
                <span class="rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] font-bold text-blue-500 ring-1 ring-blue-500/20">
                  Live Sync
                </span>
              </div>

              <!-- Integration Cards -->
              <div class="mt-6 space-y-4">
                @for (item of integrations(); track item.id) {
                  <div 
                    class="group flex items-center justify-between rounded-2xl border p-4 transition-all duration-300"
                    [ngClass]="{
                      'border-rose-500/40 bg-rose-500/5': item.actionRequired,
                      'border-slate-800/60 bg-slate-950/40': !item.actionRequired && theme() === 'dark',
                      'border-slate-200 bg-slate-50/50': !item.actionRequired && theme() === 'light'
                    }">
                    
                    <div class="flex items-center gap-3.5">
                      <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold"
                        [ngClass]="{
                          'bg-blue-600/20 text-blue-500': item.type === 'facebook',
                          'bg-indigo-600/20 text-indigo-500': item.type === 'webhook',
                          'bg-emerald-600/20 text-emerald-500': item.type === 'crm'
                        }">
                        @if (item.type === 'facebook') { f }
                        @if (item.type === 'webhook') { ⚡ }
                        @if (item.type === 'crm') { 📊 }
                      </div>

                      <div>
                        <h3 class="text-sm font-bold" [ngClass]="theme() === 'dark' ? 'text-white' : 'text-slate-900'">
                          {{ item.name }}
                        </h3>
                        
                        <div class="mt-0.5 flex items-center gap-1.5">
                          @if (!item.actionRequired) {
                            <span class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span class="text-xs font-semibold text-emerald-500">{{ item.statusText }}</span>
                          } @else {
                            <span class="h-2 w-2 rounded-full bg-rose-500 animate-ping"></span>
                            <span class="text-xs font-semibold text-rose-500">{{ item.statusText }}</span>
                          }
                        </div>
                      </div>
                    </div>

                    <!-- Interactive Reconnect CTA if needed -->
                    @if (item.actionRequired) {
                      <button 
                        type="button" 
                        (click)="reconnectIntegration(item.id)"
                        class="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-xl bg-rose-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-rose-600/25 transition-all duration-300 hover:bg-rose-500 hover:shadow-rose-600/40 active:scale-95">
                        <span>Reconnect</span>
                      </button>
                    }
                  </div>
                }
              </div>
            </div>

            <div class="mt-6 border-t pt-4 text-center" [ngClass]="theme() === 'dark' ? 'border-slate-800' : 'border-slate-200'">
              <span class="text-[11px] font-medium text-slate-400">All integrations monitored in real-time</span>
            </div>
          </div>

        </div>

        <!-- Recent Leads Data Table Section -->
        <section 
          class="relative overflow-hidden rounded-3xl border backdrop-blur-xl shadow-xl transition-all duration-300"
          [ngClass]="theme() === 'dark' ? 'border-slate-800/90 bg-slate-900/70' : 'border-slate-200/90 bg-white/90'">
          
          <div class="flex items-center justify-between border-b p-6"
            [ngClass]="theme() === 'dark' ? 'border-slate-800' : 'border-slate-200'">
            <div>
              <h2 class="text-lg font-bold tracking-tight" [ngClass]="theme() === 'dark' ? 'text-white' : 'text-slate-900'">
                Recent Captured Leads
              </h2>
              <p class="text-xs text-slate-400">Click any lead row to open full lead details</p>
            </div>
            
            <button type="button" class="text-xs font-bold text-blue-500 hover:underline">
              Export CSV →
            </button>
          </div>

          <!-- Table Container -->
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="border-b uppercase tracking-wider font-bold"
                [ngClass]="theme() === 'dark' ? 'border-slate-800 bg-slate-950/40 text-slate-400' : 'border-slate-200 bg-slate-50 text-slate-500'">
                <tr>
                  <th scope="col" class="py-4 px-6">Lead</th>
                  <th scope="col" class="py-4 px-6">Phone</th>
                  <th scope="col" class="py-4 px-6">Email</th>
                  <th scope="col" class="py-4 px-6">Page</th>
                  <th scope="col" class="py-4 px-6">Form</th>
                  <th scope="col" class="py-4 px-6">Campaign</th>
                  <th scope="col" class="py-4 px-6">Status</th>
                  <th scope="col" class="py-4 px-6">Date</th>
                </tr>
              </thead>
              <tbody class="divide-y transition-colors"
                [ngClass]="theme() === 'dark' ? 'divide-slate-800/60' : 'divide-slate-200/60'">
                @for (lead of recentLeads(); track lead.id) {
                  <tr 
                    (click)="openLeadDetails(lead)"
                    class="group cursor-pointer transition-colors duration-200"
                    [ngClass]="theme() === 'dark' ? 'hover:bg-slate-800/50' : 'hover:bg-slate-100/60'">
                    
                    <td class="py-4 px-6 font-bold" [ngClass]="theme() === 'dark' ? 'text-white' : 'text-slate-900'">
                      {{ lead.name }}
                    </td>
                    <td class="py-4 px-6 text-slate-400 font-mono">{{ lead.phone }}</td>
                    <td class="py-4 px-6 text-slate-400">{{ lead.email }}</td>
                    <td class="py-4 px-6 font-medium text-slate-300">{{ lead.page }}</td>
                    <td class="py-4 px-6 text-slate-400">{{ lead.form }}</td>
                    <td class="py-4 px-6 text-slate-400">{{ lead.campaign }}</td>
                    
                    <!-- Status Badge -->
                    <td class="py-4 px-6">
                      <span class="inline-flex items-center rounded-md px-2.5 py-1 text-[10px] font-extrabold ring-1 ring-inset"
                        [ngClass]="{
                          'bg-blue-500/10 text-blue-500 ring-blue-500/20': lead.status === 'New',
                          'bg-amber-500/10 text-amber-500 ring-amber-500/20': lead.status === 'Contacted',
                          'bg-indigo-500/10 text-indigo-500 ring-indigo-500/20': lead.status === 'Qualified',
                          'bg-emerald-500/10 text-emerald-500 ring-emerald-500/20': lead.status === 'Converted',
                          'bg-rose-500/10 text-rose-500 ring-rose-500/20': lead.status === 'Lost'
                        }">
                        {{ lead.status }}
                      </span>
                    </td>

                    <td class="py-4 px-6 text-slate-400 whitespace-nowrap">{{ lead.date }}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  `,
  styles: [`
    @keyframes pulseSlow {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.05); }
    }
    @keyframes spinSlow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-pulse-slow {
      animation: pulseSlow 8s ease-in-out infinite;
    }
    .animate-spin-slow {
      animation: spinSlow 12s linear infinite;
    }
  `]
})
export class Dashboard {
  // Theme & User Signals
  theme = signal<ThemeMode>('dark');
  userName = signal<string>('Alex');
  
  // Filters
  selectedPage = signal<string>('all');
  selectedRange = signal<DateRange>('7days');

  dateRanges: { id: DateRange; label: string }[] = [
    { id: 'today', label: 'Today' },
    { id: '7days', label: '7 Days' },
    { id: '30days', label: '30 Days' },
    { id: 'custom', label: 'Custom' }
  ];

  // Key Performance Indicators Data
  kpiCards = signal<KPICard[]>([
    { id: '1', title: 'Total Leads', value: '1,482', change: '12.4%', isPositive: true, icon: '📈' },
    { id: '2', title: 'New Leads', value: '128', change: '8.1%', isPositive: true, icon: '✨' },
    { id: '3', title: 'Leads Today', value: '24', change: '3.2%', isPositive: false, icon: '⚡' },
    { id: '4', title: 'Connected Pages', value: '3 Pages', change: 'Active', isPositive: true, icon: '📲' }
  ]);

  // Integration Status List
  integrations = signal<IntegrationItem[]>([
    { id: 'fb', name: 'Facebook Lead Ads', type: 'facebook', status: 'warning', statusText: 'Reconnection Required', actionRequired: true },
    { id: 'wh', name: 'Webhook Endpoint', type: 'webhook', status: 'active', statusText: 'Active', actionRequired: false },
    { id: 'crm', name: 'HubSpot CRM', type: 'crm', status: 'connected', statusText: 'Connected', actionRequired: false }
  ]);

  // Recent Leads Table Data
  recentLeads = signal<LeadItem[]>([
    { id: 'l1', name: 'Sarah Jenkins', phone: '+1 (555) 019-2834', email: 'sarah.j@example.com', page: 'Real Estate Holdings', form: 'Property Enquiry', campaign: 'Summer_Listings_2026', status: 'New', date: '10 mins ago' },
    { id: 'l2', name: 'Michael Chang', phone: '+1 (555) 018-9921', email: 'm.chang@techcorp.io', page: 'Apex Digital Agency', form: 'Agency Consultation', campaign: 'B2B_LeadGen_Q3', status: 'Qualified', date: '42 mins ago' },
    { id: 'l3', name: 'David Miller', phone: '+1 (555) 014-3322', email: 'david.m@designstudio.org', page: 'Urban Living', form: 'Book Site Visit', campaign: 'Downtown_Condos', status: 'Contacted', date: '2 hours ago' },
    { id: 'l4', name: 'Elena Rostova', phone: '+1 (555) 017-8811', email: 'elena@rostovadesign.com', page: 'Real Estate Holdings', form: 'Download Brochure', campaign: 'Luxury_Villas', status: 'Converted', date: '5 hours ago' }
  ]);

  toggleTheme(): void {
    this.theme.update(current => (current === 'dark' ? 'light' : 'dark'));
  }

  onPageChange(event: Event): void {
    const val = (event.target as HTMLSelectElement).value;
    this.selectedPage.set(val);
  }

  setDateRange(range: DateRange): void {
    this.selectedRange.set(range);
  }

  reconnectIntegration(id: string): void {
    this.integrations.update(items =>
      items.map(item =>
        item.id === id 
          ? { ...item, status: 'connected', statusText: 'Connected', actionRequired: false }
          : item
      )
    );
  }

  openLeadDetails(lead: LeadItem): void {
    console.log('Navigating to Lead Details for:', lead);
  }
}