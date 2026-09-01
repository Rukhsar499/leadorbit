"use client";

import React, { useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
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
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            New
          </span>
        );
      case "Contacted":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-300 bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700 shadow-xs">
            <Clock className="h-3.5 w-3.5 text-blue-600" />
            Contacted
          </span>
        );
      case "Qualified":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            Qualified
          </span>
        );
      case "Converted":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-300 bg-purple-50 px-2.5 py-1 text-xs font-bold text-purple-700 shadow-xs">
            <CheckCircle2 className="h-3.5 w-3.5 text-purple-600" />
            Converted
          </span>
        );
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/30 to-white px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-sky-200/40 blur-[130px]" />
      <div className="pointer-events-none absolute right-10 bottom-10 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-200/30 blur-[120px]" />

      <ContainerScroll
        titleComponent={
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/80 bg-sky-100/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-800 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-sky-600" />
              Product Command Center
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-6xl">
              See Your Leads in <br />
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Real-Time Action
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600">
              An intuitive command center built to manage, track, and convert every incoming lead automatically.
            </p>
          </div>
        }
      >
        {/* Aceternity Scroll Target Dashboard Window */}
        <div className="h-full w-full rounded-2xl border border-slate-200/90 bg-white/90 p-2 sm:p-4 shadow-2xl shadow-sky-900/10 backdrop-blur-2xl ring-1 ring-slate-900/5 overflow-y-auto">
          {/* macOS Window Bar */}
          <div className="flex items-center justify-between border-b border-slate-200/80 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400/90 shadow-xs" />
              <span className="h-3 w-3 rounded-full bg-amber-400/90 shadow-xs" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/90 shadow-xs" />
              <span className="ml-3 font-mono text-xs font-semibold text-slate-500">
                leadorbit.app/dashboard/leads
              </span>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-100/80 px-2.5 py-1 text-[11px] font-mono font-bold text-slate-600 shadow-xs">
                <Activity className="h-3 w-3 text-emerald-500 animate-pulse" />
                Live Syncing
              </span>
            </div>
          </div>

          {/* Inner Dashboard View */}
          <div className="mt-3 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
            {/* Action Header */}
            <div className="flex flex-col gap-4 border-b border-slate-200/80 bg-slate-50/50 p-4 sm:p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">Leads Overview</h3>
                  <span className="rounded-full border border-sky-300 bg-sky-50 px-3 py-0.5 text-xs font-bold text-sky-700 shadow-2xs">
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
                  className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-2xs transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
                >
                  <Download className="h-4 w-4 text-slate-500" />
                  Export CSV
                </button>
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/20"
                >
                  <Plus className="h-4 w-4" />
                  Add Manual Lead
                </button>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid gap-3 bg-slate-50/30 p-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xs">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Leads</p>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                    <Users className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <p className="text-2xl font-black text-slate-900">1,248</p>
                  <span className="flex items-center text-xs font-bold text-emerald-600">
                    <ArrowUpRight className="h-3.5 w-3.5" /> +14.2%
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xs">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Today's Leads</p>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <p className="text-2xl font-black text-slate-900">42</p>
                  <span className="flex items-center text-xs font-bold text-emerald-600">
                    <ArrowUpRight className="h-3.5 w-3.5" /> +8 today
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xs">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Ad Sources</p>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                    <Share2 className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <p className="text-xl font-black text-slate-900">Meta Ads API</p>
                  <span className="text-xs font-bold text-purple-700">4 Pages</span>
                </div>
              </div>
            </div>

            {/* Filter Row */}
            <div className="flex flex-col gap-3 border-y border-slate-200/80 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-1 overflow-x-auto">
                {["all", "new", "contacted", "qualified", "converted"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-bold capitalize transition-all ${
                      activeTab === tab ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-100"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <div className="relative flex-1 sm:w-48">
                  <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search leads..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 py-1.5 pl-8 pr-3 text-xs font-medium focus:outline-none"
                  />
                </div>
                <button type="button" className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600">
                  <Filter className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-slate-200 bg-slate-50/80 font-bold uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-bold">Lead Info</th>
                    <th className="px-4 py-3 font-bold">Campaign</th>
                    <th className="px-4 py-3 font-bold">Source</th>
                    <th className="px-4 py-3 font-bold">Status</th>
                    <th className="px-4 py-3 font-bold">Received</th>
                    <th className="px-4 py-3 text-right font-bold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-medium text-slate-700">
                  {filteredLeads.length > 0 ? (
                    filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-sky-50/50">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2.5">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-sky-600 to-blue-600 text-[10px] font-bold text-white">
                              {lead.avatar}
                            </div>
                            <div>
                              <p className="font-bold text-slate-900">{lead.name}</p>
                              <p className="text-[10px] text-slate-400">{lead.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-700">
                            {lead.campaign}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-slate-500">{lead.source}</td>
                        <td className="px-4 py-3">{getStatusBadge(lead.status)}</td>
                        <td className="px-4 py-3 text-slate-400">{lead.time}</td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button type="button" className="rounded-md p-1.5 text-slate-400 hover:bg-sky-100 hover:text-sky-700">
                              <Mail className="h-3.5 w-3.5" />
                            </button>
                            <button type="button" className="rounded-md p-1.5 text-slate-400 hover:bg-emerald-100 hover:text-emerald-700">
                              <Phone className="h-3.5 w-3.5" />
                            </button>
                            <button type="button" className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-800">
                              <MoreVertical className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-slate-400">
                        No leads found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-slate-200/80 bg-slate-50/50 px-4 py-3 text-[11px] font-semibold text-slate-500">
              <p>
                Showing <span className="font-bold text-slate-900">{filteredLeads.length}</span> of{" "}
                <span className="font-bold text-slate-900">{leadsData.length}</span> leads
              </p>
              <div className="flex items-center gap-1.5">
                <button type="button" disabled className="rounded-md border border-slate-200 bg-white p-1 text-slate-400 disabled:opacity-40">
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>
                <button type="button" className="rounded-md border border-slate-200 bg-white p-1 text-slate-700 hover:bg-slate-50">
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default ProductPreview;