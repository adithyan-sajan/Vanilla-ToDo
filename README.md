# 📝 Vanilla ToDo App

A modular, maintainable ToDo list application built using **Vanilla JavaScript** and **Webpack**, with clean architecture principles in mind. It supports project-based task organization and persists data using `localStorage`.

---

## 🚀 Features

- ✅ Create multiple projects, each with their own ToDos
- ✅ Add task title, body, due date, and priority
- ✅ Mark tasks as complete (coming soon: remove/undo)
- ✅ Data is saved in `localStorage` — your tasks are safe on refresh

---

## 🔧 Built With

| Technology | Purpose |
|------------|---------|
| **Webpack** | Module bundling and build optimization |
| **Vanilla JS** | Lightweight, dependency-free codebase |
| **Modular Architecture** | Code is split by responsibility |
| **SOLID Principles** | Focused functions, separation of concerns, and scalability |
| **LocalStorage** | Persistent client-side data management |

---

## 🧱 Architecture Overview

This project follows a **modular and layered architecture** with clear separation of responsibilities across three main modules:

- **`index.js` (Main Entry):**  
  Serves as the central orchestrator. It initializes the app, sets up event listeners, and delegates tasks to the appropriate modules.

- **`displayController.js`:**  
  Responsible for all DOM manipulation and UI rendering. It updates the interface in response to data changes or user interactions.

- **`projectController.js`:**  
  Manages the core logic for projects and todos — creation, modification, deletion, and localStorage persistence.

This structure keeps concerns well-separated and maintainable, aligning with **modular programming** principles and the **Single Responsibility Principle** from SOLID.

---

## 💡 Future Work

- 🎨 **UI/UX Enhancements**  
  Improve layout, responsiveness, and form interactions.

- 🔴 **Priority-based Highlighting**  
  Visually distinguish tasks based on urgency (e.g., color-coded borders or backgrounds).

- 🌈 **Improved Color Scheme**  
  Adopt a modern, accessible color palette for better visual clarity.

- 🧼 **Drag and Drop ToDo Sorting**  
  Add ability to reorder tasks within a project using drag-and-drop.

- 🔐 **Optional Authentication**  
  Future support for user accounts to allow syncing across devices.



## 📁 Getting Started

1. Clone the repo  
   `git clone https://github.com/yourusername/todo-app.git`

2. Install dependencies  
   `npm install`

3. Start the development server  
   `npm run start`

4. Build for production  
   `npm run build`

---

## 🤝 Contributing

This project is a personal learning initiative, but PRs and suggestions are always welcome!

---

## 📜 License

MIT License – use freely with attribution.

---
