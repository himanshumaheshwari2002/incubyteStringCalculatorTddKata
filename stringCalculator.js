/*  FIRST SAMPLE FUNCTION*/


// function add(numbers) {

// }



// ------------------------------------------------------------------   //







/*  FIRST TEST CASE*/

// our first test case should be an empty string to return a 0  which can directly check inside an if condition
//eg - "" should return a 0

/*  FIRST TEST CASE SOLUTION*/

// function add(numbers) {
//     if (numbers === "") return 0;
// }

// let answer = add("")
// console.log(answer);







// ------------------------------------------------------------------   //




/*  SECOND TEST CASE*/

//  now the second test tase is when we pass , seperated integers and it should return sum of all
//  integers which can be achive by using a split method which convert string into an array and
//  then iterate all numbers inside it using array.map(NUMBERS) method and finally use reduce to 
//  iterate througn all values and get single value

//eg ("1,2,3") should return 6

/*  SECOND TEST CASE SOLUTION*/

// function add(numbers) {
//     if (numbers === "") return 0;
//     console.log(numbers.split(","));
    
//     return numbers.split(",").map(Number).reduce((sum, num) => sum + num, 0);

// }

// let answer = add("1,2,3")
// console.log(answer);






// ------------------------------------------------------------------   //



/*  THIRD TEST CASE*/

//  now the third test tase is when we pass  /n deliminator and it should return
//  sum of all integers we can achieve it using the same last method but updated
//  split concept by splitting it on /n or , which return array of strings troght
//  which can iterate whole using map and converting each value to integer by
//  number.map(NUMBER) and gettinga sum using reduce to iterate through whole array
//  and get single value
//  eg - ("1\n2,3") should return 6

/*  THIRD TEST CASE SOLUTION*/

// function add(numbers) {
//     if (numbers === "") return 0;
//     console.log(numbers.split(/[\n,]/));
    
//     return numbers
//         .split(/[\n,]/) // Split on comma or newline
//         .map(Number)
//         .reduce((sum, num) => sum + num, 0);

// }

// let answer = add("1\n2,3")
// console.log(answer);





// ------------------------------------------------------------------   //



/*  FOURTH TEST CASE*/

// fourth test case is to handle custom deliminator which can be handle by 
// just add a check for custom deliminated and inside it split it on behalf 
// of /n and get the deliminator from first part and number as second part 
// and now rest remain the same last logic only change is in split case we
// need to pass the custom deliminator we get from previous check 
// eg ("//;\n1;2") should return 


/*  FOURTH TEST CASE SOLUTION*/

// function add(numbers) {
//     if (numbers === "") return 0;
//     let delimiter = /[\n,]/; 

//     if (numbers.startsWith("//")) {
//         const parts = numbers.split("\n");
//         delimiter = new RegExp(parts[0].slice(2)); 
//         numbers = parts[1]; 
//         console.log("parts--" ,parts,"delimiter--",delimiter,"numbers",numbers);
        
//     }

//     return numbers
//         .split(delimiter)
//         .map(Number)
//         .reduce((sum, num) => sum + num, 0);
// }

// let answer = add("//;\n1;2")
// console.log(answer);





// ------------------------------------------------------------------   //



/*  FIFTH TEST CASE*/

//  last test case is to handle negative numbers and give error so we can 
//  did that by not doing a reduce to get sum directly instead filter negative
//  number and give an error 

/*  FIFTH TEST CASE SOLUTION*/

// function add(numbers) {
//     if (numbers === "") return 0;
//     let delimiter = /[\n,]/;

//     if (numbers.startsWith("//")) {
//         const parts = numbers.split("\n");
//         delimiter = new RegExp(parts[0].slice(2));
//         numbers = parts[1];
//     }

//     const numArray = numbers.split(delimiter).map(Number);
//     const negatives = numArray.filter(num => num < 0);

//     if (negatives.length) {
//         throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
//     }

//     return numArray.reduce((sum, num) => sum + num, 0);
// }