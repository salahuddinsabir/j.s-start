//  CHAPTER 1
//  ALERT

// Question:1 
// alert("hello everyone!");

// Question:2
// alert("Error! Please enter a correct password.")

// Question:3
// alert("Welcome to JS land.. \nHappy Coding")

// Question:4
// alert("Welcome to JS land...");
// alert("Happy Coding");


// Question:5     
// alert("I can run Javascript through using console")

// CHAPTERE 2
// VARIABLE FOR STRING

// Question:1
// var userName;

// Question:2
// var myName = "salahuddin";

// Question:3
// var message = "HELLO WORLD";
// alert(message);

// Question:4 
// var stdName = "salahuddin";
// var stdage = 20;
// var course = "Certified WEB & MOBILE Application Development";
// alert(stdName);     
// alert(stdage);     
// alert(course);     

// Question:5
// var pizza = "PIZZA \nPIZZ \nPIZ \nPI\nP";
// alert(pizza)

// Question:6
// var myEmail = "salahuddinsabir18@gmail.com";
// alert("my Email address: " +" " + myEmail)

// Question:7
// var msg  = "A smarter way to learn JavaScript."
// alert( "I am trying to learn from the book" + " " + msg)


// Question:8
// var show = "YAH! I can write HTML content through JavaScript"
// document.write(show)    

//  Question:9
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

// CHAPTER 3
// VARIABLES FOR NUMBER

// Question:1
// var age = 20;
// alert("I am " + " " + age + " " + "years old")

// Question:2
// var timer = 14 ; 
// alert("You have visited this site" + " " + timer + " " + "times")


// Question:3
// var birthYear = 2002;
// document.write("My birth year is" +" " + birthYear + " <br>" + 
//     "Data type of my declared variable is " + " " + typeof(birthYear))    

// Question:4
// var visitorName = prompt("Enter your Name: ");
// var product = "T-shirt(s)";
// var qty = parseInt(prompt("Enter QTY."));
// document.write(`${visitorName} ordered ${qty} ${product} on XYZ Clothing store`)

// CHAPTER 4
// VARIABLES NAMES LEGAL OR ILLEGAL

// Question:1
// var var1,var2,var3  = "Jaffar"; 

// Question:2
////legal///
// var Name1 = "salahuddin";
// var $ohk = "done";
// var stdName ="salahuddin";    
// var roll_no = 200;
// var school = "hyderi public school";

////illegal///
// var 12name = "salahuddin" 
// var name-std = "salahuddin"
// var &name = "salahuddin"
// var name@ = "jas"

// Question:3
// document.write(
//     `a) A heading stating “Rules for naming JS variables” <br> <br>
//     b) Variable names can only contain number, $, 
//     and _. <br> <br>
//     For example $my_1stVariable <br> <br>
//     c) Variables must begin with a letter, $ or
//     _. <br><br> For example $name, _name or name <br> <br>
//     d) Variable names are case sensitive <br> <br>
//     e) Variable names should not be JS Keywords
//     `
// )


// CHAPTER 5
// MATHS EXPRESSION

// Question:1
// var num1 = 3;
// var num2 = 5;
// var add = num1 + num2;
// document.write("Sum of " + num1 + " "  + " + "  +   " " + num2  + " " + "is" + " " + add)

// Question:2
///sub///
// var num1 = 3;
// var num2 = 5;
// var sub =  num1 - num2;

// document.write("Sum of " + num1 + " "  + " - "  +   " " + num2  + " " + "is" + " " + sub)

///MUL///
// var num1 = 3;
// var num2 = 5;
// var mul =  num1 * num2;

// document.write("Sum of " + num1 + " "  + " * "  +   " " + num2  + " " + "is" + " " + mul)

///divide///
// var num1 = 3;
// var num2 = 5;
// var div =  num1 / num2;

// document.write("Sum of " + num1 + " "  + " / "  +   " " + num2  + " " + "is" + " " +div)

//     ///module///
// var num1 = 10;
// var num2 = 3;
// var mod =  num1 % num2;

// document.write("Sum of " + num1 + " "  + " % "  +   " " + num2  + " " + "is" + " " + mod)

// Question:3
// var var_num;
// document.write(`Value after variable declaration is: ${var_num} `)    
// var num1 = 5;
// document.write(`<br> Initial value: ${num1} `);    
// num1++;
// document.write(`<br> Value after increment is: ${num1} `);    

// num1 +=7;
// document.write(` <br> Value after addition is : ${num1}`)

// num1--;
// document.write(`<br> Value after decrement is: ${num1}`)

// var reminder = num1 % 3;
// document.write(`<br> The remainder is :  ${reminder}`)

// Question:4
// var oneTicket = 600;
// var multiply = oneTicket *5;
// document.write(`Total cost to buy 5 ticket to a movie is ${multiply}PKR ` )   

// Question:5
// for(var i=1;i<=10;i++){
//     document.write(`4 x ${i} = ${4 * i} <br>`)
// }

// Question:6
// var cel = 30;
// var convertF = (cel * 9/5) + 32
// // console.log(convert)
// document.write(cel + " " + "oC is " + " " + convertF + "oF" )

// var f = 70 ; 
// var convertC = (f - 32 ) * 5/9
// document.write(f + " " + "oF is " + " " + convertC + "oC" )

// Question:7
// var item1 = 650;
// var item2 = 100;
// var qty1 = 3;
// var qty2 = 7;
// var shipping = 100;

// var priceItem1  = item1 * qty1;
// var priceItem2  = item2 * qty2;
// var total = priceItem1 + priceItem2 + shipping;

// document.write(`Price of Item 1 is ${item1} <br>
//                 Quantity of item 1 is ${qty1} <br>
//                 Price of Item  is ${item2} <br>
//                 Quantity of item 1 is ${qty2} <br>
//                 Shipping Chagers ${shipping} <br>
//                 Total Cost of your order is ${total}`)

// Question:8
// var totalMarks = 980;
// var obtMarks = 804;
// var per = obtMarks / totalMarks *100
// document.write(`Total Marks: ${totalMarks} <br>
//                 Obatined Marks: ${obtMarks} <br>
//                 Percentage:${per}    `)

// Question:9
// var uS = 10;
// var saudi  =25;
// var uSConvert = uS * 104.80;
// var saudiConvert = saudi * 28;
// var total = uSConvert + saudiConvert;
// document.write("Total Currency in PKR: " +total)

// Question:10
// var num = 13;
// var add = num  + 5 ;
// var mul = num * 10;
// var div = num  / 2 ;

// Question:11
// var currentYear = parseInt(prompt("Enter Current Year"));
// var yourYear = parseInt(prompt("Enter Your BirthYear"));
// var age = currentYear - yourYear
// document.write(`Current Year: ${currentYear} <br>
//                 Birth Year: ${yourYear} <br>
//                 Your age is: ${age}`)

// Question:12
// var fsnack = "cocomo";
// var age = 20;
// var maxAge = 65;
// var maxSnack = 3;
// document.write( ` You will need ${maxAge * maxSnack} to last you until the ripe old age of ${maxAge}`)   

// CHAPTER 06/09
// Question:1
// var a = 10 ; 
// document.write(` Result: <br>
//                 The value of a is : ${a} <br>
//                 <br> <br>
//                 .................................... <br> <br>
//                 The value if ++a is: ${++a} <br>
//                 Now the value  of a is: ${a}
//                 <br> <br>
//                 The value if a++ is: ${a++} <br>
//                 Now the value  of a is: ${a}
//                 <br> <br>
//                 The value if --a is: ${--a} <br>
//                 Now the value  of a is: ${a}
//                 <br> <br>
//                 The value if a-- is: ${a--} <br>
//                 Now the value  of a is: ${a}

//                 `)

// Question:2
// var a = 2;
// var b = 1;
// var result = --a - --b  + ++b + b;
//             // 1    -  0   +  1  + 1
// document.write(` a is ${a} <br> 
//                 b is ${b} <br>
//                 result is ${result}
//                 `)

// Question:3
// var userName = prompt("Enter your name");
// alert("Hello " + userName)    

/////=============Question # 04 - 05  ======//////

// var tableNum = prompt("please enter a table number");
// if (tableNum !== "") {
//     for (var i = 1; i <= 10; i++) {
//         document.write(`${tableNum} x ${i} = ${tableNum * i} <br>`)
//     }
// }
// else {
//     for (var i = 1; i <= 10; i++) {
//         document.write(`5 x ${i} = ${5 * i} <br>`)
//     }
// }

// Question:4
// var sub1 = prompt("Enter subject 1 name");
// var sub2 = prompt("Enter subject 2 name");
// var sub3 = prompt("Enter subject 3 name");
// var totalMark = 100;
// var obt1 = parseInt(prompt("Enter OBT. Marks subject 1 "))
// var obt2 = parseInt(prompt("Enter OBT. Marks subject 2 "))
// var obt3 = parseInt(prompt("Enter OBT. Marks subject 3 "))
// var totalmarks = obt1 + obt2 + obt3;
// var per = totalmarks / 300 * 100;
// // per.toFixed()

// document.write("<table>")
// document.write("<tr>")
// document.write("<td> " + "<b>"+ "Subject"  + "</b>" + "</td>" +  
//                 "<td> " + "<b>"+ "Total Marks"  + "</b>" + "</td>"+
//                 "<td> " + "<b>"+ "obtained Marks"  + "</b>" + "</td>"+
//                 "<td> " + "<b>"+ "Percentage"  + "</b>" + "</td>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td> " + sub1  + "</td>" +  
//                 "<td> "+ totalMark + "</td>"+
//                 "<td> " +obt1 + "</td>"+
//                 "<td> "+ (obt1 /totalMark * 100)   +"%"+"</td>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td> " + sub2  + "</td>" +  
//                 "<td> "+ totalMark + "</td>"+
//                 "<td> " +obt2 + "</td>"+
//                 "<td> "+ (obt2 / totalMark *100) +"%" + "</td>")
// document.write("</tr>")


// document.write("<tr>")
// document.write("<td> " + sub3  + "</td>" +  
//                 "<td> "+ totalMark + "</td>"+
//                 "<td> " +obt3 + "</td>"+
//                 "<td> "+ (obt3 / totalMark *100) +"%"  + "</td>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td> "   + "</td>" +  
//                 "<td> "+ 300 + "</td>"+
//                 "<td> " +totalmarks + "</td>"+
//                 "<td> "+ per +"%"  + "</td>")
// document.write("</tr>")
// document.write("</table>")

// CHAPTER 09/11/
// USERR INPUT AND CONDITIONAL STATEMENT

// Question:1
// var cityName = prompt("Enter your city Name:") 
// var lower =  cityName.toLowerCase()
// if(lower === "karachi"){
//     alert("Welcome to city of lights")
// }

// Question:2
// var gender = prompt("Enter your Gender:")
// gender = gender.toLowerCase()
// if(gender == "male"){
//     alert("GOOD MORNING SIR!")
// }
// else if(gender == "female")
// {
//     alert("GOOD MORNING MADAM!")
// }
// else{
//     alert("Enter a correct value")
// }

// Question:3
// var trafficColor = prompt("PLEASE ENTER A TRAFFIC SIGNAL COLOR");
// trafficColor = trafficColor.toLowerCase();
// if(trafficColor == "red"){
//     alert("MUSt STOP")
// }                
// else if(trafficColor == "yellow"){
//     alert("Ready to move")
// }                
// if(trafficColor == "green"){
//     alert("Move NOw")
// }                

// Question:4
// var fuel = prompt("Please enter a remaining Fuel in car" , "10litres");
// if(fuel <= "0.25liters"){
//     alert("Please refill the fuel in your car")
// }

// else{
//     alert("Please enter a correct value")
// }

// Question:5
// var trafficColor = prompt("PLEASE ENTER A TRAFFIC SIGNAL COLOR");
// trafficColor = trafficColor.toLowerCase();
// if(trafficColor == "red"){
//     alert("MUSt STOP")
// }                
// else if(trafficColor == "yellow"){
//     alert("Ready to move")
// }                
// if(trafficColor == "green"){
//     alert("Move NOw")
// }                

/////=============Question # 04 ======//////

// var fuel = prompt("Please enter a remaining Fuel in car" , "10litres");
// if(fuel <= "0.25liters"){
//     alert("Please refill the fuel in your car")
// }

// else{
//     alert("Please enter a correct value")
// }


/////=============Question # 05 ======//////

// a.var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

//ANSWER // 
// Displayed

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

//ANSWER // 
// NOT Displayed




//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }

//ANSWER // 
// NOT Displayed



// if (c === 13){
// alert("condition 2 is true");
// }

//ANSWER // 
//  Displayed

// if (++c < 14){
// alert("condition 3 is true");
// }
//ANSWER // 
// NOT Displayed

// if(c === 14){
// alert("condition 4 is true");
// }
//ANSWER // 
//  Displayed



// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//ANSWER // 
//  Displayed

// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// f. if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

//ANSWER // 
//  Displayed

// Question:6
// var sub1 = parseInt(prompt("Enter Subject 1 Mark"));
// var sub2 = parseInt(prompt("Enter Subject 2 Mark"));
// var sub3 = parseInt(prompt("Enter Subject 3 Mark"));
// var totalMarks = parseInt(prompt("Enter Total MArks"));
// var obtMarks = sub1 + sub2 + sub3 ;
// var per = obtMarks / totalMarks *100;
// if(per>=80 && per<=100){
//     document.write(`Total Marks : ${totalMarks} <br> 
//                     Marks Obtained : ${obtMarks} <br>
//                     Percentage : ${per} <br>
//                     Grade : A-One <br>
//                     Remarks : Excellent`)
// }
// else if(per>=70 && per<=80){
//     document.write(`Total Marks : ${totalMarks} <br> 
//                     Marks Obtained : ${obtMarks} <br>
//                     Percentage : ${per} <br>
//                     Grade : A <br>
//                     Remarks : Good`)
// }
// else if(per>=60 && per<=70){
//     document.write(`Total Marks : ${totalMarks} <br> 
//                     Marks Obtained : ${obtMarks} <br>
//                     Percentage : ${per} <br>
//                     Grade : B <br>
//                     Remarks : You need to improve`)
// }
// else if(per>=00 && per<=60){
//     document.write(`Total Marks : ${totalMarks} <br> 
//                     Marks Obtained : ${obtMarks} <br>
//                     Percentage : ${per} <br>
//                     Grade : Fail <br>
//                     Remarks : Sorry`)
// }
// else{
//     alert("Please enter a correct Values")
// }

// Question:7
// var secretNum = 8;
// var userNum = parseInt(prompt("Enter a scret Number" , "Range 1 to 10"))
// if(userNum === secretNum){
//     alert("Bingo! Correct answer")
// }        

// else if(userNum === ++secretNum){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("Please enter a correct number")
// }

// Question:8
// var num = parseInt(prompt("Please enter a number"));
// var divisible = num % 3;
// if(divisible === 0 ) {
//     alert("Your Number is divisible by 3")
// }
// else{
//     alert("Your Number is not Divisible by 3")
// }

// Question:9
/////=============Question # 09 ======//////

// var number = parseInt(prompt("Please enter a Number"));
// var even = number % 2 ;
// if(even === 0){
//     alert("YOUR NUMBER IS EVEN")
// }
// else{
//     alert("YOUR NUMBER IS ODD")
// }

// Question:10
// var temp = parseInt(prompt("Enter weather Temperation"));
// if(temp>=40 ){
//     alert("It is too hot outside. ")
// }        
// else if(temp>=30 && temp <=40){
//     alert("The Weather today is Normal.")
// }
// else if(temp>=20 && temp<=30){
//     alert("Today’s Weather is cool.")
// }
// else if(temp>=10 && temp<=20){
//     alert("OMG! Today’s weather is so Cool.")
// }

// Question:11
// var num1  = parseInt(prompt("Enter Number 1"));
// var opt  = prompt("Enter Operator");
// var num2  = parseInt(prompt("Enter Number 2"));
// if(opt === "+" ){
//     alert( `${num1} + ${num2} = ${(+num1) + (+num2)}` )
// }
// else if(opt === "-" ){
//     alert( `${num1} - ${num2} = ${num1 - num2}` )
// }
// else if(opt === "*" ){
//     alert( `${num1} x ${num2} = ${num1 * num2}` )
// }
// else if(opt === "-" ){
//     alert( `${num1} / ${num2} = ${num1 / num2}` )
// }
// else if(opt === "%" ){
//     alert( `${num1} % ${num2} = ${num1 % num2}` )
// }

// CHAPTER 12-13
// IF…ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS

// Question:1
// var stringg = "A"
// var code = stringg.charCodeAt()
// if(code === 65){
//     alert("VARIABLE A AND ASCII CODE IS 65")
// }    
// else{
//     alert("no")
// }

// Question:2
// var val1 = parseInt(prompt("Enter Value 1: "));    
// var val2 = parseInt(prompt("Enter Value 2: "));    
// if(val1 > val2 ){
//     alert("Value 1 is Greater:" + " " + val1)
// }
// else if(val1<val2){
//     alert("Value 2 is Greater:" + " " + val2)
// }
// else if(val1 == val2){
//     alert("Boht values are equal")
// }
// else{
//     alert("please enter a correct value ")
// }

// Question:3
// var value = parseInt(prompt("Enter a number"));
// if(value > 0){
//     alert("your number is positive")
// }    

// else if(value < 0){
//     alert("your number is negative")
// }    
// else if(value == 0){
//     alert("your number is zero")
// }    
// else{
//     alert("Please enter a correct number")
// }

// Question:4
// var vowel = prompt("enter a character");
// vowel.toLowerCase()
// if(vowel == "a" | vowel == "e" | vowel == "i" | vowel == "o" | vowel == "u" ){
//     alert("VOWEL TRUE")
// }
// else{
//     alert("False")
// }

// Question:5
// var userPassword = prompt("Enter your password");
// var password = "saylani123"
// if(userPassword !== ""){
//     if(userPassword === password){
//         alert("Correct! The password you entered matches the original PAssword")
//     }
//     else{
//         alert("YOur password is not match")
//     }
// }
// else{
//     alert("please enter a password")
// }

// Question:6
///ERROR///
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
///FIX///
// var greeting;
// var hour = 13;
// if (hour < 18) {  greeting = "Good day";}

// else{ greeting = "Good evening";
// }

// Question:7
// var time = parseInt(prompt("Please Enter Time :" ,"Format like: 1900"));
// if(time >= 0000 && time <= 1200){
//     alert( '"Good morning!"')
// }    
// else if(time>=1200 && time<=1700){
//     alert(' "Good afternoon!" ')
// }
// else if(time>=1700 && time<=2100){
//     alert(' "Good evening!" ')
// }
// else if(time>=2100 && time<=2359){
//     alert(' "Good night!" ')
// }
// else{
//     alert("Please enter a correct time")
// }

///////END////