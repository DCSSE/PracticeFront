/*jshint esversion: 6 */
/*global console*/

// Task1  Basic Operators
//let popult = 19279000;
//let pFinland = 6000000;
//let avgCountry = 33000000;

//console.log(popult/2);       // 1.1
//console.log(popult++);       // 1.2
//console.log(popult > pFinland);       // 1.3
//console.log(popult < avgCountry);       // 1.4

//const country = "Portugal";             // 1.5
//const continent = "Europe";
//let language = "Portuguese";
//let population = 10;
//const isIsland = false;
//population += 1;
//const description = 
//    country + " is in " + 
//    continent + ", and its " + 
//    population + " million people speak " +
//        language;
//console.log(description);

// Task 2  Strings and Template Literals
//const description1 = 
//    `${country} is in ${continent}, and its ${population} million people speak ${language}`;
//console.log(description1);

// Task 3   Taking Decisions: if / else Statements
//if (population > 33) {
//    console.log(`${country}'s population is above average` );             // 3.1
//    } else {
//    console.log(`${country}'s population is ${33 - population} million below average`);
//    }

//population = 13;                            // 3.2
//if (population > 33) {
//    console.log(`${country}'s population is above average` );            
//    } else {
//    console.log(`${country}'s population is ${33 - population} million below average`);
//    }

// Task 4  Type Conversion and Coercion
//console.log('9' - '5');
//console.log('19' - '13' + '17');
//console.log('19' - '13' + 17);
//console.log('123' < 57);
//console.log(5 + 6 + '4' + 9 - 4 - 2);

// Task 5   Equality Operators: == vs. ===
//const numNeighbours = prompt('How many neighbour countries does your country have?');  //5.1

//const numNeighbours = Number ( prompt('How many neighbour countries does your country have?') ); // 5.7 If we convert input value as Number then it is working. 

//if(numNeighbours == 1) {             //5.2
//    console.log('Only 1 border!');     
//} else if (numNeighbours > 1) {     //5.3
//    console.log('More than 1 border!');
//} else {                                //5.4
//    console.log('No borders');
//}

// 5.8 We should use === operator to make sure two operands have the same type to futher work without bugs.
//if(numNeighbours === 1) {                   // 5.6
//    console.log('Only 1 border!');         // It is used to check whether two operands are having same value and same type. Assigning equal value but different type to the operator gives result of 'No borders' 
//} else if (numNeighbours > 1) {
//    console.log('More than 1 border!');
//} else {
//    console.log('No borders');
//}

// Task 6  Logical Operators
//if (language === 'english' && population < 50 && !(isIsland) ) {
//    console.log(`You should live in ${country} :)`);
//} else {
//    console.log(`${country} does not meet your criteria :(`);
//}

// Task 7  The switch Statement
//language = prompt('Enter your language:');
//switch (language) {
//    case 'chinese':
//    case 'mandarin':
//        console.log('MOST number of native speakers!');
//        break;
//    case 'spanish':
//        console.log('2nd place in number of native speakers');
//        break;
//    case 'english':
//        console.log('3rd place in number of native speakers');
//        break;
//    case 'hindi':
//        console.log('4th place in number of native speakers');
//        break;
//    case 'arabic':
//        console.log('5th most spoken language');
//        break;
//    default:
//        console.log('Great language too :D');
//        break;
//        }

// Task 8 The Conditional (Ternary) Operator
//population = 130;    // to check
//console.log(`${country}'s population is ${population > 33 ? 'above' : 'below' } average`);


// Task 9
//function BMI (mass, height) {
//    return mass / (height * height) ;
//}
//
//let ArmanM1 = 78, ArmanH1 = 1.69, ArmanM2 = 95, ArmanH2 = 1.88;
//let KuatM1 = 92, KuatH1 = 1.95, KuatM2 = 85, KuatH2 = 1.76;
//
//let resultArm = BMI(ArmanM1,ArmanH1);
//let resultK = BMI(KuatM1,KuatH1); 
//let armanHigherBMI = (resultArm > resultK); 

//console.log(`Results of Arman is ${resultArm}`);
//console.log(`Results of Kuat is ${resultK}`);
//console.log(`Arman has higher BMI: ${armanHigherBMI}`);

// Task 10
//if (resultArm > resultK) {
//    console.log(`Arman has higher BMI (${resultArm.toFixed(1)}) than Kuat has (${resultK.toFixed(1)})`);
//} else if (resultK > resultArm) {
//    console.log(`Kuat has higher BMI (${resultK}) than Arman has (${resultArm})`);
//} else {
//    console.log(`Arman and Kuat have equal BMI: ${resultK}`);
//}

// Task 11
//let Alm1 = 96, Alm2 = 108, Alm3 = 89, Alm1_1 = 97, Alm1_2 = 112, Alm1_3 = 101;
//let Alm2_1 = 97, Alm2_2 = 112, Alm2_3 = 101;
//let Ast1 = 88, Ast2 = 91, Ast3 = 110, Ast1_1 = 109, Ast1_2 = 95, Ast1_3 = 123;
//let Ast2_1 = 109, Ast2_2 = 95, Ast2_3 = 106;
//
//let avgAlm = (Alm1 + Alm2 + Alm3) / 3;
//let avgAst = (Ast1 + Ast2 + Ast3) / 3;

//if (avgAlm > avgAst) {
//    console.log(`Almaty has won! Average score is ${avgAlm.toFixed(1)}, for Astana - ${avgAst.toFixed(1)}`);
//} else if (avgAlm < avgAst) {
//    console.log(`Astana has won! Average score is ${avgAst.toFixed(1)}, for Almaty - ${avgAlm.toFixed(1)}`);
//} else {
//    console.log(`It's DRAW! Average score is ${avgAst.toFixed(1)}`);
//}

//let minsc = 100;
//if (avgAlm > avgAst && avgAlm >= minsc) {        // bonus 1 and bonus 2
//    console.log(`Almaty has won! Average score is ${avgAlm.toFixed(1)}, for Astana - ${avgAst.toFixed(1)}`);
//} else if (avgAlm < avgAst && avgAst >= minsc) {
//    console.log(`Astana has won! Average score is ${avgAst.toFixed(1)}, for Almaty - ${avgAlm.toFixed(1)}`);
//} else if (avgAlm === avgAst && avgAst >= minsc) {
//    console.log(`It's DRAW! Average score is ${avgAst.toFixed(1)}`);
//} else {
//    console.log('No win!');
//}

// Task 12
let bill = 275;
let tip = bill > 50 && bill < 300 ? (bill*0.15) : (bill*0.20);

console.log(`Bill = ${bill}, tip = ${tip} and total sum = ${bill+tip}`);








