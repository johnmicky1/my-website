A simple countdown page for the pottery event, built with plain HTML, CSS and JavaScript (no libraries or build step).

## Event details

- **Date:** 5th December 2026, 2:00 PM till late
- **Location:** Kyaliwajala GC8
- **Fees:** 35,000 UGX per person
- **RSVP:** Naume, 0782 400927
- **Treasurer:** Annet Achom, 0772 141225

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure and content |
| `style.css` | Styling, including dark mode |
| `script.js` | Countdown logic |
| `poster.jpg` | Event poster image |

## Usage

1. Keep all four files in the same folder.
2. Open `index.html` in any web browser.

To host it online, upload the whole folder to any static web host.

## Changing the date

Open `script.js` and edit the `target` line:

```js
var target = new Date("2026-12-05T14:00:00+03:00").getTime();
```

The `+03:00` is Uganda time (EAT). Change it if you use another time zone.

## Behaviour

- Counts down live in days, hours, minutes and seconds.
- Shows "It's happening now!" for 12 hours after the start time.
- Shows a thank-you message after that.
- Works on phones and in light or dark mode.
