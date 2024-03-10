/*
1)
Declare a function called theCoders that takes a driver and a navigator as arguments and prints out "The awesome coders for today is the driver Jennie and the navigator Alfons" 
Where Jennie represents the first argument passed in and Alfons the second.
When you've set that up, invoke the function to see if it works.
*/

const theCoders = (driver, navigator) => {
  console.log(
    `The awesome coders for today is the driver ${driver} and the navigator ${navigator}`
  );
};
theCoders("jennie", "tom");
/*
  2)
  Pass in only ONE name when you call the function and see what happens.
  (HINT, you should get undefined...)
  */

/*
If we only kept the name "Jennie" in theCoders we get undefined. Result:
"The awesome coders for today is the driver jennie and the navigator undefined"
  */

/*
  3) 
  create a function that checks which name is the longest when comparing the coders 
  and print out: "The driver has the longest name." or "The navigator has the longest name" 
  or if the names are the same length "The driver and the navigator has equally long names"
  */
const compareNameLengths = (driver, navigator) => {
  const driverLength = driver.length;
  const navigatorLength = navigator.length;

  if (driverLength > navigatorLength) {
    console.log("The driver has the longest name.");
  } else if (navigatorLength > driverLength) {
    console.log("The navigator has the longest name.");
  } else {
    console.log("The driver and the navigator have equally long names.");
  }
};

/*
  4) 
  to get user input you can use the prompt() and then store that into a variable.
  Such as 
  let userAge = prompt('How old are you?')
  Create a function that prompts the user for its age, then depending on the age will alert back different messages such as 
  alert('wow you are 33! that's young!')
  or alert('23! Younger than Zlatan') or something like that.
  Add as many conditonals as you want.
  */
function ageAlert() {
  let userAge = prompt("How old are you?");
  userAge = parseInt(userAge);

  if (userAge >= 100) {
    alert("Wow! You are " + userAge + "! That's impressive! 🔥");
  } else if (userAge >= 50) {
    alert("Wow! You are " + userAge + "! Still going strong! 💪");
  } else if (userAge >= 30) {
    alert(
      "Ah " +
        userAge +
        ", the prime time years! You're like a fine wine, getting better with age.🍷"
    );
  } else if (userAge >= 20) {
    alert(userAge + "! Oh, to be young! ✨");
  } else if (userAge > 0) {
    alert("Wow! You are " + userAge + ". Just getting started! 🍼");
  } else {
    alert("Invalid age entered. Try again 🌻.");
  }
}

// ageAlert(); to use in console //

/*
    5)
    In this function we want to give the user a mathematical calculation to 
    give us the answer to. Something like prompt('What is 5 + 6?')  
    If the answer is correct, congratulate the user. 'Yay! Correct'
    If not, give the user the correct answer so they can learn. 'Noooo, the answer is 11'
    You choose if to use addition, subtraction, multiplication or division. 
    */
    const calculationTest = () => {
      const expectedAnswer = 5 * 5;

      const userAnswer = prompt("What is 5 * 5?");
  
      if (parseFloat(userAnswer) === expectedAnswer) {
          alert("Yay, correct! Well done! ⭐");
      } else {
          alert(`Noooo, the answer is ${expectedAnswer}. Better luck next time!`);
      }
  };
// calculationTest(); to use in console


/*
  6) **BONUS**
  Make the calculation machine we just made show random calculations everytime you invoke the function.
  But hey, maybe limit the randomness to be numbers between 0-10?
  */

  //const calculationTest = () => {
  // Generate random numbers
  const num1 = Math.floor(Math.random() * 10) + 1; 
  const num2 = Math.floor(Math.random() * 10) + 1; 

  // Calculate the expected answer
  const expectedAnswer = num1 * num2;

  // Prompt the user with the multiplication question
  const userAnswer = prompt(`What is ${num1} * ${num2}?`);

  // Convert the user's answer to a number and check if it's correct
  if (parseFloat(userAnswer) === expectedAnswer) {
    alert("Yay, correct! Well done! ⭐");
  } else {
    alert(`Noooo, the answer is ${expectedAnswer}. Better luck next time!`);
  }
 //


  
  
  
