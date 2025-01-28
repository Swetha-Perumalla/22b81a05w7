// Question 5:
function fetchData(url) {
    return new Promise((resolve, reject) => {
      if (url.includes('error')) {
        reject('Error fetching data');
      } else {
        resolve('Data fetched successfully');
      }
    });
  }
  
  fetchData('https://example.com').then(console.log).catch(console.log);
  fetchData('https://error.com').then(console.log).catch(console.log);