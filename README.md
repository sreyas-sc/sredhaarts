# Ardha Arts — a painting portfolio site

A multi-page React site for showcasing paintings: a home page, a filterable
gallery, an individual page per painting, an about page, and a contact page.
Built with Vite + React Router. No backend needed to run it.

## 1. Install prerequisites (one-time)

You need **Node.js** (version 18 or later) installed on your PC.

- Check if you already have it: open a terminal / command prompt and run
  ```
  node -v
  ```
- If that fails or shows a version under 18, download and install Node.js
  from **https://nodejs.org** (choose the "LTS" version, it includes npm).

## 2. Get the project onto your PC

Unzip the project folder you downloaded (`painting-portfolio.zip`) anywhere
you like, e.g. your Desktop. You should see this folder structure:

```
painting-portfolio/
  src/
    assets/paintings/   ← your photos go here
    components/
    data/paintings.js   ← edit this to add/change paintings
    pages/
  index.html
  package.json
  ...
```

## 3. Install dependencies

Open a terminal, navigate into the project folder, and run:

```bash
cd path/to/painting-portfolio
npm install
```

This downloads React, React Router, and Vite into a `node_modules` folder
(it only needs to happen once, or again after you pull updates).

## 4. Add your paintings

1. Copy your painting photos into `src/assets/paintings/`.
2. Open `src/data/paintings.js`. For each painting, fill in a JS object:
   title, year, medium, dimensions, category, description, and — importantly
   — `image: 'your-filename.jpg'` matching the file you just copied in.
3. Add or remove entries freely; the gallery, homepage, and detail pages all
   read from this one file.

Until you replace the sample entries, the site runs with 6 placeholder
paintings so you can see the layout working immediately.

## 5. Run it locally

```bash
npm run dev
```

Then open the URL it prints (usually **http://localhost:5173**) in your
browser. The page auto-refreshes whenever you save a file — leave this
running while you edit.

## 6. Personalize the text

A few places have placeholder copy worth swapping for your own:

- `src/components/Navbar.jsx` — the site name ("Ardha Arts")
- `src/pages/Home.jsx` — the hero headline and intro paragraph
- `src/pages/About.jsx` — your bio, portrait, and timeline
- `src/pages/Contact.jsx` — your real email address
- `src/components/Footer.jsx` — footer email/social links

## 7. Build for deployment

When you're ready to put it online:

```bash
npm run build
```

This produces a `dist/` folder containing the finished, static site. You can
upload that folder to any static host — **Netlify**, **Vercel**, **GitHub
Pages**, or your own server all work well and are usually free for a site
this size. To preview the production build locally first:

```bash
npm run preview
```

## Notes

- The contact form currently opens the visitor's email client with the
  message pre-filled (there's no backend to receive it, since this is a
  static site). If you want real form submissions without hosting a
  server, plug in a free service like Formspree or Getform — the comment
  in `src/pages/Contact.jsx` shows exactly where to make that change.
- The "spotlight" effect on gallery images follows the cursor to mimic
  gallery track-lighting — it's plain CSS + a bit of JS, no dependencies.
