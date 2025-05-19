# Yair Herman Architecture ( Work in progress )

A modern, bilingual (Hebrew/English) portfolio website for Yair Herman, an Israeli architect specializing in private residential design and select public projects.

---

## ✨ Features

- React + Vite + Tailwind CSS
- Responsive layout (mobile & desktop)
- Project gallery with filtering
- Image enlargement via lightbox modal
- EmailJS integration for contact form
- Accessibility widget (Nagishli)
- Right-to-left (RTL) Hebrew support

---

## 🚀 Deployment

Built with Vite, deployed to [Netlify](https://www.netlify.com/) (or your platform).

```bash
npm install
npm run dev
```

````

To build for production:

```bash
npm run build
```

---

## 📦 Folder Structure

```
src/
├── components/       # Shared UI components
├── pages/            # Page components
├── translations/     # i18n language support
├── data/             # (Ignored in production – see notes below)
└── services/         # API / cloud image handling
```

---

## 📧 Contact Form

Powered by [EmailJS](https://emailjs.com) – form submissions are sent directly to Gmail using their public API.

---

## 📸 Image Handling

Images are stored and optimized via [Cloudinary](https://cloudinary.com), using `f_auto,q_auto` for performance.

---

## 🛠 Developer Notes

- `data/` folder contains `dataJSON.json` used during local development.
- This folder is ignored in `.gitignore` and **is not included in production builds**.
- To test locally without Cloudinary access, populate `dataJSON.json` with mock data.

---

## ✅ Accessibility

Includes Nagishli (נגיש לי) widget for Israeli accessibility compliance.

---

## 📝 License

This project is for portfolio use only. Not intended for redistribution or commercial resale.

````
