"use client";

import React, { useState } from "react";
import {
  Users,
  TrendingUp,
  Share2,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Mail,
  Phone,
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Download,
  Activity,
  Layers,
} from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  campaign: string;
  source: string;
  status: "New" | "Contacted" | "Qualified" | "Converted";
  time: string;
  avatar: string;
}

const leadsData: Lead[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    email: "rahul.s@gmail.com",
    phone: "+91 98765 43210",
    campaign: "Real Estate Q3 Leads",
    source: "Facebook Instant Form",
    status: "New",
    time: "2 mins ago",
    avatar: "RS",
  },
  {
    id: "2",
    name: "Priya Singh",
    email: "priya.singh@techcorp.in",
    phone: "+91 98123 45678",
    campaign: "SaaS Free Trial",
    source: "Facebook Lead Ads",
    status: "Contacted",
    time: "18 mins ago",
    avatar: "PS",
  },
  {
    id: "3",
    name: "Amit Kumar",
    email: "amit.k@designstudio.com",
    phone: "+91 99887 76655",
    campaign: "Course Enrollment",
    source: "Instagram Lead Ads",
    status: "Qualified",
    time: "1 hour ago",
    avatar: "AK",
  },
  {
    id: "4",
    name: "Neha Verma",
    email: "neha.verma@outlook.com",
    phone: "+91 97654 32109",
    campaign: "Real Estate Q3 Leads",
    source: "Facebook Instant Form",
    status: "Converted",
    time: "3 hours ago",
    avatar: "NV",
  },
  {
    id: "5",
    name: "Vikram Malhotra",
    email: "vikram@agency.io",
    phone: "+91 95432 10987",
    campaign: "SaaS Free Trial",
    source: "Facebook Lead Ads",
    status: "New",
    time: "5 hours ago",
    avatar: "VM",
  },
];

const ProductPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredLeads = leadsData.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.campaign.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === "all") return matchesSearch;
    return matchesSearch && lead.status.toLowerCase() === activeTab.toLowerCase();
  });

  const getStatusBadge = (status: Lead["status"]) => {
    switch (status) {
      case "New":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            New
          </span>
        );
      case "Contacted":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-300 bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700 shadow-sm">
            <Clock className="h-3.5 w-3.5 text-blue-600" />
            Contacted
          </span>
        );
      case "Qualified":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            Qualified
          </span>
        );
      case "Converted":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-300 bg-purple-50 px-2.5 py-1 text-xs font-bold text-purple-700 shadow-sm">
            <CheckCircle2 className="h-3.5 w-3.5 text-purple-600" />
            Converted
          </span>
        );
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/30 to-white px-4 py-24 sm:px-6 lg:px-8 font-sans text-slate-900">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-sky-200/40 blur-[130px]" />
      <div className="pointer-events-none absolute right-10 bottom-10 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-200/30 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/80 bg-sky-100/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-800 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-sky-600" />
            Product Command Center
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            See Your Leads in{" "}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Real-Time Action
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            An intuitive command center built to manage, track, and convert every incoming lead from Facebook & Instagram automatically.
          </p>
        </div>

        {/* Outer Dashboard Glass Window Header */}
        <div
          data-aos="zoom-in"
          className="group relative mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-200/90 bg-white/70 p-2 sm:p-4 shadow-2xl shadow-sky-900/10 backdrop-blur-2xl ring-1 ring-slate-900/5 transition-all duration-500 hover:shadow-sky-900/15"
        >
          {/* macOS-style Window Control Bar */}
          <div className="flex items-center justify-between border-b border-slate-200/80 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400/90 shadow-sm" />
              <span className="h-3 w-3 rounded-full bg-amber-400/90 shadow-sm" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/90 shadow-sm" />
              <span className="ml-3 font-mono text-xs font-semibold text-slate-500">
                leadorbit.app/dashboard/leads
              </span>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-100/80 px-2.5 py-1 text-[11px] font-mono font-bold text-slate-600 shadow-sm">
                <Activity className="h-3 w-3 text-emerald-500 animate-pulse" />
                Live Syncing
              </span>
            </div>
          </div>

          {/* Inner Dashboard Canvas */}
          <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            
            {/* Dashboard Header Bar */}
            <div className="flex flex-col gap-4 border-b border-slate-200/80 bg-slate-50/50 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-2xl font-black tracking-tight text-slate-900">Leads Overview</h3>
                  <span className="rounded-full border border-sky-300 bg-sky-50 px-3 py-0.5 text-xs font-bold text-sky-700 shadow-xs">
                    ● Real-time Feed
                  </span>
                </div>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Manage incoming leads captured from your active Meta ad campaigns.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 shadow-xs transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 hover:shadow-md"
                >
                  <Download className="h-4 w-4 text-slate-500 transition-transform duration-200 group-hover:-translate-y-0.5" />
                  Export CSV
                </button>
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:from-sky-500 hover:to-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <Plus className="h-4 w-4 transition-transform duration-200 group-hover:rotate-90" />
                  Add Manual Lead
                </button>
              </div>
            </div>

            {/* Metrics Overview Cards with Interactive Icons */}
            <div className="grid gap-4 bg-slate-50/30 p-6 sm:grid-cols-3">
              {/* Card 1 */}
              <div className="group/card relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/5 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Captured Leads</p>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-600 shadow-xs transition-all duration-300 group-hover/card:scale-110 group-hover/card:bg-sky-600 group-hover/card:text-white">
                    <Users className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <p className="text-3xl font-black tracking-tight text-slate-900">1,248</p>
                  <span className="flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-600 border border-emerald-200">
                    <ArrowUpRight className="h-3.5 w-3.5" /> +14.2%
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group/card relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Today's New Leads</p>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-600 shadow-xs transition-all duration-300 group-hover/card:scale-110 group-hover/card:bg-emerald-600 group-hover/card:text-white">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <p className="text-3xl font-black tracking-tight text-slate-900">42</p>
                  <span className="flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-600 border border-emerald-200">
                    <ArrowUpRight className="h-3.5 w-3.5" /> +8 today
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group/card relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-900/5 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Active Ad Sources</p>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-100 bg-purple-50 text-purple-600 shadow-xs transition-all duration-300 group-hover/card:scale-110 group-hover/card:bg-purple-600 group-hover/card:text-white">
                    <Share2 className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <p className="text-2xl font-black tracking-tight text-slate-900">Meta Ads API</p>
                  <span className="rounded-full bg-purple-50 px-2 py-0.5 text-xs font-bold text-purple-700 border border-purple-200">
                    4 Active Pages
                  </span>
                </div>
              </div>
            </div>

            {/* Filter Tabs & Search Bar */}
            <div className="flex flex-col gap-4 border-y border-slate-200/80 bg-white px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              
              {/* Status Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {[
                  { id: "all", label: "All Leads" },
                  { id: "new", label: "New" },
                  { id: "contacted", label: "Contacted" },
                  { id: "qualified", label: "Qualified" },
                  { id: "converted", label: "Converted" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                        : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Search & Filter Controls */}
              <div className="flex items-center gap-2.5">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search lead, email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-xs font-medium text-slate-800 placeholder-slate-400 transition-colors focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                  />
                </div>
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900"
                >
                  <Filter className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Responsive Light Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-slate-200 bg-slate-50/80 font-bold uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-6 py-4 font-bold">Lead Info</th>
                    <th className="px-6 py-4 font-bold">Campaign</th>
                    <th className="px-6 py-4 font-bold">Source</th>
                    <th className="px-6 py-4 font-bold">Status</th>
                    <th className="px-6 py-4 font-bold">Received</th>
                    <th className="px-6 py-4 text-right font-bold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-medium text-slate-700">
                  {filteredLeads.length > 0 ? (
                    filteredLeads.map((lead) => (
                      <tr
                        key={lead.id}
                        className="group/row transition-colors hover:bg-sky-50/50"
                      >
                        {/* Lead Info Column */}
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-600 to-blue-600 font-bold text-white shadow-sm transition-transform duration-200 group-hover/row:scale-105">
                              {lead.avatar}
                            </div>
                            <div>
                              <p className="font-bold text-slate-900 transition-colors duration-200 group-hover/row:text-sky-700">
                                {lead.name}
                              </p>
                              <p className="text-[11px] font-semibold text-slate-400">{lead.email}</p>
                            </div>
                          </div>
                        </td>

                        {/* Campaign Column */}
                        <td className="px-6 py-4">
                          <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[11px] font-bold text-slate-700">
                            {lead.campaign}
                          </span>
                        </td>

                        {/* Source Column */}
                        <td className="px-6 py-4 font-semibold text-slate-500">
                          {lead.source}
                        </td>

                        {/* Status Column */}
                        <td className="px-6 py-4">
                          {getStatusBadge(lead.status)}
                        </td>

                        {/* Received Time */}
                        <td className="px-6 py-4 font-semibold text-slate-400">
                          {lead.time}
                        </td>

                        {/* Actions Column with Micro-hover Icons */}
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              type="button"
                              title="Send Email"
                              className="group/btn rounded-lg p-2 text-slate-400 transition-all duration-200 hover:bg-sky-100 hover:text-sky-700"
                            >
                              <Mail className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                            </button>
                            <button
                              type="button"
                              title="Call Lead"
                              className="group/btn rounded-lg p-2 text-slate-400 transition-all duration-200 hover:bg-emerald-100 hover:text-emerald-700"
                            >
                              <Phone className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                            </button>
                            <button
                              type="button"
                              title="More Options"
                              className="group/btn rounded-lg p-2 text-slate-400 transition-all duration-200 hover:bg-slate-100 hover:text-slate-800"
                            >
                              <MoreVertical className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-400">
                        No leads found matching your search criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Dashboard Footer Pagination */}
            <div className="flex items-center justify-between border-t border-slate-200/80 bg-slate-50/50 px-6 py-4 text-xs font-semibold text-slate-500">
              <p>
                Showing <span className="font-bold text-slate-900">{filteredLeads.length}</span> of{" "}
                <span className="font-bold text-slate-900">{leadsData.length}</span> leads
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled
                  className="rounded-lg border border-slate-200 bg-white p-2 text-slate-400 shadow-xs disabled:opacity-40"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 shadow-xs transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;