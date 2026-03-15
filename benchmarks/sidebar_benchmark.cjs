const { performance } = require('perf_hooks');

// Mock registry similar to the real one
function generateRegistry(size) {
  const categories = ['Templates', 'UI Components', '3D & Interactive', 'Text Animations'];
  return Array.from({ length: size }, (_, i) => ({
    category: categories[i % categories.length],
    name: `Component ${i}`,
    slug: `component-${i}`,
  }));
}

function runLogic(registry) {
  const categories = Array.from(new Set(registry.map(c => c.category)));

  const componentSections = categories.map(cat => ({
    title: cat,
    items: registry
      .filter(c => c.category === cat)
      .map(c => ({
        title: c.name,
        path: `/components/${c.slug}`,
      }))
  }));
  return componentSections;
}

const smallRegistry = generateRegistry(44); // Current size
const largeRegistry = generateRegistry(1000); // Future size

const ITERATIONS = 10000;

console.log('Running benchmark...');

const startSmall = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
  runLogic(smallRegistry);
}
const endSmall = performance.now();

const startLarge = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
  runLogic(largeRegistry);
}
const endLarge = performance.now();

console.log(`Small registry (44 items) x ${ITERATIONS} ops: ${(endSmall - startSmall).toFixed(2)}ms`);
console.log(`Average per render (small): ${((endSmall - startSmall) / ITERATIONS).toFixed(4)}ms`);

console.log(`Large registry (1000 items) x ${ITERATIONS} ops: ${(endLarge - startLarge).toFixed(2)}ms`);
console.log(`Average per render (large): ${((endLarge - startLarge) / ITERATIONS).toFixed(4)}ms`);
