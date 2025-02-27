# React + Vite Project Setup Guide

This guide provides a basic understanding of how this React + Vite project is structured and how to work with it, especially if you're coming from a pure HTML, CSS, and JavaScript background.

## Project Structure

Here's a breakdown of the key files and directories:

- `index.html`: The main HTML file that serves as the entry point for the application.
- `src/`: This directory contains all the React source code.
  - `src/main.jsx`: The main JavaScript file that initializes the React application. It renders the `<App />` component into the `root` element in `index.html`.
  - `src/App.jsx`: The main application component that handles routing.
  - `src/page.tsx`: An example page component.
  - `src/components/`: Reusable React components.
    - `src/components/ui/`: UI components built with Tailwind CSS and Radix UI.
      - `src/components/ui/button.tsx`: A button component.
      - `src/components/ui/input.tsx`: An input component.
  - `src/lib/`: Utility functions.
    - `src/lib/utils.ts`: Utility functions, including `cn` for class name merging.
  - `src/assets/`: Static assets like images.
  - `src/globals.css`: Global CSS file where Tailwind CSS directives are imported.
- `vite.config.mjs`: Configuration file for Vite, the build tool.
- `package.json`: Contains project metadata, dependencies, and scripts.
- `tsconfig.json`: Configuration file for TypeScript.
- `components.json`: Configuration for `shadcn-ui` components.
- `.gitignore`: Specifies intentionally untracked files that Git should ignore.

## Setting Up the Project

1.  **Install Node.js:** Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

2.  **Install Dependencies:** Open your terminal, navigate to the project directory, and run:

    ```sh
    npm install
    ```

    This command installs all the necessary packages specified in package.json.

3.  **Start the Development Server:** Run the following command to start the development server:

    ```sh
    npm run dev
    ```

    This will start the Vite development server, and you can view the application in your browser, usually at `http://localhost:3000`.

## Routing

The project uses `react-router-dom` for handling navigation between different pages. Here's how routing is set up:

- **`src/App.jsx`**: This file configures the routes. It dynamically imports page components and assigns them to specific paths.
- **Dynamic Route Creation**: The `import.meta.glob` function is used to find all files matching the pattern `./**/page.{tsx,jsx,js,ts}`. This allows the application to automatically create routes for each page component.
- **`getRoutePath` Function**: This function extracts the route path from the file path of each page component.
- **`createBrowserRouter`**: This function from `react-router-dom` creates a router instance with the defined routes.
- **`RouterProvider`**: This component makes the router available to the rest of the application.

### How to Create a New Page

1.  **Create a New Page Component:** Create a new folder in the src directory (or a subdirectory) then create a file the name page.tsx (or `.jsx`, `.js`, `.ts`). For example, page.tsx.

    ```jsx
    // src/about/page.tsx
    function AboutPage() {
      return (
        <div>
          <h1>About Us</h1>
          <p>This is the about page.</p>
        </div>
      );
    }

    export default AboutPage;
    ```

2.  **The route will be automatically created:** The application automatically creates a route based on the file path. In this case, the route will be `/about`.

## Styling with Tailwind CSS

This project uses Tailwind CSS for styling. Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined CSS classes that you can use to style your HTML elements.

- **`src/globals.css`**: This file imports the Tailwind CSS directives.
- **Utility Classes**: You can add Tailwind CSS classes directly to your JSX elements.

  ```jsx
  <div className="text-3xl font-bold text-blue-500">Hello, Tailwind CSS!</div>
  ```

## Working with Components

The project is component-based, meaning the UI is broken down into reusable components.

### Creating a New Component

1.  **Create a New Component File:** Create a new file in the components directory (or a subdirectory). For example, `src/components/MyComponent.jsx`.

    ```jsx
    // src/components/MyComponent.jsx
    function MyComponent() {
      return (
        <div className="bg-gray-100 p-4 rounded-md">
          <h2>My Component</h2>
          <p>This is a reusable component.</p>
        </div>
      );
    }

    export default MyComponent;
    ```

2.  **Import and Use the Component:** Import the component into another component or page and use it.

    ```jsx
    // src/page.tsx
    import MyComponent from "@/components/MyComponent";

    function HomePage() {
      return (
        <div>
          <h1>Home Page</h1>
          <MyComponent />
        </div>
      );
    }

    export default HomePage;
    ```

## `cn` Utility Function

The `cn` function in utils.ts is used to merge Tailwind CSS classes conditionally. It uses `clsx` and `tailwind-merge` under the hood.

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### How to Use `cn`

```jsx
import { cn } from "@/lib/utils";

function Button({ className, children }) {
  return (
    <button
      className={cn(
        "bg-blue-500 text-white font-bold py-2 px-4 rounded",
        className
      )}
    >
      {children}
    </button>
  );
}
```

In this example, the `cn` function merges the base button classes with any additional classes passed in via the `className` prop.

## Shadcn UI

This project uses `shadcn-ui` for pre-built UI components.

### Using Shadcn UI Components

1.  **Import the Component:** Import the desired component from `@/components/ui/`.

    ```jsx
    import { Button } from "@/components/ui/button";

    function MyPage() {
      return (
        <div>
          <Button>Click me</Button>
        </div>
      );
    }
    ```

2.  **Customize the Component:** You can customize the component by passing in different props. Refer to [#FILE:BUTTON.TSX CONTEXT](C:/Users/Gamer2Language/Desktop/Portfolio/react-vite/src/components/ui/button.tsx) for available props.

## Conclusion

This guide should give you a basic understanding of how this React + Vite project is structured and how to work with it. Remember to consult the documentation for React, Vite, Tailwind CSS, and other libraries used in this project for more detailed information.
