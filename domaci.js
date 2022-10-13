1.Check if a triangle is equilateral, scalene or isosceles, and print which triangle is yours.. Example: sides
of triangle are 3, 4, 5. This is scalene triangle./

var =""
var a= 3
var b=4
var c=5"
if (a==b==c) {
    result= "triangle is equilateral"
  } else if (a==b || b==c || a==c) {
      result= "triangle is sclane"
      } else if {result = "triangle is isosceles"}
  
      console.log(result)

      /2.2. Perform arithmetic operations on two numbers. Operations are add, subtract, multiply, divide,
      modulus./
      let a=8
      let b=2
      console.log(a+b)
      console.log(a-b)
      console.log(a*b)
      console.log(a/b)
    3.  /Find the grade for input marks (you should have at least two input marks). Grades are:
      A (91-100), B (81-90), C (71-80), D (61-70), E (51-60). Optionally print if student has failed the exam./

      var a;
      var b=30;
      var c=19;
      a=b+c
      
      if (a>= 91 & a<= 100 ) {console.log("The grade is A");}
      else if(a>= 81 && a<= 90) {console.log("The grade is B");}
      else if (a>=71 && a<=80) {console.log("The grade is C");}
      else if (a>= 61 && a<= 70) {console.log("The grade is D");}
      else if (a>= 51 && a<= 60) {console.log("The grade is D");}
      else {console.log ("Student has faled the exam");}

      4. Create two variables (or if you know how to do it - input fields). One should be a number, other
should be a noun. Print on screen the number and pluralized form, like “5 cats” or “1 dog”. Bonus: Make
it handle a few collective nouns like “sheep” and “geese”.

var a= 10;
var noun= "cat";
console.log (a+" "+noun+"s")

5.Write a program to show you age based on entered number (if you know how to create input field, if
  not create variable and give it a value). If your age is 18 or older - print “You are old enough to drive”,
  but if not than print how many years you need to turn 18. If your age is greater than 18 - try one
  example with 13.

  var age =13
  if(age>=18){console.log ("You are old enough to drive");}
  else {console.log ((18-age)+"you need to turn 18");}

  6. This one will continue on task 5. Create one more variable (or input field) and compare it with your
age. Show how much is that older/younger than you with text for example “He/She is 13 years
older/younger than me”. If you are the same age - print that you are the same age.
var age =29
if(age==13){console.log ("We are the same age");}
else {console.log("He is"+(age-13)+ "younger then me");}

7. Create 5 variables (or input fields) with canine species. Create one more variable with canine and
compare it with first 5 species. If it is match - write that on screen. Example: “This is German Shepherd
called Neo”. If there is no match - write on screen that this is a mixed breed.

var a="Pug";
var b="German Shepherd";
var c="Pit bull";
var d= "Staford";
var e="Cane corso";

var f="Doga";
if (a==f) {console.log("This is German Shepherd called Neo");}
else if (b==f) {console.log("This is German Shepherd called Neo");}
else if (c==f) {console.log("This is German Shepherd called Neo");}
else if (d==f) {console.log("This is German Shepherd called Neo");}
else if (e==f) {console.log("This is German Shepherd called Neo");}
else{console.log("This is a mixed breed");}
      

