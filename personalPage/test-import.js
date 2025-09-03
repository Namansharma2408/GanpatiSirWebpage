// Test file to check if webp imports work
const modules = import.meta.glob('./src/assets/gallery/*.{webp,WEBP}', {
  eager: true,
  as: 'url'
});

console.log('Import test:', modules);
