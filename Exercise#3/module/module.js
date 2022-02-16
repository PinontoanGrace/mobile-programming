// [1] Export & Import
function welcome(user) {
    console.log(`Welcome to Mobile Application Development class, ${user}!`);
  }
  
  function goodbye(user) {
    console.log(`Goodbye, ${user}! See You Next Week :)`);
  }
  
  export {welcome, goodbye};
  
// [2] Export as & Import as
export {welcome as hi, goodbye as bye};

// [3] Export Default
let pets = ["dog","cat","bird","wolf"];
export default pets;