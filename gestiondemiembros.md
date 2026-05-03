<!DOCTYPE html>

<html class="dark" lang="es"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>KODA - Ajustes de Miembros</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "tertiary-fixed-dim": "#ffb960",
                        "on-surface": "#dee3e8",
                        "surface-bright": "#343a3e",
                        "surface-tint": "#7bd0ff",
                        "primary-container": "#38bdf8",
                        "tertiary-fixed": "#ffddb8",
                        "primary-fixed-dim": "#7bd0ff",
                        "outline-variant": "#3e484f",
                        "surface-container-low": "#171c20",
                        "surface-container-lowest": "#0a0f12",
                        "primary-fixed": "#c4e7ff",
                        "on-tertiary-fixed": "#2a1700",
                        "error": "#ffb4ab",
                        "secondary-container": "#3e495d",
                        "surface-variant": "#303539",
                        "on-secondary-container": "#aeb9d0",
                        "on-primary-container": "#004965",
                        "on-surface-variant": "#bdc8d1",
                        "on-error-container": "#ffdad6",
                        "surface-container-high": "#252b2e",
                        "on-secondary": "#263143",
                        "on-tertiary-fixed-variant": "#653e00",
                        "inverse-surface": "#dee3e8",
                        "on-secondary-fixed-variant": "#3c475a",
                        "secondary-fixed": "#d8e3fb",
                        "inverse-primary": "#00668a",
                        "surface-container-highest": "#303539",
                        "secondary-fixed-dim": "#bcc7de",
                        "surface-dim": "#0f1418",
                        "on-primary": "#00354a",
                        "outline": "#87929a",
                        "background": "#0f1418",
                        "on-background": "#dee3e8",
                        "surface-container": "#1b2024",
                        "secondary": "#bcc7de",
                        "on-secondary-fixed": "#111c2d",
                        "on-primary-fixed-variant": "#004c69",
                        "on-error": "#690005",
                        "error-container": "#93000a",
                        "on-tertiary-container": "#613b00",
                        "on-tertiary": "#472a00",
                        "tertiary": "#ffc176",
                        "tertiary-container": "#f1a02b",
                        "primary": "#8ed5ff",
                        "on-primary-fixed": "#001e2c",
                        "surface": "#0f1418",
                        "inverse-on-surface": "#2c3135"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "sm": "8px",
                        "gutter": "20px",
                        "xl": "32px",
                        "unit": "4px",
                        "md": "16px",
                        "margin": "24px",
                        "xs": "4px",
                        "lg": "24px"
                    },
                    "fontFamily": {
                        "h3": ["Inter"],
                        "code": ["monospace"],
                        "h1": ["Inter"],
                        "h2": ["Inter"],
                        "body-md": ["Inter"],
                        "label-md": ["Inter"],
                        "body-lg": ["Inter"]
                    },
                    "fontSize": {
                        "h3": ["20px", { "lineHeight": "1.4", "letterSpacing": "-0.01em", "fontWeight": "600" }],
                        "code": ["13px", { "lineHeight": "1.5", "fontWeight": "400" }],
                        "h1": ["36px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "h2": ["24px", { "lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600" }],
                        "body-md": ["14px", { "lineHeight": "1.5", "letterSpacing": "0", "fontWeight": "400" }],
                        "label-md": ["12px", { "lineHeight": "1", "letterSpacing": "0.02em", "fontWeight": "500" }],
                        "body-lg": ["16px", { "lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400" }]
                    }
                }
            }
        }
    </script>
<style>
        .koda-bg {
            background-color: #0F172A;
            background-image: radial-gradient(circle at center, rgba(30, 41, 59, 0.5) 0%, transparent 70%);
        }
        .panel-bg {
            background-color: #1E293B;
            box-shadow: 0 10px 25px -5px rgba(2, 6, 23, 0.5), 0 8px 10px -6px rgba(2, 6, 23, 0.5);
        }
    </style>
</head>
<body class="koda-bg min-h-screen text-on-surface font-body-md antialiased flex items-center justify-center p-md md:p-xl">
<!-- JSON Navigation suppressed as per instructions: "Linear/Transactional: Login, Sign-up, Onboarding, Checkout, or 'Success/Confirmation' splash screens" and "Sin header ni footer" -->
<main class="w-full max-w-3xl panel-bg rounded-xl p-margin md:p-xl border border-outline-variant">
<!-- Header Section -->
<header class="mb-xl border-b border-outline-variant pb-margin">
<h1 class="font-h2 text-h2 text-on-surface mb-sm">Team Settings</h1>
<p class="font-body-md text-body-md text-on-surface-variant">Manage your team members and their account permissions here.</p>
</header>
<!-- Invite Section -->
<section class="mb-xl">
<h2 class="font-h3 text-h3 text-on-surface mb-sm">Invite Members</h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-md">All invited members will have standard read and write permissions initially.</p>
<form class="flex flex-col sm:flex-row gap-md">
<div class="flex-grow relative">
<span aria-hidden="true" class="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">mail</span>
<input class="w-full bg-[#0F172A] border border-outline-variant rounded text-on-surface pl-xl pr-md py-sm font-body-md text-body-md focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-shadow" placeholder="Email address" type="email"/>
</div>
<button class="bg-primary-container text-[#0F172A] font-label-md text-label-md px-lg py-sm rounded hover:brightness-110 transition-all whitespace-nowrap" type="button">
                    Invite Member
                </button>
</form>
</section>
<!-- Members List Section -->
<section>
<h2 class="font-h3 text-h3 text-on-surface mb-md">Project Members</h2>
<div class="flex flex-col gap-sm">
<!-- Member Row 1 -->
<div class="flex items-center justify-between p-md rounded-lg hover:bg-secondary-container transition-colors border border-transparent hover:border-outline-variant group">
<div class="flex items-center gap-md">
<img alt="Avatar" class="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="A professional studio portrait of a young woman with dark hair tied back, looking directly at the camera with a neutral expression. The lighting is soft and even, highlighting her features against a simple, uncluttered grey background. The image has a clean, corporate aesthetic suitable for a professional software platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-FFP395lMEsGFXoRTkPNAI4_sfAge_Zx5HWktPX7McGZJE9DcG1vLnyO957fh4kvJyyVIy3VWS1xeu5I2C4xcDPJ8YFvk6fqpx2xASOlG344bAd3iurUfWzWFQkSRnoQiuQbbtxH4mNeDeoZHCbJLYI-4yvgHm7PdLLf5BJVNR2yKj1KJcF2F_FE-eYJbzWnMivcMyCJ127dvVb_v3QDoQ3TKV6cuYp7X1etr52ZvgwUJsPldQleU0I9sAkmrL_1KmJnps80wVUI"/>
<div>
<p class="font-body-md text-body-md font-medium text-on-surface">Alice Johnson</p>
<p class="font-body-md text-body-md text-on-surface-variant">alice@example.com</p>
</div>
</div>
<div class="flex items-center gap-md">
<span class="inline-flex items-center gap-xs px-sm py-unit bg-primary-container/10 text-primary-container rounded-full font-label-md text-label-md">
<span class="w-2 h-2 rounded-full bg-primary-container"></span> Active
                        </span>
<button aria-label="More options" class="text-outline hover:text-on-surface p-xs transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
<!-- Member Row 2 -->
<div class="flex items-center justify-between p-md rounded-lg hover:bg-secondary-container transition-colors border border-transparent hover:border-outline-variant group">
<div class="flex items-center gap-md">
<img alt="Avatar" class="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="A close-up portrait of a young man with a short beard and dark hair, wearing a dark shirt. The lighting is dramatic, casting soft shadows on one side of his face. The background is a solid, deep slate blue, matching the dark mode UI aesthetic of a high-end developer dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc0tDgJp8xsvTfWj2EcukFTB2RZi4QnnrAbSQX0PkC_QFmSc45M0Pc8Vbno1zOGDQksy2zI59seM9Xu8LIBY4Xd3T-D-LVLgosykFCApa6CHPD9IWrO5QyDPl4W6oE412ZH-GCNlV7LsKBmjUyZbPAkVroJ3NzybuzJvrbX2nQ1pDPGg73kBbo1_Dbvfs5Hk6KnxlWaMqEcqpDGKYckW3H4MvVF9tAOCJHtirCFKISSJn9hHCg8lm_gLhA9QoWacamG2FX98auxEk"/>
<div>
<p class="font-body-md text-body-md font-medium text-on-surface">Bob Smith</p>
<p class="font-body-md text-body-md text-on-surface-variant">bob@example.com</p>
</div>
</div>
<div class="flex items-center gap-md">
<span class="inline-flex items-center gap-xs px-sm py-unit bg-primary-container/10 text-primary-container rounded-full font-label-md text-label-md">
<span class="w-2 h-2 rounded-full bg-primary-container"></span> Active
                        </span>
<button aria-label="More options" class="text-outline hover:text-on-surface p-xs transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
<!-- Member Row 3 -->
<div class="flex items-center justify-between p-md rounded-lg hover:bg-secondary-container transition-colors border border-transparent hover:border-outline-variant group">
<div class="flex items-center gap-md">
<div class="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant text-on-surface font-body-md font-medium">
                            CE
                        </div>
<div>
<p class="font-body-md text-body-md font-medium text-on-surface">Charlie Evans</p>
<p class="font-body-md text-body-md text-on-surface-variant">charlie@example.com</p>
</div>
</div>
<div class="flex items-center gap-md">
<span class="inline-flex items-center gap-xs px-sm py-unit bg-surface-variant text-on-surface-variant rounded-full font-label-md text-label-md border border-outline-variant">
                            Pending
                        </span>
<button aria-label="More options" class="text-outline hover:text-on-surface p-xs transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
</div>
</section>
</main>
</body></html>