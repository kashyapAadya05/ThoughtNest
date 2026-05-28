# ThoughtNest

ThoughtNest is a client-side journal app built with plain HTML, CSS, and JavaScript. It saves data in browser local storage and runs with no build tools or dependencies.

## What It Does

- Create journal entries with title, date, mood, tags, and content.
- Render saved entries in the left panel instantly after saving.
- Color each entry card based on mood.
- Show mood emojis in both the mood selector and rendered entries.
- Delete entries using the delete icon on each card.
- Display a random motivational thought in the footer.
- Keep layout constrained to viewport height with internal panel scrolling.

## Storage

- Data is stored in local storage under the key `journals`.
- Each entry shape:

```json
{
  "id": "string",
  "title": "string",
  "date": "yyyy-mm-dd",
  "mood": "happy|sad|angry|calm|anxious|excited|motivated|tired|focused|lonely|grateful|confused|other",
  "content": "string",
  "tags": ["tag1", "tag2"]
}
```

## Run Locally

Open directly:

```bash
xdg-open index.html
```

Or serve via HTTP:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Project Files

- `index.html`: App structure and form.
- `styles.css`: Dark theme, layout, card styles, responsive rules.
- `app.js`: Entry save/render/delete logic, mood coloring, random thought.

## Notes

- Save uses form submit with `preventDefault()` in JS.
- If you want a clean reset while testing, clear local storage for this site in browser DevTools.

## Future Improvements

- Add edit-in-place for existing entries.
- Add search/filter by mood or tags.
- Add export/import JSON backup.
- Add optional backend sync.
