# Module 32: React Core Concepts (Part 2)

This module focuses on more advanced React concepts including state management, event handling, and side effects (API calls).

## Key Topics Practiced:

- **Event Handling**:
  - Different ways to attach click handlers (`onClick`).
  - Passing parameters to event handlers using arrow functions.
- **State Management (useState)**:
  - `Counter.jsx`: Managing a simple numeric state.
  - `Players.jsx`: Managing dynamic state for a sports team.
- **Side Effects (useEffect & Fetch)**:
  - Fetching data from external APIs (JSONPlaceholder).
  - Modern data fetching patterns:
    - Standard `fetch` with `.then()`.
    - `async/await` patterns.
    - **Suspense & Promises**: Using `<Suspense>` to handle loading states for promises.
- **Component Composition**:
  - `Friends.jsx` & `Friend.jsx`: Displaying a list of users.
  - `Posts.jsx` & `Post.jsx`: Displaying a list of blog posts.

## Components Created:

- `Counter.jsx`: Increment/Decrement state logic.
- `Players.jsx`: Team score/player count management.
- `User.jsx`, `Friends.jsx`, `Friend.jsx`: Practicing API data maps and loading states.
- `Posts.jsx`, `Post.jsx`: Handling larger datasets from APIs.
- `Batsman.jsx`: Practice component for state and events.
