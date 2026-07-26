# Put your painting photos here

Drop your image files (.jpg, .jpeg, .png, or .webp) directly into this folder.

Then open `src/data/paintings.js` and, for each painting, set the `image`
field to match the filename you used — for example:

```js
image: 'quiet-harbor.jpg',
```

That's it. The gallery, homepage, and detail pages all pull from that one
data file, so you never have to touch the page code just to add a painting.

Tips:
- Use decent-resolution photos (at least 1200px on the long edge) — they'll
  be scaled down responsively, but you don't want to scale up.
- Consistent lighting/cropping across photos makes the gallery grid feel a
  lot more cohesive.
- If a filename in paintings.js doesn't match a file here, that painting
  will just show a placeholder tile instead of breaking the build.
