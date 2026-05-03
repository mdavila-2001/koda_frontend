<!DOCTYPE html>

<html class="dark" lang="es"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>KODA - Kanban Board</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-bright": "#343a3e",
                        "outline": "#87929a",
                        "outline-variant": "#3e484f",
                        "on-background": "#dee3e8",
                        "inverse-surface": "#dee3e8",
                        "tertiary": "#ffc176",
                        "surface-container-lowest": "#0a0f12",
                        "error-container": "#93000a",
                        "primary": "#8ed5ff",
                        "on-secondary-container": "#aeb9d0",
                        "surface-container-high": "#252b2e",
                        "on-tertiary-container": "#613b00",
                        "surface-dim": "#0f1418",
                        "surface-container-highest": "#303539",
                        "on-tertiary-fixed-variant": "#653e00",
                        "secondary-fixed-dim": "#bcc7de",
                        "surface-variant": "#303539",
                        "surface": "#0f1418",
                        "secondary": "#bcc7de",
                        "on-primary": "#00354a",
                        "on-error-container": "#ffdad6",
                        "primary-fixed-dim": "#7bd0ff",
                        "on-error": "#690005",
                        "secondary-fixed": "#d8e3fb",
                        "background": "#0f1418",
                        "on-primary-fixed": "#001e2c",
                        "on-primary-container": "#004965",
                        "tertiary-fixed-dim": "#ffb960",
                        "tertiary-container": "#f1a02b",
                        "tertiary-fixed": "#ffddb8",
                        "inverse-on-surface": "#2c3135",
                        "primary-fixed": "#c4e7ff",
                        "error": "#ffb4ab",
                        "surface-container": "#1b2024",
                        "on-secondary-fixed": "#111c2d",
                        "on-tertiary-fixed": "#2a1700",
                        "surface-container-low": "#171c20",
                        "on-tertiary": "#472a00",
                        "on-surface-variant": "#bdc8d1",
                        "on-primary-fixed-variant": "#004c69",
                        "secondary-container": "#3e495d",
                        "on-secondary-fixed-variant": "#3c475a",
                        "on-secondary": "#263143",
                        "primary-container": "#38bdf8",
                        "inverse-primary": "#00668a",
                        "on-surface": "#dee3e8",
                        "surface-tint": "#7bd0ff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "sm": "8px",
                        "unit": "4px",
                        "md": "16px",
                        "lg": "24px",
                        "gutter": "20px",
                        "xl": "32px",
                        "margin": "24px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "body-lg": ["Inter"],
                        "h1": ["Inter"],
                        "h2": ["Inter"],
                        "h3": ["Inter"],
                        "label-md": ["Inter"],
                        "code": ["monospace"],
                        "body-md": ["Inter"]
                    },
                    "fontSize": {
                        "body-lg": ["16px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}],
                        "h1": ["36px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "h2": ["24px", {"lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "h3": ["20px", {"lineHeight": "1.4", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "label-md": ["12px", {"lineHeight": "1", "letterSpacing": "0.02em", "fontWeight": "500"}],
                        "code": ["13px", {"lineHeight": "1.5", "fontWeight": "400"}],
                        "body-md": ["14px", {"lineHeight": "1.5", "letterSpacing": "0", "fontWeight": "400"}]
                    }
                }
            }
        }
    </script>
<style>
        .kanban-scroll::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        .kanban-scroll::-webkit-scrollbar-track {
            background: transparent;
        }
        .kanban-scroll::-webkit-scrollbar-thumb {
            background-color: #1E293B;
            border-radius: 20px;
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md min-h-screen flex overflow-hidden">
<!-- Background Image Overlay -->
<div class="fixed inset-0 z-0 pointer-events-none opacity-5 mix-blend-overlay" data-alt="subtle abstract geometric dark background pattern for technical interface" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdaEQm6Kvk-KAHOH2Y9RQ9bij3iwE-AXMJ-53pXAxo0XfNUtThJd-SgsN6SOUiSF2UBAWa2-J6Sy1q_UexdXIBqB21GnutnBa1d6yIPOTLmjfAFYyzFuNeRNl5IzfwXSaL7CP-LtxJBscEpdlCIE3U7PG9udNy6Oox_8dW4qTV-iw5rdpOFdga6hkVAeysOewJhKQf4lycr01sQHcOknoxk06eCl8__nwyoQdGoJrTi2a217AbIp7T7F8h2XrULpnVNWmpagavlDI'); background-size: cover; background-position: center;"></div>
<!-- SideNavBar (Generated from JSON) -->
<nav class="fixed left-0 top-0 bottom-0 z-50 flex flex-col py-6 bg-slate-900 dark:bg-[#111827] h-screen w-64 border-r border-[#1E293B] shadow-none">
<div class="px-6 mb-8 flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-[#38BDF8]/20 flex items-center justify-center border border-[#38BDF8]/30">
<span class="material-symbols-outlined text-[#38BDF8]" data-icon="token">token</span>
</div>
<div>
<h1 class="text-2xl font-black tracking-tighter text-[#38BDF8] font-h2 text-h2 m-0 p-0 leading-none">KODA</h1>
<p class="text-[10px] text-slate-400 font-label-md mt-1 uppercase tracking-wider">Technical Management</p>
</div>
</div>
<div class="px-4 mb-6">
<button class="w-full bg-[#38BDF8] text-[#0F172A] font-label-md text-label-md py-2.5 rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all">
<span class="material-symbols-outlined text-sm" data-icon="add">add</span>
                New Project
            </button>
</div>
<div class="flex-1 flex flex-col gap-1 px-3">
<a class="flex items-center gap-3 px-4 py-2 text-[#38BDF8] bg-[#38BDF8]/10 rounded-lg border-l-2 border-[#38BDF8] transition-all duration-200 ease-in-out font-label-md text-label-md" href="#">
<span class="material-symbols-outlined text-lg" data-icon="view_kanban">view_kanban</span>
                Board
            </a>
<a class="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-slate-100 transition-colors hover:bg-[#1E293B] hover:text-white rounded-lg border-l-2 border-transparent transition-all duration-200 ease-in-out font-label-md text-label-md" href="#">
<span class="material-symbols-outlined text-lg" data-icon="list_alt">list_alt</span>
                Backlog
            </a>
<a class="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-slate-100 transition-colors hover:bg-[#1E293B] hover:text-white rounded-lg border-l-2 border-transparent transition-all duration-200 ease-in-out font-label-md text-label-md" href="#">
<span class="material-symbols-outlined text-lg" data-icon="analytics">analytics</span>
                Analytics
            </a>
<a class="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-slate-100 transition-colors hover:bg-[#1E293B] hover:text-white rounded-lg border-l-2 border-transparent transition-all duration-200 ease-in-out font-label-md text-label-md" href="#">
<span class="material-symbols-outlined text-lg" data-icon="group">group</span>
                Team
            </a>
</div>
<div class="mt-auto flex flex-col gap-1 px-3 pt-4 border-t border-[#1E293B]">
<a class="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-slate-100 transition-colors hover:bg-[#1E293B] hover:text-white rounded-lg border-l-2 border-transparent transition-all duration-200 ease-in-out font-label-md text-label-md" href="#">
<span class="material-symbols-outlined text-lg" data-icon="settings">settings</span>
                Settings
            </a>
<a class="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-slate-100 transition-colors hover:bg-[#1E293B] hover:text-white rounded-lg border-l-2 border-transparent transition-all duration-200 ease-in-out font-label-md text-label-md" href="#">
<span class="material-symbols-outlined text-lg" data-icon="help_outline">help_outline</span>
                Support
            </a>
</div>
</nav>
<!-- Main Content Canvas -->
<main class="flex-1 ml-64 p-lg h-screen flex flex-col z-10 relative">
<!-- Board Header (Contextual) -->
<header class="flex justify-between items-center mb-lg shrink-0">
<div>
<h2 class="font-h2 text-h2 text-on-surface">Core Infrastructure Pivot</h2>
<p class="font-body-md text-body-md text-on-surface-variant mt-1">Sprint 42 • Q3 Roadmap</p>
</div>
<div class="flex items-center gap-sm">
<div class="flex -space-x-2 mr-4">
<img alt="User Avatar" class="w-8 h-8 rounded-full border-2 border-background z-30" data-alt="small circular portrait of a professional female engineer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuICGPcoUVEgvxHC9yjKcH7vIXrwAP9mxhzjoJyKUxUafqm2Z8ZYR3zH3ss2Bp_1VyO6-mQfaTJsj-vc8-LigradLzkIolHHjQKZSGnLUgHkXZrtp_lRlmmcBQhY7lvtq3W1f_cihtdy_uc21mrY-ujTdpkFkBICe4KLqdCvg0S_-rzv9bfEvILy50ywvt3tsIZQJZfFripUd4-S59Dg-PakoDiEzcmIRj67HSwzp6gcgEIFNXyqSdhbVy2MspdgGPHxr08mXTJUQ"/>
<img alt="User Avatar" class="w-8 h-8 rounded-full border-2 border-background z-20" data-alt="small circular portrait of a professional male developer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC40I5E6m53wHrDL4voIQXysu9A6LbhmQgVJ3cL1pYgJX9GvT-cfWakJCsrXMNrtVkDPwcvsUtWDpJ1PY4Efbwh6b6Yfuv0kg9H7ptqR2Zx_hHZg1yqxXbpfIrVGm-umTNfHQGbCRLrqKECRQFAiAESebfBH3jic_6rZwVUsq5uCUAb2jtrZ2xjKiW2hRcjToGm0T9oQOdrwdM3iSG8p_FQPH926hc0lfbvX-CI2QXKvc9a0FZQaLwfGWsli2LTA83cHbac1-k0M6Q"/>
<div class="w-8 h-8 rounded-full border-2 border-background bg-surface-container flex items-center justify-center text-[10px] font-label-md text-primary z-10">+3</div>
</div>
<button class="p-2 rounded-lg bg-surface-container border border-outline-variant text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center">
<span class="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span>
</button>
</div>
</header>
<!-- Kanban Grid -->
<div class="flex-1 overflow-hidden">
<div class="flex gap-lg h-full overflow-x-auto kanban-scroll pb-4">
<!-- Pending Column -->
<div class="flex-none w-[340px] flex flex-col bg-[#111827] rounded-xl border border-[#1E293B] shadow-[0_8px_24px_-4px_rgba(2,6,23,0.5)]">
<div class="p-md border-b border-[#1E293B] flex justify-between items-center shrink-0">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-[#94A3B8]"></span>
<h3 class="font-label-md text-label-md text-[#94A3B8] uppercase tracking-wider">Pending</h3>
<span class="bg-[#1E293B] text-[#94A3B8] text-[10px] px-2 py-0.5 rounded-full font-code">3</span>
</div>
<button class="text-on-surface-variant hover:text-on-surface">
<span class="material-symbols-outlined text-sm" data-icon="more_horiz">more_horiz</span>
</button>
</div>
<div class="p-sm flex-1 overflow-y-auto kanban-scroll flex flex-col gap-sm">
<!-- Card 1: Blocked / No Assignee -->
<div class="group relative bg-[#0F172A] border border-[#1E293B] rounded-lg p-md hover:border-[#38BDF8]/50 transition-colors cursor-grab">
<div class="flex justify-between items-start mb-3">
<span class="bg-[#93000a]/20 text-[#ffb4ab] border border-[#93000a]/50 text-[10px] px-2 py-1 rounded font-label-md">CRITICAL</span>
<span class="text-[#87929a] font-code text-[11px]">KOD-142</span>
</div>
<h4 class="font-body-md text-body-md text-on-surface font-semibold mb-2 leading-tight">Migrate Auth Service to OAuth2.1</h4>
<p class="font-body-md text-[12px] text-on-surface-variant line-clamp-2 mb-4">Implement PKCE flow and deprecate legacy implicit grant types across all client applications.</p>
<div class="flex justify-between items-center mt-auto pt-3 border-t border-[#1E293B]">
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-[14px]" data-icon="calendar_today">calendar_today</span>
<span class="text-[11px] font-code">Oct 12</span>
</div>
<!-- Blocked Indicator Logic -->
<div class="relative group/tooltip flex items-center justify-center w-6 h-6 rounded-full bg-surface-container border border-error/30 text-error">
<span class="material-symbols-outlined text-[14px]" data-icon="lock">lock</span>
<!-- Tooltip -->
<div class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover/tooltip:block w-max bg-inverse-surface text-background font-label-md text-[10px] px-2 py-1 rounded shadow-lg z-20 whitespace-nowrap">
                                        Asigna un responsable primero
                                        <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-inverse-surface"></div>
</div>
</div>
</div>
</div>
<!-- Card 2: Normal -->
<div class="bg-[#0F172A] border border-[#1E293B] rounded-lg p-md hover:border-primary/50 transition-colors cursor-grab">
<div class="flex justify-between items-start mb-3">
<span class="bg-primary-container/10 text-primary border border-primary-container/20 text-[10px] px-2 py-1 rounded font-label-md">INFRA</span>
<span class="text-[#87929a] font-code text-[11px]">KOD-156</span>
</div>
<h4 class="font-body-md text-body-md text-on-surface font-semibold mb-2 leading-tight">Setup Redis Cluster for Rate Limiting</h4>
<div class="flex justify-between items-center mt-4 pt-3 border-t border-[#1E293B]">
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-[14px]" data-icon="format_list_bulleted">format_list_bulleted</span>
<span class="text-[11px] font-code">0/3</span>
</div>
<div class="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-label-md text-[10px] border border-outline-variant">
                                    JD
                                </div>
</div>
</div>
</div>
</div>
<!-- In Progress Column -->
<div class="flex-none w-[340px] flex flex-col bg-[#111827] rounded-xl border border-[#1E293B] shadow-[0_8px_24px_-4px_rgba(2,6,23,0.5)]">
<div class="p-md border-b border-[#1E293B] flex justify-between items-center shrink-0">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
<h3 class="font-label-md text-label-md text-[#F59E0B] uppercase tracking-wider">In Progress</h3>
<span class="bg-[#1E293B] text-[#F59E0B] text-[10px] px-2 py-0.5 rounded-full font-code">2</span>
</div>
<button class="text-on-surface-variant hover:text-on-surface">
<span class="material-symbols-outlined text-sm" data-icon="more_horiz">more_horiz</span>
</button>
</div>
<div class="p-sm flex-1 overflow-y-auto kanban-scroll flex flex-col gap-sm">
<!-- Card 3 -->
<div class="bg-[#0F172A] border border-[#38BDF8]/30 rounded-lg p-md hover:border-[#38BDF8] transition-colors cursor-grab relative overflow-hidden">
<!-- Active indicator line -->
<div class="absolute left-0 top-0 bottom-0 w-1 bg-[#F59E0B]"></div>
<div class="flex justify-between items-start mb-3">
<span class="bg-tertiary-container/10 text-tertiary border border-tertiary-container/20 text-[10px] px-2 py-1 rounded font-label-md">BACKEND</span>
<span class="text-[#87929a] font-code text-[11px]">KOD-132</span>
</div>
<h4 class="font-body-md text-body-md text-on-surface font-semibold mb-2 leading-tight">Optimize GraphQL Resolver N+1 Issues</h4>
<div class="w-full bg-[#1E293B] rounded-full h-1.5 mt-4 mb-2">
<div class="bg-[#F59E0B] h-1.5 rounded-full" style="width: 65%"></div>
</div>
<div class="flex justify-between items-center mt-3 pt-3 border-t border-[#1E293B]">
<div class="flex items-center gap-3">
<div class="flex items-center gap-1 text-on-surface-variant">
<span class="material-symbols-outlined text-[14px]" data-icon="chat_bubble_outline">chat_bubble_outline</span>
<span class="text-[11px] font-code">4</span>
</div>
<div class="flex items-center gap-1 text-[#38BDF8]">
<span class="material-symbols-outlined text-[14px]" data-icon="commit">commit</span>
<span class="text-[11px] font-code">2</span>
</div>
</div>
<img alt="User Avatar" class="w-6 h-6 rounded-full border border-outline-variant" data-alt="small circular portrait of a professional female engineer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuohnzi5mL1GVeNu5DTf8lLU7U1Ro3-j16ebIsWGNGyo6VjlmolMGJS-OR-DYjiC9TXbNclaBLFn7HXRLUzVr9DWLmvTBltWVaBdAIb0oBxSfXyntugAfF0VFv5gDxD7MaY_W2TkbPtGLpJ-SxSOxvs7dweC8po4BZmvho_MddFbsG7Vjr5vP8co5qs2wBmsjMpJkIPnr8i050v_cGfG5-ZUEBxK5Na5GF8nXbomQW47Bv_2c7Ag7LdkzCqV3ACrx2VMgRqvehEQM"/>
</div>
</div>
</div>
</div>
<!-- Completed Column -->
<div class="flex-none w-[340px] flex flex-col bg-[#111827] rounded-xl border border-[#1E293B] shadow-[0_8px_24px_-4px_rgba(2,6,23,0.5)] opacity-80">
<div class="p-md border-b border-[#1E293B] flex justify-between items-center shrink-0">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-[#10B981]"></span>
<h3 class="font-label-md text-label-md text-[#10B981] uppercase tracking-wider">Completed</h3>
<span class="bg-[#1E293B] text-[#10B981] text-[10px] px-2 py-0.5 rounded-full font-code">5</span>
</div>
<button class="text-on-surface-variant hover:text-on-surface">
<span class="material-symbols-outlined text-sm" data-icon="more_horiz">more_horiz</span>
</button>
</div>
<div class="p-sm flex-1 overflow-y-auto kanban-scroll flex flex-col gap-sm">
<!-- Card 4 -->
<div class="bg-[#0F172A]/50 border border-[#1E293B] rounded-lg p-md cursor-default">
<div class="flex justify-between items-start mb-3">
<span class="bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 text-[10px] px-2 py-1 rounded font-label-md flex items-center gap-1">
<span class="material-symbols-outlined text-[12px]" data-icon="check_circle">check_circle</span>
                                    DONE
                                </span>
<span class="text-[#87929a] font-code text-[11px] line-through decoration-outline-variant">KOD-098</span>
</div>
<h4 class="font-body-md text-body-md text-on-surface-variant font-semibold mb-2 leading-tight">Update Node.js Base Image to v20 LTS</h4>
<div class="flex justify-between items-center mt-4 pt-3 border-t border-[#1E293B]/50">
<div class="flex items-center gap-2 text-[#10B981]/70">
<span class="text-[11px] font-code">Merged 2d ago</span>
</div>
<div class="w-6 h-6 rounded-full bg-surface-variant flex items-center justify-center text-outline font-label-md text-[10px] border border-outline-variant/50">
                                    AK
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</body></html>