//  Chapter-1   ==========     Question:1
//alert("Hey....");

// Chapter-1     ==========    Question:2
//alert("Error! Please enter a valid password.");

// Chapter-1  ==========       Question:3 
//alert("Welcome to JS Land.... \n Happy Coding!");

//Chapter-1    ==========      Question:4
//alert("Welcome to JS Land...");
//alert("Happy Coding!");

// Chapter-1    ==========     Question:5
// We write these statement in browser's console
// var message = "Hello... I can run JS through my web browser's console";
// alert(message);



// Chapter-2    ==========      Question:1
//var username;


//Chapter-2     ==========      Question:2
//var myName = "Sabahat Zainab";


// Chapter-2     ==========     Question:3
//var message = "Hello World";
//alert(message);


//Chapter-2     ==========      Question:4
//var age = 21;
//alert(myName);
//alert(age + " years old");
//alert("Certified Mobile Application Development");


// Chapter-2     ==========     Question:6
//var email = "sabahzmemon@gmail.com";
//alert("My email address is "+ email);


// Chapter-2     ==========     Question:7
//var book = "A smarter way to learn JavaScript";
//alert("I am trying to learn from Book "+ book);


//Chapter-2   ==========        Question:8
//document.write("Yah! I can write HTML content through JavaScript");

// Chapter-2    ==========      Question:9
//var smbl = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
//alert(smbl);



// Chapter-3     ==========     Question:1
//var age = 21;
//alert("I am "+ age + " years old");

// Chapter-3    ==========      Question:2
//var N = 14;
//alert("You have visited this site "+ N + " times");

// Chapter-3     ==========     Question:3
//var birthYear = 2000;
//document.write("My birth year is "+ birthYear + "<br> Datatype of my declared variable is number <br>");

// Chapter-3      ==========    Question:4
//a)
//var Visitorname = prompt("Your name is");
// b)
//var producttitle = prompt("Product title is ");
// c)
//var Quantity = +prompt("How many product do you want to order?");
//document.write(Visitorname + " ordered "+ Quantity+ " "+ producttitle+ "(s) on XYZ Clothing store");


// Chapter-4     ==========     Question:1
//var shop, beg , hen;


// Chapter-4      ==========    Question:2
// legal variables

//var saba;
//var cat;
//var $lion;
//var original3;
//var _shop;

// illegal variables
// var 3days;
// var hello&;
// var case;
// var #shift;
// var @saba;


// Chapter-4   ==========        Question:3
//var numbers = "numbers";
//var $sign = "$";
//var underscore_ = "_";
//var caseS = "sensitive";
//var key = "keywords";
//var letter = "letter";
//document.write("Rules for naming JS variables <br>");
//document.write("<br>");
//document.write("Variable names can only contain" + numbers+" ," + $sign + " and"+ underscore_+
//" For example $my_1stVariable <br>");
//c)
//document.write( "Variables must begin with a, "+letter+" ,"+ $sign +" or"+underscore_ + " For example $name, _name or name <br>"); 
//d)
//document.write(" Variable names are case " + caseS +"<br>" );
//e)
//document.write(" Variable names should not be JS "+ key +"<br>");



// Chapter-5    ==========        Question:1
// Addition
// var var1 = +prompt("Enter first number for Addition?");
// var var2 = +prompt("Enter second number for Addition? ");
// var sum = var1+var2;
// document.write("Sum of "+var1+" and "+ var2+ " is "+sum +"<br>");


// Chapter-5        ==========    Question:2
//Subtraction
// var var3 = +prompt("Enter first number for Subtraction?");
// var var4 = +prompt("Enter second number for Subtraction? ");
// var sub = var3-var4;
// document.write("Subtraction of "+var3+" and "+ var4+ " is "+sub +"<br>");

// Multiplication
// var var5 = +prompt("Enter first number for Multiplication?");
// var var6 = +prompt("Enter second number for Multiplication?");
// var mul = var5*var6;
// document.write("Multiplication of "+var5+" and "+ var6+ " is "+mul+"<br>");

// Division
// var var7 = +prompt("Enter first number for Division?");
// var var8 = +prompt("Enter second number for Division?");
// var divi = var7/var8;
// document.write("Division of "+var7+" and "+ var8+ " is "+divi + "<br>");

//Modulus
// var var9 = +prompt("Enter first number for Modulus?");
// var var10 = +prompt("Enter second number for Modulus?");
// var mod = var9%var10;
// document.write("Modulus of "+var9+" and "+ var10+ " is "+mod +"<br>");

// document.write("<br>");


//Chapter-5         ==========    Question:3
//a)
//var x;
//b)
//document.write("Value after variable declaration is "+x+"<br>");
//c)
//x=5;
//d)
//document.write("Initial value: "+x+"<br>");
//e)
//x++;
//f)
//document.write("Value after increment is: "+x+"<br>");
//g)
//var add = x+7;
//h)
//document.write("Value after addition is: "+add+"<br>");
//i)
//add--;
//j)
//document.write("Value after decrement is: "+add+"<br>");
//k)
//var remainder = add%3;
//l)
//document.write("The remainder is: "+remainder+"<br>");

//document.write("<br>");


// Chapter-5        ==========       Question:4
// var priceTicket = 600;
// var calculatedCost = priceTicket*5;
// document.write("Total cost of buy 5 tickets to a movie is "+calculatedCost+"PKR <br>");

// document.write("<br>");


// Chapter-5    ==========           Question:5
// document.write(" <h1> Table of 10 </h1> <br>");
//  for(var i=1; i<=10; i++){
//     document.write( "10 "+"X " +i+" ="+ 10*i+" <br>");
// }

// document.write("<br>");


// Chapter-5    ==========           Question:6
//a)
//var Celsius = 25;
// b)
//var F;
//F = (Celsius *(9/5))+32;
//c)
//var Fahrenheit = 70;
// d)
//var C;
//C = (F - 32)* 5/9;
//document.write(Celsius+"oC is "+F+"oF <br>");
//document.write(Fahrenheit+"oF is "+C+"oC <br>");

//document.write("<br>");


// Chapter-5    ==========           Question:7
// document.write(" <h1>Shopping Cart</h1> <br>");
// var item1Price = 650;
// var orderedQuantity1 = 3;
// var item2Price = 100;
// var orderedQuantity2 = 7;
// var shippingCharges = 100;
// var totalCost;
// totalCost = ((item1Price*orderedQuantity1)+(item2Price*orderedQuantity2)+shippingCharges);
// document.write("Price of item 1 is "+item1Price +"<br>");
// document.write("Quantity of item 1 is "+ orderedQuantity1 +"<br>");
// document.write("Price of item 2 is "+item2Price +"<br>");
// document.write("Quantity of item 2 is "+ orderedQuantity2 +"<br>");
// document.write("Shipping Charges "+ shippingCharges+"<br>");
// document.write("<br>");
// document.write("Total cost of your order is "+totalCost+"<br>");

// document.write("<br>");


// Chapter-5     ==========        Question:8
// document.write(" <h1> Marks Sheet </h1> <br>");
// var totalMarks = 980;
// var marksObtained = 804;
// var percentage;
// percentage = (marksObtained*100)/totalMarks;
// document.write("Total marks: "+ totalMarks +"<br>");
// document.write("Marks obtained: "+marksObtained+"<br>");
// document.write("Percentage: "+percentage+"<br>");
// document.write("<br>");


// Chapter-5     ==========       Question:9
// var Dollars = 10;
// var saudiRiyals = 25;
// var totalCurrency;
// totalCurrency = ((10*104.80)+(25*28));
// document.write("<h1>Currency in PKR</h1> <br>");
// document.write("Total Currency in PKR: "+totalCurrency+"<br>");


// Chapter-5     ==========      Question:10
// var x = 3;
// var cal = (5+(x*10))/2;
// document.write("<br>");


// Chapter-5     ==========      Question:11
// document.write("<h1>Age Calculator</h1> <br>");
// var currentYear = 2020;
// var birthYear = 2000;
// var yourAge;
// yourAge = currentYear-birthYear;
// document.write("Current Year: "+currentYear+"<br>");
// document.write("Birth Year: "+birthYear+"<br>");
// document.write("Your Age is: "+yourAge+"<br>");
// document.write("<br>");


// Chapter-5     ==========     Question:12
// a)
//var radiusCircle = 20;
// b)
//var pi = 3.142;
// var circumCircle = 2*pi*radiusCircle;
// var area;
// area = pi*(radiusCircle*radiusCircle);
// document.write("<h1>The Geometrizer</h1> <br>");
// document.write("Radius of a circle: "+20+"<br>");
// document.write("The circumference is: "+circumCircle+"<br>");
// document.write("The area is: "+area+"<br>");



// Chapter6-9   ==========      Question:1
// var a = 10;

// document.write("Result: <br>");
// document.write("The value of a is: "+a+"<br>");
// document.write("<br>");
// document.write("......................");
// document.write("<br>");

// document.write("The value of ++a is: "+(++a)+"<br>");
// document.write("Now the value of a is: "+a+"<br>");

// document.write("<br>");

// document.write("The value of a++ is: "+(a++)+"<br>");
// document.write("Now the value of a is: "+a+"<br>");

// document.write("<br>");

// document.write("The value of --a is: "+(--a)+"<br>");
// document.write("Now the value of a is: "+a+"<br>");

// document.write("<br>");

// document.write("The value of a-- is: "+(a--)+"<br>");
// document.write("Now the value of a is: "+a+"<br>");


// Chapter6-9     ==========     Question:2
//var a = 2;
//var b = 1;
//var result = --a - --b + ++b + b--;

// Explaination of  Output
  // --a;    predecrement 2-1=1 now value of a is 1 
  // --a - --b ;  again predecrement in b 1-1=0 now value of b is 0 so,
  // 1  - 0 = 1;
  // --a - --b  + ++b; preincrement in b 0+1=1 now value of b is 1 so,
  //         1 + 1=2;
  // --a - --b + ++b + b--;  after postdecrement value of b which we use is 1, value of b is 0; 
//                 2 + 1=3

// Now value of a is 1; and b is 0;

// document.write("<br>");
// document.write("a is "+a+"<br>");
// document.write("b is "+b+"<br>");
// document.write("result is "+result+"<br>");

// document.write("<br>");


// Chapter6-9     ========     Question:3
//var name = prompt("Enter Your Name..");
//alert("Hey....");


// Chapter6-9    ==========      Question:5
//var n = prompt("Enter a number:");
//if(n !==  ""){
  //for(var i = 1;i<=10;i++){
    //document.write(n + "X" + i + "="+n*i + "<br>");
  //}

//}
//else{
  //for(var i = 1;i<=10;i++){
    //document.write(5 + "X" + i + "="+5*i+"<br>");
  //}

//}


// Chapter6-9    ==========      Question:6
// var subject1 = prompt("Enter first subject:");
// var subject2 = prompt("Enter second subject:");
// var subject3 = prompt("Enter third subject:");
// var totalMarks = 100;
// var ob1st = +prompt("Enter Obtained Marks For First Subject:");
// var obSec = +prompt("Enter Obtained Marks For Second Subject:");
// var obThir = +prompt("Enter Obtained Marks For Third Subject:");
// var caltotal = ob1st+obSec+obThir;
// var percent;
// var totalOf3 = 300;
// percent = (caltotal*100)/totalOf3;
// percent1stsub = (ob1st*100)/totalMarks;
// percent2ndsub = (obSec*100)/totalMarks;
// percent3rdsub = (obThir*100)/totalMarks;
// document.write("<table>  <tr><td><b>Subject</b></td><td><b>Total Marks</b></td><td><b>Obtained Marks</b></td><td><b>Percentage</b></td></tr> </table>")
// document.write(subject1 + "&nbsp   &nbsp   &nbsp  &nbsp  &nbsp  &nbsp "+ totalMarks+" &nbsp   &nbsp   &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp"+ob1st+ "  &nbsp &nbsp  &nbsp &nbsp   &nbsp   &nbsp  &nbsp  &nbsp  &nbsp  &nbsp "+percent1stsub+"% <br>");
// document.write(subject2 + "   &nbsp   &nbsp  &nbsp  &nbsp  &nbsp "+ totalMarks+" &nbsp   &nbsp   &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp"+obSec+ "  &nbsp &nbsp  &nbsp &nbsp   &nbsp   &nbsp  &nbsp  &nbsp  &nbsp  &nbsp "+percent2ndsub+"% <br>");
// document.write(subject3 + "&nbsp   &nbsp   &nbsp  &nbsp  &nbsp  &nbsp "+ totalMarks+" &nbsp   &nbsp   &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp"+obThir+ "  &nbsp &nbsp  &nbsp &nbsp   &nbsp   &nbsp  &nbsp  &nbsp  &nbsp  &nbsp "+percent3rdsub+"% <br>");
// document.write("&nbsp   &nbsp   &nbsp  &nbsp  &nbsp  &nbsp "+ totalOf3+" &nbsp   &nbsp   &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp"+caltotal+ "  &nbsp &nbsp  &nbsp &nbsp   &nbsp   &nbsp  &nbsp  &nbsp  &nbsp  &nbsp "+percent+"% <br>");



// Chapter9-11  ==========        Question:1
//var cityName = prompt("Enter a city name:");
//if(cityName==="Karachi"){
  //  alert("Welcome to city of lights");
//}


// Chapter9-11   =========       Question:2
//var gender = prompt("Enter your gender");
//if(gender === "male"){
  //  alert("Good Morning Sir!");
//}
//else if(gender === "female"){
  //  alert("Good Morning Ma'am!");
//}


// Chapter9-11   ===========     Question:3
// var color = prompt("Enter road traffic signal color:");

// if(color === "red"){
//     alert("Must Stop");
// }
// else if(color === "yellow"){
//     alert("Ready to move");
// }
// else if(color === "green"){
//     alert("Move now")
// }


// Chapter9-11   ===========     Question:4
// var fuel = prompt("Enter remaining fuet in car(litres):");
// if(fuel<0.25){
//     alert("Please refill the fuel in your car.");
// }

// Chapter9-11   ==========     Question:5

// alert shows because of preincrement
//var a = 4;
//if (++a === 5){
//alert("given condition for variable a is true");
//}

// alert not shows because of post increment
//var b = 82;
//if (b++ === 83){
//alert("given condition for variable b is true");
//}


// condition 2 and 4 becomes true
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// alert shows
//var materialCost = 20000;
//var laborCost = 2000;
//var totalCost = materialCost + laborCost;
//if (totalCost === laborCost + materialCost){
//alert("The cost equals");
//}

// alert shows true
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

//  alert shows
//if("car" < "cat"){
  //  alert("car is smaller than cat");
    //}


// Chapter9-11   ==========      Question:6
// var sub1 = +prompt("Enter obtained marks of first subject:");
// var sub2 = +prompt("Enter obtained marks of Second subject:");
// var sub3 = +prompt("Enter obtained marks of Third subject:");
// var totalMarks = 300;
// var totalobt = sub1 + sub2 + sub3;
// var per = (totalobt*100)/totalMarks;

// document.write("<h1>Marks Sheet</h1>");
// document.write("Total marks : "+totalMarks+"<br>");
// document.write("Marks obtained : "+totalobt+"<br>");
// document.write("Percentage : "+per+"<br>");

 
// if(per >= 80){
//     document.write("Grade:A-one <br> Remarks :Exellent");
// }
// else if(per >= 70){
//     document.write("Grade:A <br> Remarks :Good");
// }
// else if(per >= 60){
//     document.write("Grade:B <br> Remarks :You need to improve");
// }
// else if(per < 60){
//     document.write("Grade:Fail <br> Remarks :Sorry");
// }


// Chapter9-11     ==========    Question:7
// var secretNum = 9;

// var guessNum = +prompt("Guess the secret number.");
// if(guessNum === secretNum){
//     alert("Bingo! Corret answer");
// }
// else if((guessNum+1) === secretNum){
//     alert("Close enough to the correct answer.");
// }



// Chapter12-13  ===========      Question:2
// var x = +prompt("Enter first integer.");
// var y = +prompt("Enter second integer.");
// if((x-y)>0){
//     alert(x + " is largest number");
// }
// else{
//     alert(y + " is largest number");
// }


// Chapter12-13   ===========      Question:3
// var number = +prompt("Enter a number");
// if(number > 0){
//     alert("Number is positive");
// }
// else if(number < 0){
//     alert("Number is negative");
// }
// else {
//     alert("Number is zero");
// }


// Chapter12-13   ===========     Question:4
// var character = prompt("Enter a character");
//   if(character === 'e'|| character === 'i' ||character === 'o'|| character === 'a'|| character === 'u' ){
//             alert("true");}
//             else{
//                 alert("false");
//             }


// Chapter12-13   ===========      Question:5
// var correctPassword = "Memons";
// var enteredPassword = prompt("Please Enter Your Password!");
// if(enteredPassword === ""){
//     alert("Please enter your password");
// }
//  else if(enteredPassword === correctPassword){
//     alert("Correct! The password you entered matches the original password");
// }
// else if(enteredPassword !== correctPassword){
//     alert("Incorrect password");
// }

// Chapter12-13     ===========         Question:6

// fixed
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening"

// }

// Chapter12-13  ===========      Question:7
// var time = prompt("Enter time in 24 hours clock format:");
// if(time >= 0000 && time < 1200){
//     alert("Good Morning!");
//     }
//     else if(time >= 1200 && time < 1700){
//         alert("Good afternoon!");
//     }
//     else if(time >= 1700 && time < 2100){
//         alert("Good evening!");
//     }
//     else if(time>=2100 && time<=2359){
//         alert("Good night!");
//     }




// Chapter14-16     ===========        Question:8
// var studentsName = ["Ahmed","Ali","Muhammad"];
// var storeScore = [320,230,480];
// var total = 500;
// for(var i=0; i<studentsName.length;i++){
   
//         var percentage = (storeScore[i]*100)/total;
//         document.write("Score of "+studentsName[i]+"is "+storeScore[i]+".Percentage: "+percentage+"%<br>");
    
// }


// Chapter14-16    ===========        Question:11
//var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
//var selectedCities =cities.slice(2,4);


//Chapter14-16   ==========    Question:15
// var arr = ["Apple","Samsung,","Motorola","Nokia","Sony","Haier"];
// document.write("<select>");
// for(var i = 0;i < arr.length;i++){
//     document.write("<option>"+ arr[i]+ "</option>")
// }
// document.write("</select>");



// Chapter17-20   ============    Question:1
//var arr = [[],[],[]];

// Chapter17-20    ===========   Question:2
//var arrays = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];


// Chapter17-20  =============      Question:3
//for(var i = 1; i<=10; i++){
  //  document.write(i+"<br>");
//}


// Chapter17-20  ============      Question:4
// var tabNm = +prompt("Enter a number to show its multiplication table");
// var tablen = +prompt("Enter length multiplication table");
// document.write("Multiplication table of "+tabNm+" of length "+tablen+"<br>");
// for(var i=1;i<=tablen;i++){
//     document.write(tabNm + " X "+ i+" = "+tabNm*i+"<br>");
// }


// Chapter17-20  ===========      Question:5
// var fruits = ["apple","banana","mango","orange","strawberry"];
// for(var i=0;i<fruits.length;i++){
//     document.write(fruits[i]+"<br>");
// }
// for(var i=0;i<fruits.length;i++){
//     document.write("Elements at index "+i+"is " +fruits[i]+"<br>");
// }


// Chapter17-20  =========     Question:7
// var A = ["cake","apple pie","cookie","chips","patties"];
// var search = prompt("What you want?");
// for(var i=0;i<A.length;i++){
//     if(search === A[i]){ 
//     alert("Found!");
// break;}
// else if(search !== A[i]){
//     alert("Not found!");
//     break;
// }
//}






