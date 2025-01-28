 // Question 6: 
 const sumPromises = [5, 10, 15].reduce((promise, value) => {
    return promise.then(sum => sum + value);
  }, Promise.resolve(0));
  
  sumPromises.then(console.log);  