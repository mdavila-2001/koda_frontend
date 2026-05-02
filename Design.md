<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>KODA System Access</title>
<!-- Fonts & Icons -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Theme Configuration -->
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-primary-container": "#ffffff",
                    "inverse-on-surface": "#eff0fa",
                    "secondary-fixed": "#dfe3e8",
                    "on-tertiary-fixed": "#341100",
                    "on-primary": "#ffffff",
                    "inverse-surface": "#2d3038",
                    "text-primary": "#202124",
                    "tertiary": "#9e4300",
                    "text-secondary": "#5F6368",
                    "on-surface": "#191c23",
                    "surface-dim": "#d8d9e3",
                    "outline": "#727785",
                    "on-tertiary": "#ffffff",
                    "surface-background": "#FFFFFF",
                    "on-primary-fixed": "#001a41",
                    "border-subtle": "#DADCE0",
                    "background": "#f9f9ff",
                    "on-background": "#191c23",
                    "primary-fixed": "#d8e2ff",
                    "tertiary-fixed-dim": "#ffb691",
                    "inverse-primary": "#adc7ff",
                    "surface-container": "#ecedf7",
                    "on-secondary": "#ffffff",
                    "error": "#ba1a1a",
                    "primary-container": "#1a73e8",
                    "surface": "#f9f9ff",
                    "secondary": "#5b5f64",
                    "error-container": "#ffdad6",
                    "on-tertiary-container": "#0e0200",
                    "on-surface-variant": "#414754",
                    "on-secondary-fixed": "#181c20",
                    "on-tertiary-fixed-variant": "#783100",
                    "surface-bright": "#f9f9ff",
                    "primary": "#005bbf",
                    "tertiary-fixed": "#ffdbcb",
                    "surface-container-low": "#f2f3fd",
                    "surface-container-high": "#e6e8f2",
                    "on-secondary-container": "#5f6368",
                    "primary-fixed-dim": "#adc7ff",
                    "tertiary-container": "#c55500",
                    "surface-tint": "#005bc0",
                    "status-success": "#1E8E3E",
                    "secondary-container": "#dde0e6",
                    "on-primary-fixed-variant": "#004493",
                    "on-error": "#ffffff",
                    "secondary-fixed-dim": "#c3c7cc",
                    "outline-variant": "#c1c6d6",
                    "surface-variant": "#e0e2ec",
                    "surface-container-lowest": "#ffffff",
                    "on-secondary-fixed-variant": "#43474c",
                    "on-error-container": "#93000a",
                    "surface-container-highest": "#e0e2ec",
                    "status-error": "#D93025"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "unit": "4px",
                    "space-xl": "32px",
                    "space-sm": "8px",
                    "margin": "24px",
                    "space-md": "16px",
                    "space-xs": "4px",
                    "space-lg": "24px",
                    "gutter": "24px"
            },
            "fontFamily": {
                    "code-md": [
                            "monospace"
                    ],
                    "label-md": [
                            "Inter"
                    ],
                    "body-md": [
                            "Inter"
                    ],
                    "headline-lg": [
                            "Inter"
                    ],
                    "body-lg": [
                            "Inter"
                    ],
                    "headline-md": [
                            "Inter"
                    ]
            },
            "fontSize": {
                    "code-md": [
                            "14px",
                            {
                                    "lineHeight": "20px",
                                    "fontWeight": "400"
                            }
                    ],
                    "label-md": [
                            "12px",
                            {
                                    "lineHeight": "16px",
                                    "letterSpacing": "0.01em",
                                    "fontWeight": "500"
                            }
                    ],
                    "body-md": [
                            "14px",
                            {
                                    "lineHeight": "20px",
                                    "fontWeight": "400"
                            }
                    ],
                    "headline-lg": [
                            "32px",
                            {
                                    "lineHeight": "40px",
                                    "letterSpacing": "-0.02em",
                                    "fontWeight": "700"
                            }
                    ],
                    "body-lg": [
                            "16px",
                            {
                                    "lineHeight": "24px",
                                    "fontWeight": "400"
                            }
                    ],
                    "headline-md": [
                            "24px",
                            {
                                    "lineHeight": "32px",
                                    "letterSpacing": "-0.01em",
                                    "fontWeight": "600"
                            }
                    ]
            }
    },
        },
      }
    </script>
<style>
        /* Specific override to force Inter everywhere as requested for this exact screen variation */
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-on-primary-fixed min-h-screen w-full flex items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 z-0 bg-cover bg-center" data-alt="Abstract dark technical background featuring glowing data streams, subtle geometric grid lines, and deep navy blue tones reflecting a secure corporate network environment" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBE77JLFcV70z9kLinO-scONnFlq-LjNLncOlTivgBjCuD5dbpgz64ILP5aDvoHSlRlKY3Z5p63A2mwJSJrnpPmYLKjnouz-URFjaGClUXYjMVhwEU6HHd3XJh490P_3YZ1Dwda0zQ6ZLN29hJWiDJTQWXFdRd_WYusjBJGzGOZIH1HRbFI_NpHMWEtKjzeN3Pdl_NkXR576XTgU-giVxGdap2Wr2souUwXUK-jL0jKYN5pSB9lFw2Ijrz8Ctv7-XcW-K_vTZrygXo');">
</div>
<div class="absolute inset-0 z-10 bg-gradient-to-br from-on-primary-fixed/95 to-inverse-surface/80"></div>
<div class="relative z-20 w-full max-w-md p-space-xl m-margin bg-inverse-surface/60 backdrop-blur-xl border border-primary-fixed-dim/30 rounded-lg shadow-2xl">
<div class="flex flex-col items-center mb-space-xl">
<span class="material-symbols-outlined text-primary-fixed text-4xl mb-space-sm" style="font-variation-settings: 'wght' 300;">dns</span>
<h1 class="font-headline-lg text-headline-lg text-on-primary tracking-widest uppercase">KODA</h1>
<p class="font-code-md text-code-md text-primary-fixed-dim mt-space-xs tracking-widest opacity-80 uppercase text-[10px]">Secure Gateway</p>
</div>
<form class="flex flex-col gap-space-lg">
<div class="flex flex-col gap-space-xs">
<label class="font-label-md text-label-md text-primary-fixed-dim tracking-wider uppercase ml-1" for="email">Identifier</label>
<div class="relative flex items-center">
<span class="material-symbols-outlined absolute left-3 text-outline-variant text-lg">person</span>
<input class="w-full bg-on-primary-fixed/50 border border-outline-variant/40 rounded-DEFAULT py-3 pl-10 pr-4 font-body-md text-body-md text-on-primary placeholder:text-outline-variant/50 focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-colors" id="email" placeholder="SYS.ADMIN_ID" type="email"/>
</div>
</div>
<div class="flex flex-col gap-space-xs">
<label class="font-label-md text-label-md text-primary-fixed-dim tracking-wider uppercase ml-1" for="password">Passkey</label>
<div class="relative flex items-center">
<span class="material-symbols-outlined absolute left-3 text-outline-variant text-lg">lock</span>
<input class="w-full bg-on-primary-fixed/50 border border-outline-variant/40 rounded-DEFAULT py-3 pl-10 pr-4 font-body-md text-body-md text-on-primary placeholder:text-outline-variant/50 focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-colors" id="password" placeholder="••••••••••••" type="password"/>
</div>
</div>
<div class="flex items-center justify-between mt-space-xs">
<label class="flex items-center gap-2 cursor-pointer group">
<div class="relative flex items-center justify-center w-4 h-4 border border-outline-variant/50 rounded-sm bg-on-primary-fixed/30 group-hover:border-primary-fixed transition-colors">
<input class="peer sr-only" type="checkbox"/>
<span class="material-symbols-outlined text-[12px] text-primary-fixed opacity-0 peer-checked:opacity-100 transition-opacity">check</span>
</div>
<span class="font-label-md text-label-md text-outline-variant group-hover:text-primary-fixed-dim transition-colors">Keep Session Active</span>
</label>
<a class="font-label-md text-label-md text-primary-fixed hover:text-primary-fixed-dim transition-colors hover:underline" href="#">Reset Node</a>
</div>
<button class="mt-space-md w-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-widest py-3 px-6 rounded-DEFAULT border border-primary-fixed/20 shadow-[0_0_15px_rgba(0,91,191,0.3)] hover:shadow-[0_0_25px_rgba(0,91,191,0.5)] transition-all flex items-center justify-center gap-2" type="button">
<span>Initialize</span>
<span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</form>
<div class="mt-space-lg pt-space-md border-t border-outline-variant/20 text-center">
<p class="font-code-md text-code-md text-outline-variant/60 text-[10px] uppercase">Connection: Encrypted • Status: Ready</p>
</div>
</div>
</body></html>