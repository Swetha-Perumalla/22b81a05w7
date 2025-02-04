const os = require('os');

function logSystemUptime() {
    const uptimeInSeconds = os.uptime();

    const days = Math.floor(uptimeInSeconds / (24 * 3600));
    const hours = Math.floor((uptimeInSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeInSeconds % 3600) / 60);

    const uptimeString = `${days} days, ${hours} hours, ${minutes} minutes`;

    console.log("System Uptime:", uptimeString);
}

logSystemUptime();
