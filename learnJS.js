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
console.log()
// To understand what this line does... we must know what the console is.
// You can open the console by pressing Ctrl + Shift + J.
// Thats the console! The console will provide you with warnings, notices, and text (or logs).
// If you try this line below...
console.log("Hello World!")
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
World!")
// As you will see... you will get an error like this: "Uncaught SyntaxError: Invalid or unexpected token"
// You get this because it expects another quote to end it on the same line.
// However, we can get around this! We can use backticks instead of the double quotes we were just using.
console.log(`Hello
World!`)
// What do we see in the console now?
/*
Hello
World!
*/
// And thats our first data type! Strings!
// Time to learn our next! Numbers!
// We all know what numbers are! They can also be used in JS!
console.log(820)
console.log(938.29)
console.log(-473)
// All these examples above will work!
// Why can't we just console.log, for example, something like "92" as a string?
// Well, number data types can be used in math! Try these lines below!
console.log(-50 + 75) // Will log 25.
console.log(5 * 12) // Will log 60.
console.log(20 / 2) // Will log 10.
// Now... try these with strings!
console.log("-50" + "75") // Will log "-5075". As you can see, it combined the two strings.
console.log("5" * "12") // Will log 60. JS is smart enough to understand that these should be numbers.
console.log("20" / "2") // Will log 10. Same reason as above.
// Let's try using math on strings and numbers. Let's see what we get!
console.log(-50 + "75")
console.log(5 * "12")
console.log("20" / 2)
// Looks like we will get the same results as above!
// Let's learn our next data type... Booleans!
// To be comtinued...
