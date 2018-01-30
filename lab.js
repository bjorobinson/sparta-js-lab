//CHAPTER ONE
alert("You are unemployed. In September you applied for Sparta Global and were invited on a Sparta Day, but had to miss it due to health. After applying to different places on jobsites, you get a call: 'Hello, my name is Alistair, I'm calling from Sparta Global, I've recieved your application for our technical stream course...'")
var response = prompt("How do you respond?: (1) 'Yes, that's correct' or (2) 'Nope!'");
if (response==='1') {
  alert("You explain what happened, and September seemed to be a simple mistake, and within 30 seconds, you're down to be in Richmond for a Sparta Day next Tuesday.");
} else {
  alert("And that's how you failed at the simplest part of the job process...saying you're interested.");
  throw 'Error';
}

//CHAPTER TWO
alert("You arrive next tuesday in decent time, get to know the others, and eventually the day is in full swing.")
var approach = prompt("How do you approach it?: (1) Honestly, (2) Boastfully, (3) Laid Back and Cocky");
if (approach !='2' || approach !='3') {
  alert("Ok! Didn't make a fool of yourself, all to do now is head home and wait for a response.");
} else {
  alert("You're not nearly as desirable as you think you are. You don't hear back.");
  throw 'Error';
}

//CHAPTER THREE
alert("Doing well! You're into the next stage, some online tests, about 3 in all to be done by the end of the week.");
var tests = prompt("How many do you do?: Enter number");
if (tests=='3') {
  alert("Good, all done. Again you play the waiting game.")
} else if (tests > 3) {
  alert("There weren't more than 3, but you checked those 3 over and over, to make sure they didn't send more.")
} else {
  alert("Didn't finish them in time! You don't hear back from them.");
  throw 'Error';
}

//CHAPTER FOUR
alert("Time passes, and the phone rings. You're the only one in the house, but the dog is happily on your lap and has been asleep for about an hour, she's not going to move of her own accord...")
var pause = parseInt(prompt("How long before you move her off your lap and go to answer?"));
if (pause < 30){
  alert("You move the lumbering Weim and go to answer the phone, it's Sparta coming back with their verdict.");
} else {
  alert("The ringing stops before you can pick it up, you hope that was just a cold caller...");
}

//CHAPTER FIVE
alert("You did it! You've got the contract infront of you, the terms look good...")
var signature = prompt("Now all that's left to do is sign")
if (signature) {
  alert("You win a job!")
} else {
  alert("Writing your own name on an online contract is hard...")
  throw 'Error';
}
