# React Client Router Demo

A sleek, lightweight Single Page Application (SPA) that demonstrates **client-side routing** using React 18 and React Router DOM v6 entirely inside a single HTML file. 

This project shows how modern web applications manage navigation dynamically on the client side, bypassing traditional full-page browser refreshes.

---

## Features

* **Zero Build Tools:** Runs directly in the browser via UMD CDNs—no `npm install`, Webpack, or Vite setup required.
* **Instant Navigation:** Uses React Router DOM's `HashRouter` to instantly swap components without triggering a page reload.
* **Dynamic Active Links:** Automatically tracks the current URL path to highlight the active tab in the navigation bar.
* **Programmatic Routing:** Demonstrates the use of the `useNavigate` hook for action-based redirects (e.g., the "Go To Home" button).
* **Modern UI:** Wrapped in a clean, responsive card with a vibrant gradient border.

---

## Technical Stack

* **React 18** - UI Component framework
* **React Router DOM v6** - Client-side routing management
* **Babel Standalone** - In-browser compilation for JSX syntax

---

## How to Run Locally

Since this project relies on external CDNs and browser routing APIs, it should be served through a local development server rather than opened as a raw file.

1. Clone this repository or copy the `index.html` file code.
2. Open the project folder in **Visual Studio Code**.
3. Install the **Live Server** extension by Ritwick Dey (if you haven't already).
4. Right-click anywhere inside `index.html` and select **"Open with Live Server"**.
5. Your default browser will launch the application at `http://127.0.0.1:5500`.

---

## Project Structure Explained

* **`<HashRouter>`**: Encloses the application to sync the UI with the URL hash fragment (`/#/about`), which ensures seamless routing on static hosting environments like GitHub Pages.
* **`<Routes>` & `<Route>`**: Acts like a conditional switch statement, mapping paths like `/about` or `/contact` to their respective components.
* **`<Link>`**: Replaces standard HTML anchor tags (`<a>`) to intercept clicks and prevent default page refreshes.
