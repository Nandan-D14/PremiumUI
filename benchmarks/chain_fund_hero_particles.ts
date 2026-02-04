
const iterations = 100000;

console.log(`Running ${iterations} iterations to measure particle generation cost...`);

// Baseline: Generating random particles in every render
const startBaseline = performance.now();
for (let i = 0; i < iterations; i++) {
  // Simulate the map loop with random generation
  [...Array(5)].map((_, i) => ({
    key: i,
    width: Math.random() * 4 + 2 + 'px',
    height: Math.random() * 4 + 2 + 'px',
    top: Math.random() * 80 + '%',
    right: Math.random() * 40 + 10 + '%',
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2
  }));
}
const endBaseline = performance.now();
const baselineTime = endBaseline - startBaseline;

// Optimized: Generating particles once
const startOptimizedSetup = performance.now();
const PARTICLES = [...Array(5)].map((_, i) => ({
    key: i,
    width: Math.random() * 4 + 2 + 'px',
    height: Math.random() * 4 + 2 + 'px',
    top: Math.random() * 80 + '%',
    right: Math.random() * 40 + 10 + '%',
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2
}));
const endOptimizedSetup = performance.now();

const startOptimizedLoop = performance.now();
for (let i = 0; i < iterations; i++) {
  // Simulate using the constant data
  PARTICLES.map(p => p);
}
const endOptimizedLoop = performance.now();

// We include the setup time in the "first render" cost, but for re-renders (which we are simulating with iterations),
// the cost is just the loop.
// However, to be fair comparison of "Total CPU time spent during N renders",
// Baseline = N * generation
// Optimized = 1 * generation + N * access
// But typically we care about "Per Render" cost.

const optimizedTime = endOptimizedLoop - startOptimizedLoop;

console.log(`Baseline (Generation every render): ${baselineTime.toFixed(4)} ms`);
console.log(`Optimized (Reuse constant data): ${optimizedTime.toFixed(4)} ms`);
console.log(`Improvement: ${(baselineTime / optimizedTime).toFixed(2)}x faster per render`);
