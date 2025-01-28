
function createTimeoutPromise(timeoutDuration) {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject(new Error(`Operation timed out after ${timeoutDuration} milliseconds`));
        }, timeoutDuration);

       
        setTimeout(() => {
            
            clearTimeout(timeout);
            resolve('Operation completed successfully');
        }, Math.random() * timeoutDuration); 
    });
}


createTimeoutPromise(3000)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error.message);
    });