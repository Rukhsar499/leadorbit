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
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            New
          </span>
        );
      case "Contacted":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400">
            <Clock className="h-3 w-3" />
            Contacted
          </span>
        );
      case "Qualified":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-400">
            <Sparkles className="h-3 w-3" />
            Qualified
          </span>
        );
      case "Converted":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-xs font-medium text-purple-400">
            <CheckCircle2 className="h-3 w-3" />
            Converted
          </span>
        );
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
      {/* Background Ambient Lights */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/20 to-indigo-600/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            Product Preview
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            See Your Leads in{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Real-Time Action
            </span>
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            An intuitive command center built to manage, track, and convert every incoming lead from Facebook & Instagram automatically.
          </p>
        </div>

        {/* Outer Dashboard Glass Window */}
        <div
          data-aos="zoom-in"
          className="group relative mx-auto mt-14 max-w-6xl rounded-3xl border border-white/10 bg-slate-900/60 p-2 shadow-2xl backdrop-blur-xl transition-all duration-700 hover:border-blue-500/30 hover:shadow-blue-500/10 sm:p-4"
        >
          {/* Mac-style Window Topbar */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-medium text-gray-500">leadorbit.app/dashboard/leads</span>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono text-gray-400">
                ⌘K Quick Actions
              </span>
            </div>
          </div>

          {/* Main Dashboard Layout */}
          <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/90 shadow-inner">
            
            {/* Dashboard Header Bar */}
            <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white">Leads Overview</h3>
                  <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-400 border border-blue-500/20">
                    Live Feed
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-400">
                  Manage incoming leads captured from your active Meta campaigns.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white"
                >
                  <Download className="h-3.5 w-3.5" />
                  Export CSV
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 hover:shadow-blue-600/50"
                >
                  <Plus className="h-4 w-4" />
                  Add Manual Lead
                </button>
              </div>
            </div>

            {/* Metrics Overview Cards */}
            <div className="grid gap-4 p-5 sm:grid-cols-3">
              {/* Card 1 */}
              <div className="group/card relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-5 transition-all duration-300 hover:border-blue-500/40 hover:bg-white/[0.06]">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-gray-400">Total Captured Leads</p>
                  <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-2 text-blue-400">
                    <Users className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <p className="text-3xl font-extrabold text-white">1,248</p>
                  <span className="flex items-center text-xs font-semibold text-emerald-400">
                    <ArrowUpRight className="h-3.5 w-3.5" /> +14.2%
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group/card relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-5 transition-all duration-300 hover:border-emerald-500/40 hover:bg-white/[0.06]">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-gray-400">Today's New Leads</p>
                  <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-2 text-emerald-400">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <p className="text-3xl font-extrabold text-white">42</p>
                  <span className="flex items-center text-xs font-semibold text-emerald-400">
                    <ArrowUpRight className="h-3.5 w-3.5" /> +8 today
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group/card relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-5 transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.06]">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-gray-400">Active Ad Sources</p>
                  <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-2 text-purple-400">
                    <Share2 className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <p className="text-3xl font-extrabold text-white">Facebook & IG</p>
                  <span className="text-xs font-semibold text-purple-400">4 Active Pages</span>
                </div>
              </div>
            </div>

            {/* Filter Tabs & Search Bar */}
            <div className="flex flex-col gap-3 border-y border-white/10 bg-white/[0.02] px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
              
              {/* Status Filter Tabs */}
              <div className="flex items-center gap-1 overflow-x-auto">
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
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Search & Filter Trigger */}
              <div className="flex items-center gap-2">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search lead or email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/80 py-1.5 pl-9 pr-3 text-xs text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-xl border border-white/10 bg-slate-900/80 p-2 text-xs font-medium text-gray-400 hover:text-white"
                >
                  <Filter className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Responsive Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-white/10 bg-slate-900/40 text-gray-400">
                  <tr>
                    <th className="px-5 py-3.5 font-semibold">Lead Info</th>
                    <th className="px-5 py-3.5 font-semibold">Campaign</th>
                    <th className="px-5 py-3.5 font-semibold">Source</th>
                    <th className="px-5 py-3.5 font-semibold">Status</th>
                    <th className="px-5 py-3.5 font-semibold">Recieved</th>
                    <th className="px-5 py-3.5 text-right font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  {filteredLeads.length > 0 ? (
                    filteredLeads.map((lead) => (
                      <tr
                        key={lead.id}
                        className="group/row transition-colors hover:bg-blue-500/[0.04]"
                      >
                        {/* Lead Info Column */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 font-bold text-white shadow-md">
                              {lead.avatar}
                            </div>
                            <div>
                              <p className="font-semibold text-white group-hover/row:text-blue-400">
                                {lead.name}
                              </p>
                              <p className="text-[11px] text-gray-400">{lead.email}</p>
                            </div>
                          </div>
                        </td>

                        {/* Campaign Column */}
                        <td className="px-5 py-4">
                          <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-gray-300">
                            {lead.campaign}
                          </span>
                        </td>

                        {/* Source Column */}
                        <td className="px-5 py-4 text-gray-400">
                          {lead.source}
                        </td>

                        {/* Status Column */}
                        <td className="px-5 py-4">
                          {getStatusBadge(lead.status)}
                        </td>

                        {/* Received Time */}
                        <td className="px-5 py-4 text-gray-400">
                          {lead.time}
                        </td>

                        {/* Actions Column */}
                        <td className="px-5 py-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              type="button"
                              title="Send Email"
                              className="rounded-lg p-1.5 text-gray-400 transition hover:bg-blue-500/20 hover:text-blue-400"
                            >
                              <Mail className="h-3.5 w-3.5" />
                            </button>
                            <button
                              type="button"
                              title="Call Lead"
                              className="rounded-lg p-1.5 text-gray-400 transition hover:bg-emerald-500/20 hover:text-emerald-400"
                            >
                              <Phone className="h-3.5 w-3.5" />
                            </button>
                            <button
                              type="button"
                              title="More Options"
                              className="rounded-lg p-1.5 text-gray-400 transition hover:bg-white/10 hover:text-white"
                            >
                              <MoreVertical className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-gray-500">
                        No leads found matching your search criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Dashboard Footer Pagination */}
            <div className="flex items-center justify-between border-t border-white/10 px-5 py-3.5 text-xs text-gray-400">
              <p>
                Showing <span className="font-semibold text-white">{filteredLeads.length}</span> of{" "}
                <span className="font-semibold text-white">{leadsData.length}</span> leads
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled
                  className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-gray-500 disabled:opacity-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-gray-300 hover:bg-white/10 hover:text-white"
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