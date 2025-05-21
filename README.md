# URL Shortener Frontend (Vue 3 + Vite)

This is the frontend component of the URL Shortener challenge. It is a Single Page Application (SPA) built using Vue 3 and Vite, interacting with a Rails API backend.

## 📦 Requirements

- Node.js (v18+ recommended)
- npm or yarn

## 🚀 Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/salarhp/url-shortener-frontend.git
cd url-shortener-frontend
```

2. **Install dependencies:**

```bash
npm install
```

or

```bash
yarn
```

3. **Run the development server:**

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## ✨ Features

- Input a long URL to receive a shortened link
- Custom slug input (optional)
- Set expiration date for the short link (optional)
- Choose link status (active, inactive, archived)
- View list of previously shortened URLs with original + short form + click count

---

## 🔗 Integration with Backend

- Uses Axios to communicate with Rails backend on `http://localhost:3000`.
- Make sure the backend server is running

---

## 📎 Notes

- This frontend assumes mocked authentication handled on the backend.
- All shortened links belong to a mocked `current_user` with ID = 1.
- This is a lightweight prototype — not intended for production use without security hardening and input validation.
