# Al Rawae Strategic Management Reveal Presentation

## Windows quick start

1. Extract the full ZIP.
2. Double-click `START_DEV.bat`.
3. On the first run, dependencies are installed automatically.
4. The presentation opens at `http://127.0.0.1:5173`.

## Manual commands

```bash
npm install
npm run dev
```

Build the presentation with:

```bash
npm run build
```

The production output is created in `dist/`.

## Files to edit in future revisions

- `src/main.jsx`: slide content, vertical stacks, speaker notes, animation configuration.
- `src/style.css`: visual design and animation styles.

`index.html` is intentionally simple and should normally not require modification.

## Navigation

- Right / Left: move between the main horizontal topics.
- Down / Up: open or close detailed slides under the current topic.
- Space: next slide.
- Esc: Reveal overview.
- S: speaker notes window.

A label beside the bottom-right arrows describes the available vertical content on each overview slide.

## Company Foundation animation

The Company Foundation overview rotates automatically through:

1. Central Value Proposition
2. Value
3. Mission

The active card expands and reveals details. The previous card contracts to its title. The existing vertical slides under Company Foundation are unchanged.
