# 🌐 Personal Portfolio – React 19, TypeScript & Tailwind CSS

Welcome to the latest version of my portfolio project! Built with the cutting edge of the React ecosystem, this repository showcases my frontend journey and technical capabilities in a maintainable, scalable, and performant architecture.

## ✨ Tech Stack

- **React 19** – Concurrent rendering, server components, transitions, and modern hooks for optimal UI performance and DX.
- **TypeScript** – Type safety is enforced across components, routes, API calls, and i18n resources.
- **Vite 6** – Lightning-fast builds and HMR.
- **Tailwind CSS 4** – Responsive, mobile-first, and customizable styling.
- **Framer Motion** – For declarative animations and smooth UI transitions.
- **@headlessui/react** – Accessible UI primitives for modals, dialogs, popovers.
- **React Router 7** – Granular, lazy-loaded, nested routing for scalable navigation.
- **React Icons & React Typed** – Professional icon sets and animated text effects.
- **Zustand** – Modern, minimal state management.
- **React Hook Form** – Type-safe, performant form handling.
- **Class Variance Authority & clsx** – Utility-first and conditional CSS.
- **EmailJS** – SMTP integration for contact forms.
- **i18next** – Robust internationalization.

## 🚀 Main Features

- Interactive homepage with animated texts.
- About section with personal intro, skills, and background.
- Projects portfolio: Category pages, detailed project cards, and modal overlays for tech stack, links, and descriptions.
- Routing with React Router 7: All core pages and project sections use nested, lazy-loaded route components and suspense fallbacks for fast navigation and bundle splitting.
- Contacts page and form: Powered by React Hook Form, TypeScript enums, and EmailJS.
- Responsive and accessible design for all devices and modes.
- Smooth navigation with animated scroll and focus management.
- Smooth, declarative animations implemented using Framer Motion for enhanced UI experience.
- Routing leverages React.lazy and `<Suspense>` for code splitting at the route and sub-route level, optimizing initial load and navigation to deep project pages.
- TypeScript powers every layer, from route params to i18n resources and UI props, boosting reliability and IDE support.

## ♿ Accessibility & Inclusive Design

**Accessibility (a11y)** is a core part of this project’s architecture.
Every component and interaction is built to ensure usability and inclusivity for all users.

### Semantic HTML & Structure

- Consistent use of `header`, `main`, `section`, `article`, and `footer` elements for logical page hierarchy.

- Layout components (e.g., ProjectsLayout, ContactsPage) use sections and landmarks to improve screen reader navigation.

- Decorative `div` elements have been replaced with semantic tags where possible.

### ARIA & Focus Management

- Implemented accessible modals via `@headlessui/react` with `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`.

- Custom hook  useFocusRef ensures proper focus trapping, keyboard navigation, and Escape key closing inside dialogs.

- Buttons, links, and interactive elements include descriptive `aria-label` attributes for clarity and screen reader support.

### Color & Contrast

- All text and background colors meet WCAG 2.1 AA contrast requirements.

- Dynamic Tailwind classes automatically adjust text and background colors depending on the theme (dark or light mode).

- Color palette tested with Chrome Lighthouse and WCAG contrast checkers.

### Keyboard Navigation

- Full keyboard accessibility across modals, navigation, and forms.

- Logical focus order for intuitive tab navigation.

- Visible focus outlines for all interactive elements.

- Modals and dialogs return focus to the trigger element after closing.

### Internationalization & Language Attributes

- All translations handled via `i18next`, with automatic language detection and safe fallback logic.

- Accessible labels (e.g., for buttons and links) are localized using translation keys for consistent multilingual experience.

- The lang attribute in the HTML document updates dynamically based on the selected language.

- Language switcher implemented with ARIA roles and keyboard navigation support.

### Forms & Validation

- React Hook Form provides type-safe validation and real-time error feedback.

- Error messages are accessible to screen readers using aria-live="polite".

- Form labels are explicitly associated with inputs for predictable navigation.

- Submit and reset buttons are fully keyboard and screen-reader accessible.


## 🗂️ Project Structure

The project is organized for clarity, modularity, and scalability:
```bash
src/
├── components/ # UI elements: buttons, cards, modals
├── custom hooks/ # useFocusRef, useMobileMenu, useOnSubmit
├── data/ # Centralized data for projects
├── layouts/ # Page layouts: About, Contacts, Navbar, Footer
├── pages/ # Route-level React pages including error boundary
│ └── projects/ # Nested project routes, supports categories/types
├── router/ # createBrowserRouter config, with suspense and lazy loading
├── store/ # Zustand store config for global app state
├── types/ # Shared TypeScript types, enums, and interfaces
├── locales/ # i18n resource JSONs for en/it/ru/esp
```

## 🌍 Internationalization

Localization is managed via i18next, with hierarchical JSON structures in english, italian, russian, and spanish. Type-safe translation keys ensure compile-time checks and safe UI rendering. Language switching is programmatic and automatic via browser detection, with Italian as fallback.

## 🔧 Getting Started

1. Clone this repository:
```bash
git clone https://github.com/your-username/your-portfolio.git
```

2. Enter the project directory:
```bash
cd your-portfolio
```

3. Install dependencies:

```bash
npm install
```

4. Start development:

```bash
npm run dev
```

5. Browse [http://localhost:5173/](http://localhost:5173) (default Vite port).

## 🎯 Roadmap / Updates

- Dedicated learning journey/blog section.
- Collaboration hub for conversations and feedback.
- Improved dark mode support using React Context API.
- Migration to Next.js and server-side rendering.
- Unit testing with Jest and React Testing Library.

## 📬 Contact

Reach out for opportunities or feedback:
- LinkedIn: [https://linkedin.com/in/eliagiolli](https://linkedin.com/in/eliagiolli)
- GitHub: [https://github.com/EliaGiolli](https://github.com/EliaGiolli)
- Email: eliagiolli22@gmail.com
