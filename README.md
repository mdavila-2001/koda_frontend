# 🚀 KODA - Technical Workspace

**KODA** is a premium, high-performance project management platform designed for technical teams. It provides a unified workspace for managing projects, tickets, and team collaboration with a focus on speed, precision, and clean architecture.

---

## 🛠️ Key Features

### 📊 Project Dashboard
Overview of all active technical projects. It provides a clean interface to track the health of your workspaces and quickly jump into specific project environments.

### 📋 Kanban Board
A real-time, interactive board for ticket management. 
- **Dynamic Tracking**: Drag-and-drop support for status updates.
- **Visual Indicators**: Color-coded badges for priorities and status.
- **Assignment Logic**: Visual avatar system for tracking responsible team members.

### 🎫 Ticket Management
Detailed control over development tasks and bug reports.
- **Detailed View**: Side drawer for quick ticket inspection and editing.
- **Status Control**: Intuitive workflow for progressing tickets from Pending to Completed.
- **Validation**: Strict schema validation using **Zod** for data integrity.

### 👥 Team Collaboration
Manage access and responsibilities within your project.
- **Member Assignment**: Easily assign tickets to specialized team members.
- **Access Control**: Role-based views for project owners and collaborators.

---

## 🏗️ Architecture & Best Practices

Koda is built with a focus on maintainability, scalability, and **SonarQube** quality standards.

- **Modular Components**: Following a "Clean Architecture" pattern. Components are organized by domain (`kanban`, `ticket`, `project`) with their own styles and logic.
- **React 19 Ready**: Optimized for the latest React version, using modern patterns and avoiding deprecated APIs (e.g., using `SyntheticEvent` and function-based components).
- **Strict TypeScript**: 100% type safety with explicit definitions, `Readonly` props, and strict null checks.
- **CSS Modules**: Scoped styling using Vanilla CSS for maximum performance and zero conflict.
- **Global States & Context**: Robust authentication and project state management via React Context.

---

## 💻 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS Modules (with modern design principles like glassmorphism and dark mode)
- **Validation**: [Zod](https://zod.dev/)
- **Drag & Drop**: [@dnd-kit](https://dndkit.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root based on `.env.example`.

### Running locally
```bash
npm run dev
```

---

## 🎨 Design Documentation
The project includes several detailed design specifications and prototypes located in the root directory:
- `dashboard.md`: Layout for the main workspace.
- `kanban.md`: Detailed Kanban interactions.
- `ticketlist.md`: List-based ticket view design.
- `gestiondemiembros.md`: Team management workflows.

---

**Developed with ❤️ for Technical Excellence.**
