// Eagerly imports every image in src/assets/paintings/ so that paintings.js
// can just reference plain filenames (e.g. "quiet-harbor.jpg") without
// anyone having to write import statements by hand.
const modules = import.meta.glob('../assets/paintings/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

// Build a lookup: { "quiet-harbor.jpg": "/resolved/asset/path.jpg" }
const lookup = {}
for (const path in modules) {
  const filename = path.split('/').pop()
  lookup[filename] = modules[path]
}

export function getPaintingImage(filename) {
  return lookup[filename] || null
}
