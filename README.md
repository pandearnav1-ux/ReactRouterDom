# React Client Router & Live Telemetry Demo

A sleek, lightweight Full-Stack Single Page Application (SPA) that demonstrates **client-side routing** using React 18 and React Router DOM v6, combined with a **live Node.js/Express analytics backend** that tracks route telemetry in real time.

This project showcases how modern web applications manage navigation dynamically on the client side without full-page browser refreshes, while simultaneously feeding user navigation metrics back to a persistent data store.

---

## Features

*   **Zero Build Tools Frontend:** Runs directly in the browser via UMD CDNs—no package installation or bundlers (Webpack/Vite) required for the client layer.
*   **Instant Client-Side Navigation:** Uses React Router DOM's `<HashRouter>` to instantly swap view components without triggering full browser reloads.
*   **Dynamic Nav Link Highlighting:** Automatically tracks the current active URL hash fragment path to update the state of the navigation bar.
*   **Programmatic Redirection:** Demonstrates action-based navigation updates via the native `useNavigate` hook.
*   **Automated Route Telemetry:** Features a custom React hook lifecycle pattern (`useRouteTelemetry`) that sends non-blocking asynchronous payload tracking reports down to the Express API whenever a route view finishes updating.
*   **Live Analytics Aggregation:** Backend processes tracking records on the fly and utilizes MongoDB aggregation pipelines to serve dynamic, real-time page-hit statistics back to the UI.

---

## Technical Stack

### Frontend Client
*   **React 18** – UI Component structure & lifecycle hooks
*   **React Router DOM v6** – Client-side routing management
*   **Babel Standalone** – In-browser runtime JSX compilation

### Backend API & Database
*   **Node.js & Express** – REST API routing middleware layer
*   **MongoDB & Mongoose** – Document-oriented persistent storage & collection aggregation

---

## Project Structure

```text
ReactRouterDom/
├── index.html            # React frontend (UI Client)
└── server.js             # Node/Express backend (Analytics API)
