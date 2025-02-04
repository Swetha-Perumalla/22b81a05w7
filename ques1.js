const os = require('os');

function displayMemoryUsage() {
    setInterval(() => {
        const totalMemory = os.totalmem();
        const freeMemory = os.freemem();
        const usedMemory = totalMemory - freeMemory;

        const freeMemoryPercentage = (freeMemory / totalMemory) * 100;

        console.clear();
        console.log(`Free Memory: ${freeMemory} bytes`);
        console.log(`Percentage of Free Memory: ${freeMemoryPercentage.toFixed(2)}%`);
    }, 5000); 
}

displayMemoryUsage();