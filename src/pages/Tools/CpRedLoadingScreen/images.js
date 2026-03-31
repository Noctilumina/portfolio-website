// Auto-discovers all images in src/assets/loading-screens/
// Just drop new images in that folder -- no code changes needed.
const modules = import.meta.glob(
  '../../../assets/loading-screens/*.{png,jpg,jpeg,webp,gif}',
  { eager: true, import: 'default' }
);

const IMAGES = Object.values(modules);

export default IMAGES;
