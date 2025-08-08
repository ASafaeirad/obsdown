## obsdown

Simple, configurable, and transparent countdown timer for streaming overlays and OBS Browser Source.

### Features

- Transparent background
- Config via URL
- Google Fonts auto-load

### URL parameters
- **seconds**: integer duration in seconds (default: `300`).
  - Example: `seconds=900` for 15 minutes.
- **before**: optional text shown above the timer.
  - Example: `before=Starting%20Soon`.
- **color**: hex color for text, without the leading `#`. Supports 3 or 6 hex digits.
  - Examples: `color=fff`, `color=1f2937`.
- **size**: base font size in pixels applied to the whole page.
  - Example: `size=140`.
- **font-family**: a Google Fonts family name to load and apply.
  - Examples: `font-family=Inter`, `font-family=Press%20Start%202P` (or `Press+Start+2P`).

### Examples
```
https://asfaeirad.github.io/?seconds=300&before=Break&color=ffffff&size=120&font-family=Inter
http://asfaeirad.github.io/?seconds=600&before=Short%20Break&color=ff4757&size=110&font-family=Inter
http://asfaeirad.github.io/?seconds=1800&before=Intermission&color=00ffaa&size=160&font-family=Press%20Start%202P
```

### Using with OBS
1. In OBS, add a **Browser** source.
2. Set the **URL** to your running dev server or deployed build with desired parameters, for example:
   - `http://asfaeirad.github.io/?seconds=900&before=Break&color=ffffff&size=140&font-family=Inter`
3. To restart the countdown, use the Browser source’s “Refresh cache of current page” or toggle the source visibility.


