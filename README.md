# ThoughtNest

ThoughtNest is a minimal, beautiful client-side journal app built with plain HTML, CSS, and JavaScript. It stores entries in the browser's `localStorage`, supports tags and content, and shows a random uplifting thought in the footer.

---

**Live demo**: Open `index.html` in your browser (no build step required).


## Features

- Clean, responsive single-page layout for creating journal entries
- Title, tags and multi-line content fields
- Saves entries to `localStorage` (persisted in your browser)
- Random inspirational thought shown in the footer
- Small, dependency-free codebase — easy to read and extend


## Quick Start

1. Clone the repo or download the folder.

2. Open directly in your browser:

```bash
# From project root
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

3. Or serve over a simple HTTP server (recommended for some browsers):

```bash
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```


## Usage

- Type a title, date, mood, comma-separated tags, and your content.
- Click the Save button to store the entry in `localStorage`.
- Entries are currently saved as a simple array in `localStorage` under the `journals` key.


## Developer notes

- Files of interest:
  - `index.html` — markup and structure
  - `styles.css` — styling and layout
  - `app.js` — application logic (saving, UI hooks, random thought)

- The Save button in the default HTML is `type="submit"`. If you experience a page reload on save, either:
  - Change the button to `type="button"`, or
  - The JS already prevents the default submit behavior when clicking Save.

- To debug entry saving:
  - Open DevTools → Application → Local Storage and inspect the `journals` key.

- Suggestions for improvements:
  - Render saved journals in the left column and allow deletion/edit
  - Add timestamps and mood selection stored with each entry
  - Export / import entries (JSON)
  - Replace `localStorage` with a small backend for sync across devices


## File structure

```
ThoughtNest/
├── index.html
├── styles.css
├── app.js
└── README.md
```


Made with ❤️ — enjoy journaling.
