# 🚀 KODA - Espacio de Trabajo Técnico

**KODA** es una plataforma de gestión de proyectos premium y de alto rendimiento, diseñada específicamente para equipos técnicos. Proporciona un espacio de trabajo unificado para gestionar proyectos, tickets y colaboración en equipo con un enfoque en la velocidad, la precisión y la arquitectura limpia.

---

## 🛠️ Características Principales

### 📊 Dashboard de Proyectos
Vista general de todos los proyectos técnicos activos. Proporciona una interfaz limpia para monitorear la salud de tus espacios de trabajo y acceder rápidamente a entornos de proyectos específicos.

### 📋 Tablero Kanban
Un tablero interactivo en tiempo real para la gestión de tickets.
- **Seguimiento Dinámico**: Soporte de arrastrar y soltar (drag-and-drop) para actualizaciones de estado.
- **Indicadores Visuales**: Badges con códigos de colores para prioridades y estados.
- **Lógica de Asignación**: Sistema visual de avatares para rastrear a los miembros responsables del equipo.

### 🎫 Gestión de Tickets
Control detallado sobre tareas de desarrollo e informes de errores.
- **Vista Detallada**: Panel lateral para inspección rápida y edición de tickets.
- **Control de Flujo**: Flujo de trabajo intuitivo para progresar tickets desde Pendiente hasta Completado.
- **Validación**: Validación estricta de esquemas usando **Zod** para garantizar la integridad de los datos.

### 👥 Colaboración en Equipo
Gestiona el acceso y las responsabilidades dentro de tu proyecto.
- **Asignación de Miembros**: Asigna fácilmente tickets a miembros especializados del equipo.
- **Control de Acceso**: Vistas basadas en roles para propietarios de proyectos y colaboradores.

---

## 🏗️ Arquitectura y Mejores Prácticas

Koda está construido con un enfoque en la mantenibilidad, escalabilidad y los estándares de calidad de **SonarQube**.

- **Componentes Modulares**: Siguiendo un patrón de "Arquitectura Limpia". Los componentes están organizados por dominio (`kanban`, `ticket`, `project`) con sus propios estilos y lógica.
- **Listo para React 19**: Optimizado para la versión más reciente de React, utilizando patrones modernos y evitando APIs obsoletas (ej. usando `SyntheticEvent` y componentes basados en funciones).
- **TypeScript Estricto**: 100% seguridad de tipos con definiciones explícitas, props `Readonly` y chequeos estrictos de nulos.
- **Módulos CSS**: Estilizado mediante CSS Modules para máximo rendimiento y cero conflictos.
- **Estados Globales y Contexto**: Gestión robusta de autenticación y estado del proyecto mediante React Context.

---

## 💻 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: Vanilla CSS Modules (con principios de diseño modernos como glassmorphism y modo oscuro)
- **Validación**: [Zod](https://zod.dev/)
- **Drag & Drop**: [@dnd-kit](https://dndkit.com/)
- **Enrutamiento**: [React Router v7](https://reactrouter.com/)

---

## 🚀 Empezando

### Prerrequisitos
- Node.js (v18 o superior)
- npm o yarn

### Instalación
1. Clona el repositorio:
   ```bash
   git clone <url-del-repo>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz basado en `.env.example`.

### Ejecución Local
```bash
npm run dev
```

---

## 🎨 Documentación de Diseño
El proyecto incluye varias especificaciones de diseño detalladas y prototipos ubicados en el directorio raíz:
- `dashboard.md`: Diseño para el espacio de trabajo principal.
- `kanban.md`: Interacciones detalladas del Kanban.
- `ticketlist.md`: Diseño de la vista de lista de tickets.
- `gestiondemiembros.md`: Flujos de trabajo de gestión de equipos.

---

**Desarrollado con ❤️ para la Excelencia Técnica.**
