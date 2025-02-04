// function displayMemoryUsage() {
//     setInterval(() => {
 
//         if (navigator.deviceMemory) {
//             const totalMemory = navigator.deviceMemory;
//             const freeMemory = totalMemory * 0.75; 
//             const usedMemory = totalMemory - freeMemory;

//             const freeMemoryPercentage = (freeMemory / totalMemory) * 100;

//             console.clear();
//             console.log(`Total Memory: ${totalMemory} GB`);
//             console.log(`Used Memory: ${usedMemory.toFixed(2)} GB`);
//             console.log(`Free Memory: ${freeMemory.toFixed(2)} GB`);
//             console.log(`Percentage of Free Memory: ${freeMemoryPercentage.toFixed(2)}%`);
//             console.log("-".repeat(40));
//         } else {
//             console.log("Device memory information is not available in your browser.");
//         }
//     }, 5000);
// }

// displayMemoryUsage();
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