<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Dashboard</title>
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
                        "on-error-container": "#ffdad6",
                        "secondary": "#bcc7de",
                        "on-primary": "#00354a",
                        "primary-fixed": "#c4e7ff",
                        "on-tertiary-fixed-variant": "#653e00",
                        "inverse-primary": "#00668a",
                        "primary-container": "#38bdf8",
                        "surface-container-highest": "#303539",
                        "surface-variant": "#303539",
                        "surface-tint": "#7bd0ff",
                        "primary-fixed-dim": "#7bd0ff",
                        "surface-dim": "#0f1418",
                        "primary": "#8ed5ff",
                        "tertiary": "#ffc176",
                        "on-primary-fixed-variant": "#004c69",
                        "outline": "#87929a",
                        "error-container": "#93000a",
                        "error": "#ffb4ab",
                        "on-error": "#690005",
                        "secondary-fixed-dim": "#bcc7de",
                        "on-tertiary-container": "#613b00",
                        "outline-variant": "#3e484f",
                        "surface-container-high": "#252b2e",
                        "on-primary-container": "#004965",
                        "tertiary-container": "#f1a02b",
                        "on-primary-fixed": "#001e2c",
                        "tertiary-fixed-dim": "#ffb960",
                        "on-tertiary": "#472a00",
                        "background": "#0f1418",
                        "on-background": "#dee3e8",
                        "inverse-on-surface": "#2c3135",
                        "on-secondary-container": "#aeb9d0",
                        "on-secondary-fixed": "#111c2d",
                        "surface-bright": "#343a3e",
                        "secondary-container": "#3e495d",
                        "secondary-fixed": "#d8e3fb",
                        "on-surface": "#dee3e8",
                        "on-secondary-fixed-variant": "#3c475a",
                        "surface-container-lowest": "#0a0f12",
                        "surface-container-low": "#171c20",
                        "on-tertiary-fixed": "#2a1700",
                        "on-surface-variant": "#bdc8d1",
                        "inverse-surface": "#dee3e8",
                        "tertiary-fixed": "#ffddb8",
                        "surface-container": "#1b2024",
                        "on-secondary": "#263143",
                        "surface": "#0f1418"
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    spacing: {
                        "margin": "24px",
                        "xs": "4px",
                        "gutter": "20px",
                        "unit": "4px",
                        "sm": "8px",
                        "md": "16px",
                        "lg": "24px",
                        "xl": "32px"
                    },
                    fontFamily: {
                        "h3": ["Inter"],
                        "code": ["monospace"],
                        "h2": ["Inter"],
                        "body-lg": ["Inter"],
                        "label-md": ["Inter"],
                        "body-md": ["Inter"],
                        "h1": ["Inter"]
                    },
                    fontSize: {
                        "h3": ["20px", { lineHeight: "1.4", letterSpacing: "-0.01em", fontWeight: "600" }],
                        "code": ["13px", { lineHeight: "1.5", fontWeight: "400" }],
                        "h2": ["24px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
                        "body-lg": ["16px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
                        "label-md": ["12px", { lineHeight: "1", letterSpacing: "0.02em", fontWeight: "500" }],
                        "body-md": ["14px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
                        "h1": ["36px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .material-symbols-outlined[data-weight="fill"] {
            font-variation-settings: 'FILL' 1;
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md min-h-screen flex antialiased relative">
<div class="absolute inset-0 z-0 opacity-5 pointer-events-none" data-alt="Subtle, dark technical background with geometric lines and data points representing a network or grid pattern." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3jHLrCR6lHJG1X19bhOzOxsyx8uG1JaCS4OO7IZN76EY3nBNmnWaQEasrMCQzMpJ4XfoEQ8XuqIHnfXBaW4rv6NEgLXE6YEjRO8rByZWULS7jvaiwVfaoy1MPsjsho-gpQcRgDvBLkbOFjUq3mAT12oOkwLgKWSYjxu7FYA0pxhbJeTWGuXD2ibeXLzAJIrMDgpYXKdvC_34qrZAiGDcH5dUzZoUKK8KkXJo62CS72sQDC70sjX4PmRlrr5HnUT-71cjf_jpn3ug'); background-size: cover; background-position: center;"></div>
<aside class="fixed left-0 top-0 h-screen w-[240px] border-r border-slate-800/50 bg-slate-900 dark:bg-[#111827] flex flex-col py-8 px-4 gap-2 z-10 shadow-2xl shadow-black/20">
<div class="mb-8 px-4 flex items-center gap-3">
<img alt="User Avatar" class="w-10 h-10 rounded-full border border-slate-700 object-cover" data-alt="Small, professional avatar portrait of a person against a neutral background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt-18H4ESuuQFkmwq1mLcgctDJ_HV0dbcJKze1qaY2_tNhzmTXxMwE1spRnxH9BZwANqz__2f9JwAUieJw1YnB2tEoNsznUoHa3i-kqzJgQFV49wjDY7hEyiMrbNLY5h4kEqLMBF3uEECvTyAFjXXQ4lca2VR_ABmsuuTLulP2Lha7S-3MXhoZC9EvmXFqnz1pVDevndlaAukYqkNEtGx7rAn069W5yMBtPDcPjBTSRDGKZrzOq9olokBvytuP6FucALWfiuhN26I"/>
<div>
<div class="text-2xl font-black tracking-tighter text-sky-400 font-h2 text-h2 leading-none">KODA</div>
<div class="font-label-md text-label-md text-slate-400 mt-1">Technical workspace</div>
</div>
</div>
<nav class="flex flex-col gap-1 w-full">
<a class="flex items-center gap-3 px-4 py-3 text-sky-400 font-semibold bg-sky-400/5 rounded-lg group transition-transform duration-150 ease-out active:scale-[0.98]" href="#">
<span class="material-symbols-outlined text-xl" data-icon="dashboard">dashboard</span>
<span class="font-body-md text-body-md">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/40 rounded-lg group transition-all duration-150 ease-out active:scale-[0.98]" href="#">
<span class="material-symbols-outlined text-xl" data-icon="folder">folder</span>
<span class="font-body-md text-body-md">Projects</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/40 rounded-lg group transition-all duration-150 ease-out active:scale-[0.98]" href="#">
<span class="material-symbols-outlined text-xl" data-icon="groups">groups</span>
<span class="font-body-md text-body-md">Team</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/40 rounded-lg group transition-all duration-150 ease-out active:scale-[0.98]" href="#">
<span class="material-symbols-outlined text-xl" data-icon="monitoring">monitoring</span>
<span class="font-body-md text-body-md">Analytics</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/40 rounded-lg group transition-all duration-150 ease-out active:scale-[0.98]" href="#">
<span class="material-symbols-outlined text-xl" data-icon="settings">settings</span>
<span class="font-body-md text-body-md">Settings</span>
</a>
</nav>
</aside>
<main class="ml-[240px] flex-1 p-8 xl:p-12 z-10">
<header class="mb-10 flex justify-between items-end">
<div>
<h1 class="font-h1 text-h1 text-on-surface mb-2">Dashboard</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">Overview of your active technical projects.</p>
</div>
<button class="bg-primary-container text-[#0F172A] font-label-md text-label-md px-6 py-3 rounded hover:brightness-110 transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-sm" data-icon="add">add</span>
                New Project
            </button>
</header>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div class="bg-surface-container-high border border-outline-variant/30 rounded-lg p-6 shadow-[0_8px_24px_rgba(2,6,23,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(2,6,23,0.6)] transition-all duration-300 cursor-pointer group flex flex-col h-full">
<div class="flex justify-between items-start mb-4">
<div class="w-10 h-10 rounded bg-primary-container/10 flex items-center justify-center text-primary-container">
<span class="material-symbols-outlined" data-icon="database">database</span>
</div>
<span class="bg-primary-container/10 text-primary-container px-2.5 py-1 rounded-full font-label-md text-[10px] uppercase tracking-wider">Active</span>
</div>
<h3 class="font-h3 text-h3 text-on-surface mb-2 group-hover:text-primary-container transition-colors">Core API V2</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2 flex-grow">Refactoring the main backend services to support higher throughput and reduced latency for enterprise clients.</p>
<div class="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
<span class="font-code text-code text-secondary">Oct 12, 2023</span>
<div class="flex -space-x-2">
<img alt="Team member" class="w-6 h-6 rounded-full border-2 border-surface-container-high object-cover" data-alt="Small circular portrait of a young woman smiling slightly." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNuHe-ojMkKErVIXo9rskgy9_nLT4YrR1BoK1qzJTc1TKQA6r4KtWE98nnzGEIQJq0Hbn99UCNn2RMHGb5n4lNNSxGnHrxAyjoLYJhJ8AV_XR-lrlzMDaOvpW_DlGq1lEtkH43VN2gxw6TZ3bK7u6S9Uv9CSbdc5jCzcnZtrpWC3sX7q_VOxf-5FnSz37B11YwKo8qN9cAYJokZmTwKhVFcn8X9Y-RdBuZ5VcUOM2JOopyATYGSI6_6IDYqZVc2sodZx45b0OeJQk"/>
<img alt="Team member" class="w-6 h-6 rounded-full border-2 border-surface-container-high object-cover" data-alt="Small circular portrait of a man with short hair and glasses." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUaGqtHhS7vgHNkV9b0SUsuQYvu-mOjoOS1Y9F2RyEv4USMxagF65xKU5NVTY8R4Yi_abf8-I2HKNX9PjWx2pdTUOVrA5xe9E7G11SQhPKgsznEAStxnsfOcqewq010UiGD8xS1LLTPtaFQY-YhGvfwI4jRzDe24mnuvQSBCMlFDrO6CtMUGNgJZFKuL7pfc-xz2uYoFUZT1YGrdMArGV51S_GRbUr9ozhbqtvW_ZO0oxRtldbNIWPMeXLp_RKdJBBeEFywTG4E7g"/>
</div>
</div>
</div>
<div class="bg-surface-container-high border border-outline-variant/30 rounded-lg p-6 shadow-[0_8px_24px_rgba(2,6,23,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(2,6,23,0.6)] transition-all duration-300 cursor-pointer group flex flex-col h-full">
<div class="flex justify-between items-start mb-4">
<div class="w-10 h-10 rounded bg-tertiary-container/10 flex items-center justify-center text-tertiary-container">
<span class="material-symbols-outlined" data-icon="view_kanban">view_kanban</span>
</div>
<span class="bg-tertiary-container/10 text-tertiary-container px-2.5 py-1 rounded-full font-label-md text-[10px] uppercase tracking-wider">In Progress</span>
</div>
<h3 class="font-h3 text-h3 text-on-surface mb-2 group-hover:text-tertiary-container transition-colors">Frontend Migration</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2 flex-grow">Moving legacy React components to the new design system framework based on updated tokens.</p>
<div class="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
<span class="font-code text-code text-secondary">Nov 05, 2023</span>
<div class="flex -space-x-2">
<img alt="Team member" class="w-6 h-6 rounded-full border-2 border-surface-container-high object-cover" data-alt="Small circular portrait of a woman with dark hair." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDx7lEuw9eBaqB4l8M6-yqb6O_VdU0fvRODH7oA-0xOSvMEgHyoLX8aMDIwIgpvUFquaGrDvOc9CRl0a_-Oo4WjyZLEG2LUuTbPf5l7PMMtxZHB95n6hQRw_vzFi5dDLNTFZGw45VYdsUEX9IsA3LsvzxHiqMWmgAsZJARKGMXOO5kbui08DwipAoaG1S2F1We9jRnYgi1ime0q43JLiiw0NDARHAAO0lRWEsZXW-rZtse008emr3uUW4tWIMCu77wV_UyvPcLt-8"/>
</div>
</div>
</div>
<div class="bg-surface-container-high border border-outline-variant/30 rounded-lg p-6 shadow-[0_8px_24px_rgba(2,6,23,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(2,6,23,0.6)] transition-all duration-300 cursor-pointer group flex flex-col h-full">
<div class="flex justify-between items-start mb-4">
<div class="w-10 h-10 rounded bg-error-container/10 flex items-center justify-center text-error">
<span class="material-symbols-outlined" data-icon="security">security</span>
</div>
<span class="bg-error-container/10 text-error px-2.5 py-1 rounded-full font-label-md text-[10px] uppercase tracking-wider">Review</span>
</div>
<h3 class="font-h3 text-h3 text-on-surface mb-2 group-hover:text-error transition-colors">Auth Gateway Update</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2 flex-grow">Implementing strict OAuth2 flows and revamping token validation to patch recent vulnerability reports.</p>
<div class="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
<span class="font-code text-code text-secondary">Dec 01, 2023</span>
<div class="flex -space-x-2">
<img alt="Team member" class="w-6 h-6 rounded-full border-2 border-surface-container-high object-cover" data-alt="Small circular portrait of a man looking thoughtful." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoFp_XVSkDaJdV8IGA5CIxgsa8ePSuLbvEGnyIKteskBKVmxMAy3o76hvpeW7Z9dQ6CQRZvQVxp1YYQBemMbJK11-ilwygUMhIIdJSDxwxAPupRwB75FYBTK76ByJdDNdE9KPMQWayWbrxeVLJKiW2u4RZywPRcwNhxr_1VvLzjpUJkbF-S0rFuyvQRBNwxrg5z9KAZ_dDmXWBVCq6hH4jqHR55AGZ9oLUJqJsWT_Pa8b9nbnVPucZH-6kDsZofGOsHS5bHxrb128"/>
<img alt="Team member" class="w-6 h-6 rounded-full border-2 border-surface-container-high object-cover" data-alt="Small circular portrait of a young woman smiling slightly." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAacezELgFoUzRJUTF-2n_20QWXStW6YbZHdCfBorKIROko0sOPTWdaCTolmbDjPsjEr092XrFXOTrhUFhZ2V86c9nu0ujgd5gmOlrudTj4pfiRr_PgLhlNZdJjwzDDc10AOUDX8koD4PlK3LGoyIHB0YTf9aiHfDhYIv01d0SKmli6gxqi4kZyc3VUnAe6GmLoGknD1hwMuWQr9gKPd4MGlL8qjnEHj3AriWT6wOikg_52sSqQltaag2Wi4GEyXpZm-vAMMBT_U8g"/>
<div class="w-6 h-6 rounded-full border-2 border-surface-container-high bg-surface-bright flex items-center justify-center text-[10px] text-on-surface-variant">+2</div>
</div>
</div>
</div>
<div class="bg-surface-container-high border border-outline-variant/30 rounded-lg p-6 shadow-[0_8px_24px_rgba(2,6,23,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(2,6,23,0.6)] transition-all duration-300 cursor-pointer group flex flex-col h-full">
<div class="flex justify-between items-start mb-4">
<div class="w-10 h-10 rounded bg-secondary-container/30 flex items-center justify-center text-on-secondary-container">
<span class="material-symbols-outlined" data-icon="analytics">analytics</span>
</div>
<span class="bg-secondary-container/30 text-on-secondary-container px-2.5 py-1 rounded-full font-label-md text-[10px] uppercase tracking-wider">Planning</span>
</div>
<h3 class="font-h3 text-h3 text-on-surface mb-2 group-hover:text-secondary-fixed transition-colors">Data Pipeline V3</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2 flex-grow">Architecting new ETL processes to handle projected data growth and improve query performance for analytics team.</p>
<div class="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
<span class="font-code text-code text-secondary">Jan 15, 2024</span>
<div class="flex -space-x-2">
<img alt="Team member" class="w-6 h-6 rounded-full border-2 border-surface-container-high object-cover" data-alt="Small circular portrait of a man with short hair and glasses." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGjSCAEwN4pXHeNQsy0qUuVjLrxL7a1VYLRCbUHZvK-Vhy3WJilNII8p5NEa81DyZ3KnJ7fK0Hz0Y88GjQdlHHDLOmGMRe6ps8esiUEpA2suJKqCLZYFhoudMBB0LdbZqQyM7VK8W3qwCbt9DGnqyCZOuhLG2PLQ8b9OM2tWQBREZkrqb1hpMdWsMuYvU77h7wt1pZiLWqp5e0VHwzgJg4tqAbgNwKtc8dL20HaJaH0eSgcYazkXHic917FsKWJ7P6zSQXkQT0xKw"/>
</div>
</div>
</div>
<div class="bg-surface-container-high border border-outline-variant/30 rounded-lg p-6 shadow-[0_8px_24px_rgba(2,6,23,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(2,6,23,0.6)] transition-all duration-300 cursor-pointer group flex flex-col h-full md:col-span-2 lg:col-span-1">
<div class="flex justify-between items-start mb-4">
<div class="w-10 h-10 rounded border border-dashed border-outline-variant flex items-center justify-center text-outline">
<span class="material-symbols-outlined" data-icon="add">add</span>
</div>
</div>
<h3 class="font-h3 text-h3 text-on-surface mb-2 group-hover:text-primary-container transition-colors">Create Workspace</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">Initialize a new project environment with default CI/CD configurations.</p>
<div class="mt-auto pt-4 border-t border-transparent">
<span class="font-label-md text-label-md text-primary-container flex items-center gap-1 group-hover:underline">
                        Get Started <span class="material-symbols-outlined text-[14px]" data-icon="arrow_forward">arrow_forward</span>
</span>
</div>
</div>
</div>
</main>
</body></html>