// Welcome to your JavaScript (JS) Adventure!
// What you see on line 1 and 2 are called comments!
// Comments help other people be able to read your code, and to leave notes for yourself.
// It's also good to know that comments won't effect your code.
// Of course they can be used for much more things!
// Try making a comment! Start with "//" to make a comment and then type away!
// There is also another way to write a comment!
/*
What you see right here, is called a multi-line comment!
That means you can have line breaks in your comments!
Notice what's surounding these comments? Thats what you will use to make one!
Try making one! Type away!
*/
// Let's go over our first lesson... Data Types
// But before we get into that... let's learn our first JS command...
console.log();
// To understand what this line does... we must know what the console is.
// You can open the console by pressing Ctrl + Shift + J.
// Thats the console! The console will provide you with warnings, notices, and text (or logs).
// If you try this line below...
console.log("Hello World!");
// Guess what will appear in the console!
// It says "Hello World!".
// You can see how console.log can be useful.
// Debugging is an exmaple.


// Anyway, just like that we have already learned our first data type... strings!
// Strings are just text. You can make a string by surounding it in quotes.
// If we take our exmaple from line 21, you can see we made a string that says "Hello World!"
// In that sanario, we used double quotes. But you can also use single quotes ('') and backticks (``)
// There is a special reason why we use backticks...
// Try running this code below...
console.log("Hello
World!");
// As you will see... you will get an error like this: "Uncaught SyntaxError: Invalid or unexpected token"
// You get this because it expects another quote to end it on the same line.
// However, we can get around this! We can use backticks instead of the double quotes we were just using.
console.log(`Hello
World!`);
// What do we see in the console now?
/*
Hello
World!
*/
// And thats our first data type! Strings!


// Time to learn our next! Numbers!
// We all know what numbers are! They can also be used in JS!
console.log(820);
console.log(938.29);
console.log(-473);
// All these examples above will work!
// Why can't we just console.log, for example, something like "92" as a string?
// Well, number data types can be used in math! Try these lines below!
console.log(-50 + 75); // Will log 25.
console.log(5 * 12); // Will log 60.
console.log(20 / 2); // Will log 10.
// Now... try these with strings!
console.log("-50" + "75"); // Will log "-5075". As you can see, it combined the two strings.
console.log("5" * "12"); // Will log 60. JS is smart enough to understand that these should be numbers.
console.log("20" / "2"); // Will log 10. Same reason as above.
// Let's try using math on strings and numbers. Let's see what we get!
console.log(-50 + "75");
console.log(5 * "12");
console.log("20" / 2);
// Looks like we will get the same results as above!
// I have a question for you! Have you noticed we have been using semicolons at the end of our console.logs?
// Well in JS we always put a semicolon at the end of each line (expect for comments).
// This allows for inline code. Try the following code down below!
console.log(938.29);console.log(-473);


// Let's learn our next data type... Booleans!
// Booleans always are either true or false.
// Booleans can be created many ways and used everywhere.
// Lets try making a couple of booleans!
console.log(true);
console.log(false);
console.log(2 > 0); // We know that two is greater than 0.
console.log(5 <= 4); // We know that 5 is not less than or equal to 4.
// We can also check weather things are equal...
// Notice that we use 2 equal signs! You'll learn more about why later!
console.log("Hi There!" == "Hi!") // False, these two strings aren't the same!
// However we can also use 3 equal signs!
// The difference between == and === is that === check also to make sure that the datatype is also the same!
// Look at these exmaples below!
console.log("10" == 10); // True! Same values!
console.log("10" === 10); // False! Same values! Different datatypes
// Did you know that Booleans also have a number value?
// Try doing this:
console.log(true + 0); // What do you get?
console.log(false + 0); // What do you get?
// You can probably tell that true = 1 and false = 0!
// Knowing this we can try these examples below!
console.log(true == 1); // True. Same value!
console.log(true === 1); // False. Same value! Different datatypes!
// Well... What else can we with booleans?
// Let's learn about if statements!
// Try the following code!
if (10 > 5) {
  console.log("Can you belive it?? 10 IS greater than 5!");
}
// What happens in the console? It says "Can you belive it?? 10 IS greater than 5!"!
// How exactly do if statements work?
/*
if (CONDITION/BOOLEAN) { // if something is true then run the code within the brakets, otherwise, don't do anything.
  //run code.
}
*/
// Try making your own if statement! Remember to start with "if", add a condition, and make it console.log something!
// We can even make it do something if the condition is false!
// Let's take our if statement that we have above... and add something!
if (10 > 5) {
  console.log("Can you belive it?? 10 IS greater than 5!");
} else {
  console.log("Uh Oh! 10 IS NOT greater than 5!");
}
// When running this, we shouldn't get any different result than before.
// Let's change it up a bit!
if ("500" == 500) { // Notice 2 equal signs!
  if ("500" === 500) { // Notice 3 equal signs!
    console.log("It looks like both 500 values are equal and they both have the same datatype!");
  } else {
    console.log("Here, we see that both 500 values are equal but they both have different datatypes.");
  }
} else {
  console.log("Hmm, it looks like the two 500 values aren't equal :/");
}
// Before running this, what do we expect to appear in the console?
// Run it! We should get: "Here, we see that both 500 values are equal but they both have different datatypes.".
// One last thing we can add to if statements. But before we do, let's learn about variables!
// Variables are used for storing datatypes! You create a variable like this:
var variableName = DATATYPE;
// We start with "var", name it, and set it equal to a value.
// In JS, there are some restrictions for naming variables.
// You can only use letters, numbers, and underscore. Otherwise, you may get an error.
// In my example above, I used camel casing for the variable name.
// If you can imagine a camel, you can see humps. You can imagine each hump as a capital letter.
// For example something like this: cammelCasingIsFun
// You can see that the first word is completely lowercase, and then each new work starts with a captital letter.
// Of cource you can name variables how you like!
// However, be careful how you name it! It may be something already used! For example, if you say:
var console = "HA HA HA"; // DON'T DO THIS
// You can now no longer use console.log as console now is "HA HA HA"!
// We can access our variable's value by simply calling it's name.
// Try the following:
var myName = "Bob";
console.log("My name is " + myName);
// You can always change the value of you variable like this:
myName = "Sam";
// In my variable examples above, I have been using the var keyword, however you can can also use a few others.
// Each keyword has a purpose, so let me share the others that exsit and also their purpose.
var pie = "tasty";
const food = "good";
let coolness = "the best";
// var is a globaly scoped variable. This means that:
if (true) {
    var testing = true;
}
console.log(testing);
// Will give console.log true.
// Then try replacing the var keyword with let or const, and it won't work.
// Instead, "testing is not defined". This is because const and let are locally scoped.
// Scoping is the context that variable can be used it. However there is a problem with var which some people dislike.
// Try doing the following.
if (false) {
    var variable = "pie!";
}
console.log(variable);
// Before you run this, what do you expect. I would expect an error saying that variable is undefined right?
// This is not the case. In JS because the variable is globally scoped, the variable is created, but undefined.
// And this is one of the reasons people do not like var so much.
// If you make an error like in the example above, you want to see an error, but you don't.
// It will make you think that for some reason, JS is broken when you try to set it to "pie!".
// That's about var.
// let is localy scoped. That is it's main purpose.
// const is very simple. It is locally scoped like let, but has one big difference.
// const cannot be reset. This means once you set it, you cannot change it at all.
// Try the following:
const amazing = "not changabke";
amazing = "see?"
// In the console, "Uncaught TypeError: Assignment to constant variable."
// So those are our variable keywords.


// Let's learn another datatype. An array.
// An array is also known as a list. A list of datatypes!
// Analyze the following:
let newArray = [56, 50, 80, 78, 96, 100, 100, 100, 100, 98];
// You could imagine these being the scores of all the people who took a test.
// TBC
