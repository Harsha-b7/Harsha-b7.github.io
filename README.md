# Harshavardhan Yanamadala — Portfolio (React + Vite)

## Run it in VS Code

You need **Node.js 18+** installed (https://nodejs.org — pick the LTS version).

1. Unzip this folder and open it in VS Code (**File → Open Folder**).
2. Open the terminal (**Terminal → New Terminal**) and run:

   ```bash
   npm install
   npm run dev
   ```

3. Open the link it prints (usually http://localhost:5173).

## Edit your content

All text lives in **`src/data.js`** — skills, jobs, projects, education, contact info.
Change it there and the page updates automatically.

- **Add a photo:** put `photo.jpg` in the `public/` folder, then follow the comment in `src/components/About.jsx`.
- **Colors / fonts:** edit the variables at the top of `src/index.css`.

## Project structure

```
src/
  data.js            ← your content
  index.css          ← all styles
  App.jsx            ← page layout
  components/
    Navbar.jsx  Hero.jsx  About.jsx  Skills.jsx
    Experience.jsx  Projects.jsx  Education.jsx
    Contact.jsx  Footer.jsx  SideSocials.jsx  Section.jsx
```

## Put it online (Netlify)

1. Run `npm run build` — this creates a **`dist`** folder.
2. In Netlify, open your project → **Deploys** → drag the **`dist`** folder onto the upload area.
3. Make sure **Project configuration → General → Visitor access → Project visibility** is set to **Public**.

Or connect a GitHub repo to Netlify with build command `npm run build` and publish directory `dist`,
so every push updates the site automatically.
