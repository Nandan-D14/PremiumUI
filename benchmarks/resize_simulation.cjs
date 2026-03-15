const { performance } = require('perf_hooks');

function runSimulation(useDebounce) {
  let resizeCalls = 0;

  // The actual logic that would run on resize
  const resizeHandler = () => {
    resizeCalls++;
  };

  let handler = resizeHandler;

  if (useDebounce) {
    // Simple debounce implementation for simulation
    const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
      };
    };
    handler = debounce(resizeHandler, 100);
  }

  // Simulate 50 resize events firing every 10ms (total 500ms duration)
  // This mimics a user dragging a window resize handle for half a second.
  console.log(`Starting simulation: ${useDebounce ? 'Debounced (100ms)' : 'Raw Events'}`);

  return new Promise(async (resolve) => {
      const startTime = performance.now();

      for (let i = 0; i < 50; i++) {
        handler();
        await new Promise(r => setTimeout(r, 10)); // fire every 10ms
      }

      // Wait for debounce trailing edge if applicable
      if (useDebounce) {
          await new Promise(r => setTimeout(r, 150));
      }

      const endTime = performance.now();
      resolve({ calls: resizeCalls, time: endTime - startTime });
  });
}

(async () => {
    console.log("--- Resize Handler Performance Simulation ---\n");

    // Baseline
    const baseline = await runSimulation(false);
    console.log(`Result: ${baseline.calls} calls processed.`);

    console.log("\n-------------------------------------------\n");

    // Optimized
    const optimized = await runSimulation(true);
    console.log(`Result: ${optimized.calls} calls processed.`);

    const improvement = ((baseline.calls - optimized.calls) / baseline.calls * 100).toFixed(1);
    console.log(`\nReduction in calls: ${improvement}%`);
})();
