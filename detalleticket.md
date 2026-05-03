<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>KODA - Ticket Details</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-surface": "#dee3e8",
                        "primary-fixed": "#c4e7ff",
                        "tertiary-container": "#f1a02b",
                        "secondary": "#bcc7de",
                        "primary-container": "#38bdf8",
                        "on-secondary": "#263143",
                        "outline": "#87929a",
                        "surface-tint": "#7bd0ff",
                        "background": "#0f1418",
                        "inverse-primary": "#00668a",
                        "on-secondary-fixed-variant": "#3c475a",
                        "primary": "#8ed5ff",
                        "surface-container-lowest": "#0a0f12",
                        "on-primary-fixed": "#001e2c",
                        "on-surface-variant": "#bdc8d1",
                        "inverse-surface": "#dee3e8",
                        "surface-bright": "#343a3e",
                        "surface-container-low": "#171c20",
                        "surface-variant": "#303539",
                        "on-secondary-fixed": "#111c2d",
                        "tertiary-fixed": "#ffddb8",
                        "on-primary-container": "#004965",
                        "primary-fixed-dim": "#7bd0ff",
                        "on-tertiary": "#472a00",
                        "secondary-container": "#3e495d",
                        "tertiary-fixed-dim": "#ffb960",
                        "tertiary": "#ffc176",
                        "surface": "#0f1418",
                        "surface-dim": "#0f1418",
                        "error": "#ffb4ab",
                        "on-error-container": "#ffdad6",
                        "inverse-on-surface": "#2c3135",
                        "surface-container-high": "#252b2e",
                        "secondary-fixed": "#d8e3fb",
                        "on-tertiary-fixed": "#2a1700",
                        "on-primary": "#00354a",
                        "secondary-fixed-dim": "#bcc7de",
                        "outline-variant": "#3e484f",
                        "surface-container-highest": "#303539",
                        "surface-container": "#1b2024",
                        "on-secondary-container": "#aeb9d0",
                        "on-primary-fixed-variant": "#004c69",
                        "on-background": "#dee3e8",
                        "on-tertiary-container": "#613b00",
                        "on-error": "#690005",
                        "on-tertiary-fixed-variant": "#653e00",
                        "error-container": "#93000a"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "md": "16px",
                        "gutter": "20px",
                        "lg": "24px",
                        "unit": "4px",
                        "sm": "8px",
                        "margin": "24px",
                        "xl": "32px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "h3": ["Inter"],
                        "code": ["monospace"],
                        "h2": ["Inter"],
                        "body-md": ["Inter"],
                        "label-md": ["Inter"],
                        "body-lg": ["Inter"],
                        "h1": ["Inter"]
                    },
                    "fontSize": {
                        "h3": ["20px", { "lineHeight": "1.4", "letterSpacing": "-0.01em", "fontWeight": "600" }],
                        "code": ["13px", { "lineHeight": "1.5", "fontWeight": "400" }],
                        "h2": ["24px", { "lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600" }],
                        "body-md": ["14px", { "lineHeight": "1.5", "letterSpacing": "0", "fontWeight": "400" }],
                        "label-md": ["12px", { "lineHeight": "1", "letterSpacing": "0.02em", "fontWeight": "500" }],
                        "body-lg": ["16px", { "lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400" }],
                        "h1": ["36px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }]
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-background text-on-surface font-body-md text-body-md h-screen w-full overflow-hidden flex">
<nav class="bg-[#111827] text-[#38BDF8] font-['Inter'] text-sm font-medium docked left-0 h-full w-64 border-r border-[#1E293B] flex flex-col fixed left-0 top-0 pt-14 z-30 shrink-0">
<div class="px-6 pb-6">
<h2 class="text-h3 font-h3 text-on-surface">KODA Engineering</h2>
<p class="text-label-md font-label-md text-secondary mt-1">Technical Workspace</p>
</div>
<div class="flex-1 overflow-y-auto py-4 flex flex-col gap-2 px-3">
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#94A3B8] hover:bg-[#1E293B] hover:text-[#F8FAFC] transition-all duration-150" href="#">
<span class="material-symbols-outlined text-lg">grid_view</span>
                Dashboard
            </a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#38BDF8] border-r-2 border-[#38BDF8] bg-surface-container-low" href="#">
<span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1;">view_kanban</span>
                Boards
            </a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#94A3B8] hover:bg-[#1E293B] hover:text-[#F8FAFC] transition-all duration-150" href="#">
<span class="material-symbols-outlined text-lg">list_alt</span>
                Backlog
            </a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#94A3B8] hover:bg-[#1E293B] hover:text-[#F8FAFC] transition-all duration-150" href="#">
<span class="material-symbols-outlined text-lg">insights</span>
                Analytics
            </a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#94A3B8] hover:bg-[#1E293B] hover:text-[#F8FAFC] transition-all duration-150" href="#">
<span class="material-symbols-outlined text-lg">group</span>
                Team
            </a>
</div>
<div class="mt-auto border-t border-[#1E293B] p-3 flex flex-col gap-2">
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#94A3B8] hover:bg-[#1E293B] hover:text-[#F8FAFC] transition-all duration-150" href="#">
<span class="material-symbols-outlined text-lg">menu_book</span>
                Documentation
            </a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#94A3B8] hover:bg-[#1E293B] hover:text-[#F8FAFC] transition-all duration-150" href="#">
<span class="material-symbols-outlined text-lg">settings</span>
                Settings
            </a>
</div>
</nav>
<main class="flex-1 flex flex-col relative ml-64">
<header class="bg-[#0F172A] text-[#38BDF8] font-['Inter'] antialiased tracking-tight docked full-width top-0 border-b border-[#1E293B] flex justify-between items-center h-14 px-6 w-full sticky top-0 z-40">
<div class="flex items-center">
<span class="text-xl font-bold tracking-tighter text-[#F8FAFC]">KODA</span>
</div>
<div class="flex items-center gap-4">
<button class="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-200">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-200">
<span class="material-symbols-outlined">help</span>
</button>
<button class="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-200">
<span class="material-symbols-outlined">settings</span>
</button>
<div class="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-[#1E293B]">
<img alt="User profile" class="w-full h-full object-cover" data-alt="close-up portrait of a professional woman with dark hair in a studio setting with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3ESYCvj3pY301uBvJsfMrMRQZEznpQB04g3XbIps03DnU-D4I6S6rsBKVbB78WbrT7fd_WuGR76-JEDMtgINqH7eiGs_34hVice_Tzd0CCT2L2EOilIRw2AdDQMHH1kkBr0u0PkW4W7F_XoWd3Zh6xCKymfDE6m_p7GFLVzafLg0mtsvCD9Gtn9H8VnJYSodLG4QomnLTGURk8Y96Wz3Vp45dCBBVJr2O6aPq0zFHq2_F9coNU4qtvFzVxyk7aoXWYXhM66TaO6w"/>
</div>
</div>
</header>
<div class="flex-1 relative bg-[#0F172A] overflow-hidden">
<div class="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity" data-alt="abstract dark background showing a stylized view of earth from space at night with glowing city lights and network connections" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjsaCoijDs_zhFWPQA3BbE2HIXUThrjCzRBVmp00Kxj_j0zy_kKiNcyl5VE-1ptxHApkOFKssZIs1P1ZqOzymMDvJsCBLhKCZt1xb2d_PudaEjnj8IYa6fiNe8ifKfzDS4ayJRQlCeA4tZVtej-wnItBTDt5DSI90unFT7A_DO3gZRssswmoOWamkAVhXzWODbKTfAjpOJ87unRfoH93nPrBXYHFWECc1duBj9yOEhwazVhPc-XjU5B_AmP8BQZoTyBpmxfFZFX74');"></div>
<div class="absolute inset-0 bg-[#0F172A]/80 z-10 backdrop-blur-[2px]"></div>
<div class="absolute inset-0 bg-black/50 z-40 backdrop-blur-sm"></div>
<aside class="absolute right-0 top-0 h-full w-[440px] bg-[#111827] rounded-l-2xl shadow-[-16px_0_32px_rgba(2,6,23,0.8)] z-50 flex flex-col border-l border-outline-variant/30 transform transition-transform">
<div class="flex items-center justify-between p-6 border-b border-outline-variant/30">
<div class="flex items-center gap-3">
<span class="font-code text-code text-secondary px-2 py-1 bg-surface-variant/50 rounded border border-outline-variant/50">KDA-8092</span>
<div class="flex items-center gap-1 px-2 py-1 bg-tertiary-container/10 rounded border border-tertiary-container/20">
<div class="w-1.5 h-1.5 rounded-full bg-tertiary-container"></div>
<span class="font-label-md text-label-md text-tertiary-container uppercase tracking-widest">Pending</span>
</div>
</div>
<button class="text-on-surface-variant hover:text-on-surface p-1 rounded hover:bg-surface-variant/50 transition-colors">
<span class="material-symbols-outlined">close</span>
</button>
</div>
<div class="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
<div class="flex flex-col gap-2">
<label class="font-label-md text-label-md text-secondary">Title</label>
<input class="w-full bg-[#0F172A] border border-outline-variant/50 rounded-lg px-4 py-3 font-h3 text-h3 text-on-surface focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all shadow-inner placeholder-on-surface-variant/50" placeholder="Enter ticket title..." type="text" value="Implement OAuth2 Authentication Flow"/>
</div>
<div class="flex flex-col gap-2">
<label class="font-label-md text-label-md text-secondary">Description</label>
<textarea class="w-full h-40 bg-[#0F172A] border border-outline-variant/50 rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface-variant focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all shadow-inner resize-none placeholder-outline" placeholder="Provide detailed technical specifications...">Update the core authentication module to support standard OAuth2 providers (Google, GitHub). 

Requires updating the database schema to handle external provider tokens and ensuring backward compatibility with existing JWT sessions.</textarea>
</div>
<div class="flex flex-col gap-3">
<label class="font-label-md text-label-md text-secondary">Assignee</label>
<div class="flex items-center gap-3">
<div class="relative group cursor-pointer">
<img alt="Assignee 1" class="w-10 h-10 rounded-full object-cover border-2 border-transparent hover:border-outline transition-colors" data-alt="headshot of a smiling man with short brown hair wearing a blue shirt" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVkC96K1ckR_H_omUN_B2CMpze8QKQ2q9FAKWCo853aMH21GrMe4qfdagL840L53X-K-x0DGHI9uqX01MHk2yJL81CA7X58xPnSUMpRHPuDaI3vymDd30Yy_l8HebOPLJgLDKxfbP9oHDah2iWz3zmt3dHg9_imVev47G3_7lJmuhNZmdFBXCTuv3xr5WtCSR9g8GtCG8toav8b5SlqnFeKZBDVV80iqQbNVjpGIMtHOadHeE7U3RvUhoHjW__e17zWJAHzaxk4eU"/>
</div>
<div class="relative group cursor-pointer">
<img alt="Assignee 2" class="w-10 h-10 rounded-full object-cover border-2 border-[#38BDF8] shadow-[0_0_8px_rgba(56,189,248,0.3)]" data-alt="portrait of a young woman with shoulder-length brown hair looking directly at camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALfwr7ZEdRMwlg53RgaisXBnOzbde0k6yCx273hWCLEnxNPubgPEzCNuyxVANmE3vdqegOq4u21CMQf0coGOLw8Kfx9bbQfoUHdiWGeYN03cj_tQ3hKFH9Hikpu5egubVZQwctguLo59u73Ek3M_3iqoMQi6hBenr990zb2xtBfTu3AnM_TElhQJgctkPZiRIISg8O-1I35hEDxeJug7FkY-CsX6wBOWz6ne79fya9pf7YUUO9ar61R9wzEYLo24IXYqzpkd0CYdU"/>
<div class="absolute -top-1 -right-1 w-3 h-3 bg-[#38BDF8] rounded-full border-2 border-[#111827]"></div>
</div>
<div class="relative group cursor-pointer">
<img alt="Assignee 3" class="w-10 h-10 rounded-full object-cover border-2 border-transparent hover:border-outline transition-colors" data-alt="close up of a man with glasses and a short beard looking thoughtful" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN3-bJ-0XkywIxVA-4RmQKvZfgewfI4Vq6hBDlKjUNbZau5ts_bcFYxf-G8lgpr5o3FnMoeZkBXpQ5FznfL1dexVW5H5lBdpQEe4bPlMadMpuojYz_RJxhp-x-6ory_b2i5Y82kN8MZrshA6GlzKNL0pcCR7Tv_sfSUJcVR56m_B9bj2ySEzPJYsfCKJhRh4DePc_y7LJtssdNU_yB0taH-Al4hv5sVtVMcGmlyauBykiON0a-1D-ZES36jjo9e_EZGEJr25zK7XI"/>
</div>
<button class="w-10 h-10 rounded-full border border-dashed border-outline-variant flex items-center justify-center text-outline hover:text-on-surface hover:border-outline transition-colors bg-surface-variant/30">
<span class="material-symbols-outlined text-sm">add</span>
</button>
</div>
</div>
<div class="flex flex-col gap-3 pt-4 border-t border-outline-variant/30">
<div class="flex justify-between items-center text-body-md font-body-md text-secondary">
<span>Created</span>
<span class="text-on-surface">Oct 24, 2023</span>
</div>
<div class="flex justify-between items-center text-body-md font-body-md text-secondary">
<span>Priority</span>
<span class="flex items-center gap-1 text-on-surface">
<span class="material-symbols-outlined text-sm text-error">keyboard_double_arrow_up</span>
                                High
                            </span>
</div>
</div>
</div>
<div class="p-6 border-t border-outline-variant/30 bg-[#111827]/80 backdrop-blur-md rounded-bl-2xl">
<button class="w-full bg-[#38BDF8] text-[#0F172A] font-h3 text-h3 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#7bd0ff] transition-colors shadow-[0_0_15px_rgba(56,189,248,0.2)]">
<span class="material-symbols-outlined">play_arrow</span>
                        Iniciar
                    </button>
<button class="w-full mt-4 text-[#EF4444] border border-[#EF4444]/20 bg-[#EF4444]/5 py-2.5 rounded-lg font-body-md text-body-md hover:bg-[#EF4444]/10 transition-colors flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-sm">delete</span>
                        Eliminar Ticket
                    </button>
</div>
</aside>
</div>
</main>
</body></html>