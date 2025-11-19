# Vite React Template

Modern, production-ready React Vite template with TypeScript, Tailwind CSS, ESLint, Prettier, and Vitest.

## Features

- **React 19** with TypeScript
- **Vite** - Lightning fast HMR
- **Tailwind CSS v4** - Utility-first CSS
- **Path Aliases** - Clean imports with `@/`
- **ESLint** - Code linting with React & a11y rules
- **Prettier** - Code formatting with Tailwind plugin
- **Vitest** - Fast unit testing
- **React Testing Library** - Component testing
- **Organized Structure** - Scalable folder structure
- **TypeScript** - Type safety
- **Vercel Ready** - Optimized for deployment

## Tech Stack

- **Framework** - React ^19
- **Build Tool** - Vite ^7
- **Language** - Typescript ~5
- **Styling** - Tailwind CSS ^4
- **Router** - React Router DOM ^7
- **Icons** - Lucide React Icons
- **Linting** - ESLint
- **Prettier** - Prettier
- **Testing** - Vitest | JSDOM | React Testing Library | Jest dom Testing Library | User Event Testing Library

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) / npm / yarn

### Quick Start
```bash
# Clone the repository
git clone https://github.com/romcstd/vite-react-template.git

# Navigate to project
cd vite-react-template

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Check for linting errors
pnpm lint

# Fix linting errors
pnpm lint:fix

# Check formatting
pnpm format

# Fix formatting
pnpm format:fix

# Run tests
pnpm test

# Run tests with UI
pnpm test:ui

# Run tests with coverage
pnpm test:coverage
```

### Create Vite React Project
- Create `vite@latest` via npm / yarn / pnpm

```bash
pnpm create vite@latest
```

- add project name: vite-react-template
- select a framework: (React)
- select a variant: (Typescript + React Compiler)
- use rolldown-vite (Experimental): No

## Folder Structure
```bash
src/
├── __tests/
├── assets/
├── components/
├── context/
├── data/
├── hooks/
├── lib/
├── pages/
├── services/
├── store/
├── styles/
├── types/
├── utils/
├── App.tsx
└── main.tsx
```

## Create folder

#### 1. Assets - Static files like images, icons, fonts, and SVGs that are imported into your application.

```bash
assets/
├── images/          # Images (PNG, JPG, WebP)
├── icons/           # SVG icons
└── fonts/           # Custom fonts
```

#### 2. Components - Reusable UI components organized by type or feature.

```bash
components/
├── ui/              # Base/primitive UI components
├── layout/          # Layout components (Header, Footer, Sidebar)
└── features/        # Feature-specific components
```

#### 3. Context - React Context providers for sharing global state across the component tree without prop drilling.

```bash
context/
├── AuthContext.tsx       # User authentication state
├── ThemeContext.tsx      # Theme (light/dark mode)
└── LanguageContext.tsx   # Internationalization
```

#### 4. data - Static data, constants, configuration values, and mock data.

```bash
data/
├── constants.ts     # App-wide constants
├── config.ts        # Configuration settings
└── mockData.ts      # Mock data for development/testing
```

#### 5. Hooks - Custom React hooks for reusable stateful logic.

```bash
hooks/
├── useAuth.ts           # Authentication hook
├── useLocalStorage.ts   # LocalStorage wrapper
├── useFetch.ts          # Data fetching hook
├── useDebounce.ts       # Debounce logic
└── useMediaQuery.ts     # Responsive design hook
```

#### 6. Lib - Third-party library configurations and initialized instances.

```bash
lib/
├── axios.ts         # Axios instance configuration
├── queryClient.ts   # React Query configuration
└── firebase.ts      # Firebase initialization
```

#### 7. Pages - Page-level components that represent different routes/screens in your application.

```bash
pages/
├── Home.tsx        #Landing/home page
├── Dashboard.tsx   # User dashboard
├── Login.tsx       # Login page
├── Profile.tsx     # User profile page
└── NotFound.tsx    # 404 error page
└── index.ts        # Export all pages
```

#### 8. Services - API calls and business logic. Each service handles requests for a specific domain/feature.

```bash
services/
├── authService.ts       # Authentication API calls
├── userService.ts       # User-related API calls
├── productService.ts    # Product-related API calls
└── index.ts             # Export all services
```

#### 9. Store - Global state management using libraries like Zustand, Redux, or Jotai.

```bash
store/
├── authStore.ts     # Authentication state
├── cartStore.ts     # Shopping cart state
├── userStore.ts     # User preferences state
└── index.ts         # Export all stores
```

#### 10. Styles - Global styles, CSS modules, theme files, and Tailwind configuration.

```bash
styles/
├── globals.css      # Global CSS styles
├── variables.css    # CSS variables
└── themes.css       # Theme-specific styles
```

#### 11. Types - TypeScript type definitions, interfaces, and type utilities.

```bash
types/
├── user.ts          # User-related types
├── auth.ts          # Auth-related types
├── api.ts           # API response types
└── index.ts         # Export all types
```

#### 12. Utils - Helper functions and utility methods used throughout the application.
```bash
utils/
├── format.ts        # Formatting utilities
├── validation.ts    # Validation functions
├── date.ts          # Date manipulation
└── helpers.ts       # General helper functions
```

#### 13. Tests - Test files and setup configuration
```bash
__tests__/
└── vitest-setup.ts   # Test configuration and setup
```

#### 14. Layouts - Test files and setup configuration
```bash
layouts/
├── main-layout.tsx   # Test configuration and setup
└── index.ts          # Export all layouts
```

## Setup Instructions

### Install, configure and import Tailwind CSS

#### Install Tailwind CSS
- Install `tailwindcss` and `@tailwindcss/vite` via npm / yarn / pnpm:

```bash
pnpm install tailwindcss @tailwindcss/vite
```

#### Configure the Vite plugin
- Add the @tailwindcss/vite plugin to your `vite.config.ts`:

```typescript
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

#### Import Tailwind CSS
- Add an @import "tailwindcss" to your CSS file that imports Tailwind CSS:

```bash
@import "tailwindcss";
```

### Path Alias Configuration

#### Configure Vite
- Update your `vite.config.ts:

```typescript
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

#### Configure Typescript
- Update your `tsconfig.app.json:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Add React Router Dom to your Vite React Project

#### 1. Install React Router

```bash
pnpm install react-router-dom
```

#### 2. Create Layout
- Create main layout in src > layout folder:

```javascript
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-screen-2xl mx-auto px-6 py-6 md:px-12 md:py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
```

#### 3. React Router Configuration
- Add react router configuration in App.tsx:

```javascript
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { HomePage, PageNotFound } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

### Add Prettier to your Vite React Project

#### 1. Install Prettier

```bash
pnpm install -D prettier
```

#### 2. Create Prettier Configuration
- Create `.prettierrc` in your project root:

```json
{
  "semi": true,               // Add semicolons
  "singleQuote": true,        // Use single quotes
  "tabWidth": 2,              // 2 spaces for indentation
  "trailingComma": "es5",     // Trailing commas where valid in ES5
  "printWidth": 100,          // Line length
  "arrowParens": "avoid",     // Avoid parens on single param arrows
  "endOfLine": "lf",          // Line endings
  "jsxSingleQuote": false,    // Double quotes in JSX
}
```

#### 3. Create Prettier Ignore File
- Create `.prettierignore` in your project root:

```bash
# Dependencies
node_modules
package-lock.json
yarn.lock
pnpm-lock.yaml

# Build outputs
dist
build
.next
out
.vercel

# Environment files
.env
.env.local
.env.*.local

# IDE
.vscode
.idea

# Misc
coverage
*.log
.DS_Store
```

#### 4. Add Prettier Scripts
- Update your package.json:

```json
{
  "scripts": {
    "format": "prettier --check \"src/**/*.{js,jsx,ts,tsx,json,css,md}\"",
    "format:fix": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,md}\""
  }
}
```

#### 5. Install ESLint + Prettier Integration (Optional but Recommended)
- To avoid conflicts between ESLint and Prettier:

```bash
pnpm install -D eslint-config-prettier eslint-plugin-prettier
```

- Update your eslint.config.js:

```javascript
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      prettierConfig,
    ],
    plugins: {
      prettier: prettier,
    },
    rules: {
      'prettier/prettier': 'warn',
    },
  },
])
```

#### 6. VS Code Integration (Recommended)
- Update settings.json

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### Tailwind CSS Prettier Plugin
- The `prettier-plugin-tailwindcss` plugin automatically sorts your Tailwind classes in the recommended order:

```bash
pnpm install -D prettier-plugin-tailwindcss
```

- Update .prettierrc

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### Add ESLint Accessibility (a11y) Plugin

#### 1. Install Plugin

```bash
pnpm install -D eslint-plugin-jsx-a11y
```

#### 2. Update eslint.config.js
```javascript
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default defineConfig([
  {
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      // All strict a11y rules as warnings
      ...Object.fromEntries(
        Object.entries(jsxA11y.configs.strict.rules).map(([key]) => [
          key,
          'warn'
        ])
      ),
  },
])
```

#### 3. Add Lint Scripts to package.json

```json
{
  "scripts": {
    "lint": "eslint . --ext ts,tsx,js,jsx",
    "lint:fix": "eslint . --ext ts,tsx,js,jsx --fix"
  }
}
```

### Configure vercel for deployment
- Create vercel.json and configuration

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Add Testing to your Vite React Project

#### 1. Install Dependencies

```bash
pnpm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

#### Detailed of each Packages:

- `vitest` - The test runner (replaces Jest). It runs your tests and watches for changes.
- `jsdom` - Simulates a web browser environment in Node.js so you can render React components without a real browser.
- `@testing-library/react` - Tools to render components and query elements (e.g., getByText).
- `@testing-library/jest-dom` - Adds powerful "matchers" to your assertions (e.g., expect(element).toBeInTheDocument()).
- `@testing-library/user-event` - Simulates real user interactions like clicking and typing more accurately than built-in fireEvent.

#### 2. Configure vite.config.js
- Add the test object to your configuration. This tells Vitest to use jsdom and where to find your setup file:

```javascript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests/vitest-setup.ts',
  },
});
```

#### 3. Create Test Setup File
- Create vitest-setup.ts in src > __tests__ folder

```javascript
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// Cleanup after each test
afterEach(() => {
  cleanup();
});
```

#### 4. Update tsconfig.app.json
- Add Vitest types:

```json
{
  "compilerOptions": {
    "types": ["vitest/globals", "@testing-library/jest-dom"]
  }
}
```

#### 5. Add Test Scripts to package.json

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```