# React Router Dom - Intro (Module 37)

This project demonstrates the core concepts of `react-router` and `react-router-dom` (v6/v7) in a React application. It covers layout management, dynamic routing, data loading using `loader`, and lazy loading with `Suspense`.

## Key Features

- **Nested Routing**: Using `children` and `<Outlet />` to create complex layouts.
- **Dynamic Routing**: Implementation of dynamic paths like `/users/:userId` and `/posts/:postId`.
- **Data Loaders**: Fetching data directly in the route definition using the `loader` function.
- **Link & NavLink**: Navigating between routes without refreshing the page.
- **State Management during Navigation**: Using `useNavigation` to show loading indicators.
- **Suspense & Promises**: Handling experimental or modern data fetching patterns.

## Project Structure

- `src/main.jsx`: The central configuration where `createBrowserRouter` is defined.
- `components/Root/`: The main layout wrapper containing the `Header`, `Footer`, and `Outlet`.
- `components/Header/`: Navigation links using `NavLink` for active state styling.
- `components/Users/`: Fetches and displays a list of users using `useLoaderData`.
- `components/UserDetails/`: Displays detailed information for a single user based on recursion parameter.
- `components/Posts/`: Displays a list of posts with links to individual post details.

## Routes Overview

| Route | Component | Description |
| :--- | :--- | :--- |
| `/` | `Home` | Landing page of the application. |
| `/users` | `Users` | Displays a list of users fetched from JSONPlaceholder. |
| `/users/:userId` | `UserDetails` | Shows details for a specific user. |
| `/posts` | `Posts` | Displays a list of posts. |
| `/posts/:postId` | `PostDetails` | Detailed view for a specific blog post. |
| `/mobile` | `Mobile` | Placeholder for mobile-related content. |
| `/laptop` | `Laptop` | Placeholder for laptop-related content. |
| `*` | `404` | Catch-all route for non-existent paths. |

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

---
*Created as part of the Dream-Journey 2026 Milestone-07.*
