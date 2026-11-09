# GitHub User Finder

A React + Vite app that lets users search for any GitHub username and view key profile information, public repositories, and quick profile links.

## Live Demo

https://devpeek.netlify.app/

## Features

- Search GitHub users by username
- Display profile photo, name, bio, location, company, blog, followers, and following
- View a list of public repositories
- See recent repo data such as stars and links
- Search history saved in local storage
- Responsive layout for desktop and mobile

## Tech Stack

- React
- Vite
- GitHub REST API
- CSS

## Getting Started

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app locally:

   ```bash
   npm run dev
   ```

4. Open the local URL shown in the terminal, usually:

   ```bash
   http://localhost:5173
   ```

## Production Build

```bash
npm run build
```

## Project Structure

```bash
github-user-finder/
├── public/
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── App.jsx
│   ├── app.css
│   ├── main.jsx
│   └── components/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## SEO and Social Metadata

The project includes:

- canonical URL
- robots.txt
- sitemap.xml
- Open Graph tags
- Twitter Card metadata
- social preview image

These are configured for the deployed site at https://devpeek.netlify.app/.

## Notes

This app uses the public GitHub REST API, so unauthenticated request limits may apply depending on usage volume.
