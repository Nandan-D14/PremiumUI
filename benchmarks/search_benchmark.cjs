const { performance } = require('perf_hooks');

// Mock data generation
const generateMockData = (count) => {
  const categories = ['Components', 'Templates', 'Documentation', 'Utils', 'Hooks'];
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      type: i % 10 === 0 ? 'doc' : 'component',
      title: `Item Title ${i} ${Math.random().toString(36).substring(7)}`,
      description: `This is a description for item ${i} with some random text ${Math.random().toString(36).substring(7)}`,
      path: `/path/to/item/${i}`,
      category: categories[Math.floor(Math.random() * categories.length)]
    });
  }
  return data;
};

const items = generateMockData(1000); // Test with 1000 items
const query = 'item title 5'; // A common query

// Original Implementation
function originalFilter(searchItems, searchQuery) {
  if (!searchQuery.trim()) return [];
  const lowerQuery = searchQuery.toLowerCase();
  return searchItems.filter(item =>
    item.title.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery) ||
    item.category.toLowerCase().includes(lowerQuery)
  ).slice(0, 5);
}

// Optimized Implementation (What we plan to do)
// Pre-calculate lowercased strings
const preCalculatedItems = items.map(item => ({
  ...item,
  _lowerTitle: item.title.toLowerCase(),
  _lowerDesc: item.description.toLowerCase(),
  _lowerCat: item.category.toLowerCase(),
}));

function optimizedFilter(searchItems, searchQuery) {
  if (!searchQuery.trim()) return [];
  const lowerQuery = searchQuery.toLowerCase();
  return searchItems.filter(item =>
    item._lowerTitle.includes(lowerQuery) ||
    item._lowerDesc.includes(lowerQuery) ||
    item._lowerCat.includes(lowerQuery)
  ).slice(0, 5);
}

const ITERATIONS = 10000;

console.log(`Running benchmark with ${items.length} items and ${ITERATIONS} iterations...`);

// Run Original
const startOriginal = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
  originalFilter(items, query);
}
const endOriginal = performance.now();
const timeOriginal = endOriginal - startOriginal;
console.log(`Original Filter: ${timeOriginal.toFixed(2)}ms`);

// Run Optimized
const startOptimized = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
  optimizedFilter(preCalculatedItems, query);
}
const endOptimized = performance.now();
const timeOptimized = endOptimized - startOptimized;
console.log(`Optimized Filter: ${timeOptimized.toFixed(2)}ms`);

console.log(`Improvement: ${((timeOriginal - timeOptimized) / timeOriginal * 100).toFixed(2)}% faster`);
