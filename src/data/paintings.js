// ─────────────────────────────────────────────────────────────────────────
// This is the catalog for the whole site. Add one entry per painting.
//
// "image" must match a filename you've placed in: src/assets/paintings/
// If the file isn't found, the site shows a soft placeholder instead of
// breaking — so it's safe to fill this in before you have every photo ready.
// ─────────────────────────────────────────────────────────────────────────

const paintings = [
  {
    id: 'quiet-harbor',
    title: 'Quiet Harbor',
    year: 2024,
    medium: 'Oil on canvas',
    dimensions: '61 × 91 cm',
    category: 'Landscape',
    image: 'quiet-harbor.jpg',
    featured: true,
    available: true,
    description:
      'An early-morning study of still water and low light, built up in thin, deliberate layers.',
  },
  {
    id: 'red-interior',
    title: 'Red Interior',
    year: 2023,
    medium: 'Acrylic on board',
    dimensions: '46 × 61 cm',
    category: 'Interior',
    image: 'red-interior.jpg',
    featured: true,
    available: true,
    description:
      'A study in warmth and enclosure — the room as a held breath.',
  },
  {
    id: 'field-notes',
    title: 'Field Notes',
    year: 2023,
    medium: 'Oil on linen',
    dimensions: '76 × 102 cm',
    category: 'Landscape',
    image: 'field-notes.jpg',
    featured: true,
    available: false,
    description:
      'Loose, gestural marks describing a single field across four seasons.',
  },
  {
    id: 'portrait-in-blue',
    title: 'Portrait in Blue',
    year: 2022,
    medium: 'Oil on canvas',
    dimensions: '50 × 70 cm',
    category: 'Portrait',
    image: 'portrait-in-blue.jpg',
    featured: false,
    available: true,
    description: 'A restrained palette, built to let the gaze do the work.',
  },
  {
    id: 'still-life-no-4',
    title: 'Still Life No. 4',
    year: 2022,
    medium: 'Oil on board',
    dimensions: '35 × 45 cm',
    category: 'Still Life',
    image: 'still-life-no-4.jpg',
    featured: false,
    available: true,
    description: 'Fourth in an ongoing series on kitchen light.',
  },
  {
    id: 'night-crossing',
    title: 'Night Crossing',
    year: 2021,
    medium: 'Oil on canvas',
    dimensions: '80 × 100 cm',
    category: 'Landscape',
    image: 'night-crossing.jpg',
    featured: false,
    available: false,
    description: 'A bridge, a river, and very little else.',
  },
]

export default paintings

export const categories = [
  'All',
  ...Array.from(new Set(paintings.map((p) => p.category))),
]
