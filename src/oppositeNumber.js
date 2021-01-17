// function oppositeNumber(number){

//   return number > 0 ?  -Math.abs(number) : Math.abs(number);
// }

/* questions to answer:
how does the Math.abs work?
what is Math?
the java script Math object allows you to preform mathmatical tasks
on numbers.
in the above example it takes the number given to the function as an argument
and applies the .abs method to it, which gives the absolute value on the number 
given as an argument.
what is a ternery opperator? its a one line if else booleanian operation.


*/


//alternative

function oppositeNumber(number){
  return number - (number * 2)
}