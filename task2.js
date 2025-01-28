// Question 2: 
function mul(number, callback) {
    const result = number * 2;
    callback(result);
}
  
function sub(number, callback) {
    const result = number - 3;
    callback(result);
}
  
function add(number, callback) {
    const result = number + 10;
    callback(result);
}
  
function performOperations(number) {
    mul(number, (result1) => {
      sub(result1, (result2) => {
        add(result2, (result3) => {
          console.log(result3);
        });
      });
    });
}
  
performOperations(8);
  