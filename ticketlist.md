<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>KODA - Tickets</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "secondary-fixed": "#d8e3fb",
                        "on-primary-container": "#004965",
                        "surface-container-high": "#252b2e",
                        "surface": "#0f1418",
                        "tertiary-fixed-dim": "#ffb960",
                        "on-tertiary": "#472a00",
                        "primary-fixed-dim": "#7bd0ff",
                        "surface-container": "#1b2024",
                        "on-primary": "#00354a",
                        "surface-container-highest": "#303539",
                        "primary": "#8ed5ff",
                        "on-tertiary-fixed": "#2a1700",
                        "on-tertiary-container": "#613b00",
                        "primary-fixed": "#c4e7ff",
                        "surface-variant": "#303539",
                        "on-tertiary-fixed-variant": "#653e00",
                        "error-container": "#93000a",
                        "tertiary-fixed": "#ffddb8",
                        "on-error-container": "#ffdad6",
                        "inverse-primary": "#00668a",
                        "on-background": "#dee3e8",
                        "secondary": "#bcc7de",
                        "surface-container-lowest": "#0a0f12",
                        "on-secondary": "#263143",
                        "error": "#ffb4ab",
                        "surface-bright": "#343a3e",
                        "on-surface-variant": "#bdc8d1",
                        "secondary-container": "#3e495d",
                        "on-secondary-fixed-variant": "#3c475a",
                        "on-secondary-fixed": "#111c2d",
                        "background": "#0f1418",
                        "primary-container": "#38bdf8",
                        "surface-dim": "#0f1418",
                        "surface-container-low": "#171c20",
                        "secondary-fixed-dim": "#bcc7de",
                        "outline-variant": "#3e484f",
                        "on-surface": "#dee3e8",
                        "surface-tint": "#7bd0ff",
                        "on-secondary-container": "#aeb9d0",
                        "inverse-on-surface": "#2c3135",
                        "on-primary-fixed-variant": "#004c69",
                        "outline": "#87929a",
                        "inverse-surface": "#dee3e8",
                        "tertiary-container": "#f1a02b",
                        "on-primary-fixed": "#001e2c",
                        "tertiary": "#ffc176",
                        "on-error": "#690005"
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    spacing: {
                        "xl": "32px",
                        "md": "16px",
                        "xs": "4px",
                        "margin": "24px",
                        "unit": "4px",
                        "gutter": "20px",
                        "sm": "8px",
                        "lg": "24px"
                    },
                    fontFamily: {
                        "label-md": ["Inter"],
                        "h3": ["Inter"],
                        "h2": ["Inter"],
                        "h1": ["Inter"],
                        "body-md": ["Inter"],
                        "body-lg": ["Inter"],
                        "code": ["monospace"]
                    },
                    fontSize: {
                        "label-md": ["12px", { lineHeight: "1", letterSpacing: "0.02em", fontWeight: "500" }],
                        "h3": ["20px", { lineHeight: "1.4", letterSpacing: "-0.01em", fontWeight: "600" }],
                        "h2": ["24px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
                        "h1": ["36px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
                        "body-md": ["14px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
                        "body-lg": ["16px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
                        "code": ["13px", { lineHeight: "1.5", fontWeight: "400" }]
                    }
                }
            }
        }
    </script>
<style>
        body {
            background-color: #0F172A;
            background-image: radial-gradient(circle at top right, rgba(56, 189, 248, 0.03), transparent 40%),
                              radial-gradient(circle at bottom left, rgba(56, 189, 248, 0.02), transparent 40%);
            background-attachment: fixed;
        }
        /* Custom scrollbar for tables */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0F172A;
        }
        ::-webkit-scrollbar-thumb {
            background: #1E293B;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #334155;
        }
    </style>
</head>
<body class="text-on-surface antialiased flex h-screen overflow-hidden">
<!-- SideNavBar -->
<nav class="hidden md:flex flex-col h-screen py-8 gap-4 docked left-0 w-64 border-r bg-slate-950 border-slate-800 shadow-none text-sky-400 font-inter text-xs uppercase tracking-widest z-20 shrink-0">
<div class="px-6 mb-8 flex items-center gap-4">
<div class="w-10 h-10 rounded bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden">
<img alt="KODA System" class="w-full h-full object-cover" data-alt="A highly polished, abstract 3D rendering of the letter K, acting as a logo for a system called KODA. The design should feel precise, engineered, and technical, using a palette of deep slate blacks and vibrant neon sky blues. The lighting should be studio quality, highlighting the sleek edges of the form against a dark background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUPLARSq9UByQm5oiGKIG6NWNHGwn4OBSya_6f8Kwa5t6W4XM283mchXRODrr360gAqHPVA5U3yqAgXkAKXGL9W_ng-jFjavqPxUq-qTUspe9uxhnp3i1R6oczmgCaggdw4joNzlZJ1KBUO6PoKCyeuupoep4SGyBc1QqybKjZP9WkIvOBJRzVYV1F_F_KyQt2Mt8RWoP4wqmHXrud_I3SMSSzGs1WzkvDH7Kjq0OysMgKdL-FJav5GteOaNzvMO1mX_MY1R-B8EQ"/>
</div>
<div>
<div class="text-2xl font-bold text-white tracking-tighter">KODA</div>
<div class="text-[10px] text-slate-500 tracking-widest mt-0.5">Precision Ops</div>
</div>
</div>
<div class="flex-1 px-4 space-y-1">
<a class="flex items-center gap-3 px-4 py-3 rounded-md text-slate-500 hover:bg-slate-900/50 hover:text-slate-300 transition-all duration-200 cursor-pointer" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-md bg-slate-900 text-sky-400 border-r-2 border-sky-400 transition-all duration-200 cursor-pointer" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">confirmation_number</span>
<span>Tickets</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-md text-slate-500 hover:bg-slate-900/50 hover:text-slate-300 transition-all duration-200 cursor-pointer" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">inventory_2</span>
<span>Inventory</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-md text-slate-500 hover:bg-slate-900/50 hover:text-slate-300 transition-all duration-200 cursor-pointer" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">group</span>
<span>Team</span>
</a>
</div>
<div class="px-4 mt-auto">
<a class="flex items-center gap-3 px-4 py-3 rounded-md text-slate-500 hover:bg-slate-900/50 hover:text-slate-300 transition-all duration-200 cursor-pointer" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">settings</span>
<span>Settings</span>
</a>
</div>
</nav>
<!-- Main Canvas -->
<main class="flex-1 flex flex-col h-full overflow-hidden relative">
<!-- TopAppBar (Mobile Only - usually hidden on desktop when SideNav is present, but per instructions we keep the structure if needed, or suppress it. The prompt asked for a specific SaaS header, so we build the canvas header here.) -->
<header class="md:hidden flex justify-between items-center w-full px-6 h-16 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-10 shrink-0">
<div class="text-xl font-black tracking-tighter text-white">KODA</div>
<div class="flex items-center gap-4 text-slate-400">
<button class="hover:text-slate-200 transition-colors duration-200"><span class="material-symbols-outlined">notifications</span></button>
<button class="hover:text-slate-200 transition-colors duration-200"><span class="material-symbols-outlined">help</span></button>
<img alt="User profile" class="w-8 h-8 rounded-full border border-slate-700" data-alt="A professional headshot of a software engineer, slightly abstracted or stylized as an avatar. The lighting is moody and technical, emphasizing a calm, professional demeanor. The color palette incorporates cool tones, deep slates, and subtle blue highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUWPVRn9MJABfiuGzoY8hQ7Nb4V4PU8ckDFkXxZ88hPqoS-uRg7kABeWR10BMSvRfIYpuvU4zQqcI21HJq7BqayLUALB-pF_SdgfEhfhjEhyP3W-Miiqt82q1T0J_hUTlV1tJEhGQEW45EqP0ElDfjK2sooobr69KzAfEYcGhJRwp3MqgFus7gpHzZG7trr0Mc72GwAPnTfg4FgvSwa1AQSqNN6NKMQsARaDUp0Z9zV5N1KxaOIYbiIJbtJ_2EScDD7-5QLhr9RP0"/>
</div>
</header>
<!-- Page Content -->
<div class="flex-1 overflow-y-auto p-4 md:p-8 xl:p-12">
<div class="max-w-[1400px] mx-auto w-full flex flex-col gap-8 h-full">
<!-- Section Header -->
<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0">
<div>
<h1 class="font-h1 text-h1 text-white">Tickets</h1>
<p class="font-body-md text-body-md text-on-surface-variant mt-1">Manage and resolve active support requests.</p>
</div>
<button class="bg-primary-container text-[#0F172A] font-label-md text-label-md px-6 py-3 rounded hover:brightness-110 transition-all duration-200 flex items-center gap-2 active:scale-95 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
<span class="material-symbols-outlined text-[18px]">add</span>
                        New Ticket
                    </button>
</div>
<!-- Controls Bar (Search & Filters) -->
<div class="bg-[#111827] border border-[#1E293B] rounded-lg p-4 flex flex-col lg:flex-row gap-4 shrink-0 shadow-[0_4px_24px_rgba(2,6,23,0.5)]">
<div class="flex-1 relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input class="w-full bg-[#0F172A] border border-[#1E293B] rounded-md pl-10 pr-4 py-2.5 font-body-md text-body-md text-white placeholder-on-surface-variant focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all" placeholder="Search tickets by title, ID, or content..." type="text"/>
</div>
<div class="flex flex-wrap gap-3">
<div class="relative">
<select class="appearance-none bg-[#0F172A] border border-[#1E293B] rounded-md pl-4 pr-10 py-2.5 font-body-md text-body-md text-white focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all cursor-pointer min-w-[140px]">
<option value="">All Statuses</option>
<option value="pending">Pending</option>
<option value="in_progress">In Progress</option>
<option value="completed">Completed</option>
</select>
<span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]">expand_more</span>
</div>
<div class="relative">
<select class="appearance-none bg-[#0F172A] border border-[#1E293B] rounded-md pl-4 pr-10 py-2.5 font-body-md text-body-md text-white focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all cursor-pointer min-w-[140px]">
<option value="">Any Assignee</option>
<option value="me">Assigned to me</option>
<option value="team">My Team</option>
<option value="unassigned">Unassigned</option>
</select>
<span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]">expand_more</span>
</div>
<button class="bg-transparent border border-[#1E293B] text-white font-label-md text-label-md px-4 py-2.5 rounded-md hover:bg-[#1E293B]/50 transition-colors flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">filter_list</span>
                            More Filters
                        </button>
</div>
</div>
<!-- Data Table -->
<div class="flex-1 bg-[#111827] border border-[#1E293B] rounded-lg overflow-hidden flex flex-col shadow-[0_4px_24px_rgba(2,6,23,0.5)]">
<div class="overflow-x-auto flex-1">
<table class="w-full text-left border-collapse whitespace-nowrap min-w-[800px]">
<thead class="bg-[#0F172A] sticky top-0 z-10 border-b border-[#1E293B]">
<tr>
<th class="py-4 px-6 font-label-md text-label-md text-on-surface-variant font-medium tracking-wider uppercase w-[100px]">ID</th>
<th class="py-4 px-6 font-label-md text-label-md text-on-surface-variant font-medium tracking-wider uppercase w-2/5">Title</th>
<th class="py-4 px-6 font-label-md text-label-md text-on-surface-variant font-medium tracking-wider uppercase">Status</th>
<th class="py-4 px-6 font-label-md text-label-md text-on-surface-variant font-medium tracking-wider uppercase">Assignee</th>
<th class="py-4 px-6 font-label-md text-label-md text-on-surface-variant font-medium tracking-wider uppercase text-right">Last Updated</th>
</tr>
</thead>
<tbody class="divide-y divide-[#1E293B] bg-[#1E293B]/20">
<!-- Row 1 -->
<tr class="hover:bg-[#1E293B]/80 transition-colors group cursor-pointer">
<td class="py-4 px-6 font-code text-code text-on-surface-variant group-hover:text-primary transition-colors">TKT-8902</td>
<td class="py-4 px-6">
<div class="font-body-md text-body-md text-white font-medium truncate max-w-[400px]">Database migration failing on cluster C-Alpha</div>
<div class="font-code text-[11px] text-on-surface-variant mt-1 truncate max-w-[400px]">ERR_CONNECTION_REFUSED in production-db-01</div>
</td>
<td class="py-4 px-6">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F59E0B]/10 text-[#F59E0B] font-label-md text-[11px]">
<span class="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span>
                                            In Progress
                                        </span>
</td>
<td class="py-4 px-6">
<div class="flex items-center gap-3">
<img alt="Sarah Jenkins" class="w-6 h-6 rounded-full border border-[#334155]" data-alt="A small circular avatar showing a professional, minimalist geometric pattern replacing a human face, rendered in deep blues and slate grays. This represents a placeholder avatar for a tech professional in a dark-mode interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuARGUJAdqHy9lQDcs3Xfu9ILSU3hBiLLVmiHyq4q96I3ZSJZ7bE_9MmmFyG0PEfB87ws34w4rAYFR6UV66kXlEmSQFCjL4czBcOF-NqJhS9gPWxy6ZW3rU8cqJREsBEf40kDGi8LS6h3Z_evMkME8XVzSeYj9TclsOa6D9QzISMkMKcpcIjBihiTCjQy-ev3PsO9_BkmGuvpN8Itz4fYmSYCwWWiXoOxM6Y4x5gGQn85I-BWv77B0Xt0AWd6stUcQomH8cEXjqm_6k"/>
<span class="font-body-md text-body-md text-on-surface">Sarah Jenkins</span>
</div>
</td>
<td class="py-4 px-6 font-body-md text-body-md text-on-surface-variant text-right">
                                        10 mins ago
                                    </td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-[#1E293B]/80 transition-colors group cursor-pointer">
<td class="py-4 px-6 font-code text-code text-on-surface-variant group-hover:text-primary transition-colors">TKT-8901</td>
<td class="py-4 px-6">
<div class="font-body-md text-body-md text-white font-medium truncate max-w-[400px]">Implement OAuth2 flow for new enterprise clients</div>
<div class="font-code text-[11px] text-on-surface-variant mt-1 truncate max-w-[400px]">Feature Request - SSO Integration</div>
</td>
<td class="py-4 px-6">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#94A3B8]/10 text-[#94A3B8] font-label-md text-[11px]">
<span class="w-1.5 h-1.5 rounded-full bg-[#94A3B8]"></span>
                                            Pending
                                        </span>
</td>
<td class="py-4 px-6">
<div class="flex items-center gap-3">
<img alt="Marcus Kim" class="w-6 h-6 rounded-full border border-[#334155]" data-alt="A tiny circular profile picture indicating a user named Marcus. The image is an abstract composition of subtle gradients, using dark navy and icy blue to maintain the technical, calm atmosphere of the surrounding dashboard interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeTYyE0UmnguNazXWmTLvY3wS7j4mee8rYHafehV8VcNxbMuxCtmDzNU8yjkEzwOvl1WcVw230kmFYPFjqM1Qxzboa6diJNu2TWQEuOKveQlii55l5Z0OqqOM8qO814iLe41XJmZIy8RpNpzYxGz_-d_p6d9oiYx2nASyXiIOsKlYEJFPTmcKQ41-HGaWJJM7fc4y6THlTX-OWqHXizYvHOmmUMAHBB1-bHrEouiffca79_MRL4QlSLZ2fd_K-wN_Kg6m1HzNMIZk"/>
<span class="font-body-md text-body-md text-on-surface">Marcus Kim</span>
</div>
</td>
<td class="py-4 px-6 font-body-md text-body-md text-on-surface-variant text-right">
                                        2 hours ago
                                    </td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-[#1E293B]/80 transition-colors group cursor-pointer">
<td class="py-4 px-6 font-code text-code text-on-surface-variant group-hover:text-primary transition-colors">TKT-8899</td>
<td class="py-4 px-6">
<div class="font-body-md text-body-md text-white font-medium truncate max-w-[400px]">API Rate Limiting logic causing false positives</div>
<div class="font-code text-[11px] text-on-surface-variant mt-1 truncate max-w-[400px]">Bug - Core Services</div>
</td>
<td class="py-4 px-6">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#10B981]/10 text-[#10B981] font-label-md text-[11px]">
<span class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                                            Completed
                                        </span>
</td>
<td class="py-4 px-6">
<div class="flex items-center gap-3">
<div class="w-6 h-6 rounded-full border border-dashed border-[#334155] flex items-center justify-center bg-[#0F172A]">
<span class="material-symbols-outlined text-[14px] text-on-surface-variant">person_add</span>
</div>
<span class="font-body-md text-body-md text-on-surface-variant italic">Unassigned</span>
</div>
</td>
<td class="py-4 px-6 font-body-md text-body-md text-on-surface-variant text-right">
                                        Yesterday
                                    </td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination Footer (part of table container) -->
<div class="bg-[#0F172A] border-t border-[#1E293B] p-4 flex items-center justify-between shrink-0">
<span class="font-body-md text-body-md text-on-surface-variant">Showing 1-3 of 24 tickets</span>
<div class="flex gap-2">
<button class="w-8 h-8 rounded bg-[#1E293B]/50 text-on-surface-variant flex items-center justify-center border border-[#334155] cursor-not-allowed opacity-50">
<span class="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button class="w-8 h-8 rounded bg-[#1E293B] text-white flex items-center justify-center border border-[#334155] hover:border-primary transition-colors">
<span class="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div>
</main>
</body></html>