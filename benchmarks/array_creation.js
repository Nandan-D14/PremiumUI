
const iterations = 1000000;

console.log(`Running ${iterations} iterations...`);

// Baseline: Creating array every time
const startBaseline = performance.now();
for (let i = 0; i < iterations; i++) {
  const arr = [...Array(20)];
  arr.map((_, idx) => idx);
}
const endBaseline = performance.now();
const baselineTime = endBaseline - startBaseline;

// Optimized: Using constant array
const DOTS = [...Array(20)];
const startOptimized = performance.now();
for (let i = 0; i < iterations; i++) {
  const arr = DOTS;
  arr.map((_, idx) => idx); // map creates a new array, but we avoid the initial spread creation
}
const endOptimized = performance.now();
const optimizedTime = endOptimized - startOptimized;

console.log(`Baseline (Creation in loop): ${baselineTime.toFixed(4)} ms`);
console.log(`Optimized (Constant): ${optimizedTime.toFixed(4)} ms`);
console.log(`Improvement: ${(baselineTime / optimizedTime).toFixed(2)}x faster`);
