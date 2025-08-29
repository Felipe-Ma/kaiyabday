# Birthday Mini‑Site

A tiny, local‑only website with:

- Photos gallery with a remixable collage
- A dedicated note page
- A gift reveal page with confetti

## Quick Start

1. Open this folder in a terminal.
2. Start a simple local server:

   - Python 3: `python3 -m http.server 8000`

3. Visit `http://localhost:8000` in your browser.

## Add Your Photos

- Put image files into `assets/photos/` (e.g. `assets/photos/trip1.jpg`).
- Edit `assets/js/photos.js` and list each photo path inside `window.PHOTOS = [ ... ]`.

The Photos page shows everything in `window.PHOTOS`. The Collage section picks up to 12 at random; click “Shuffle” to reshuffle, and “Download” to save a PNG collage.

## Edit the Note

- Open `note.html` and replace the placeholder paragraphs with your message.

## Gift Reveal

- Place your ticket image at `assets/gift/tickets.png` (create the `gift` folder if needed).
- Open `gift.html` to customize copy. Clicking the gift box reveals the image and triggers confetti.

## Personalize

- Update headings/text in `index.html`, `photos.html`, `note.html`, and `gift.html`.
- Tweak styles in `assets/css/styles.css`.

## No Internet Needed

Everything is local; there are no external dependencies or CDNs.

