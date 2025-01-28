
  // Question 3:  
  function delayedMessage(message, delay, callback) {
    setTimeout(() => {
      console.log(message);
      callback();
    }, delay);
  }
  
  delayedMessage('Hello after 10 seconds', 10000, () => {
    console.log('Message displayed');
  });