/*  SECOND TEST CASE*/

//  now the second test tase is when we pass , seperated integers and it should return sum of all
//  integers which can be achive by using a split method which convert string into an array and
//  then iterate all numbers inside it using array.map(NUMBERS) method and finally use reduce to 
//  iterate througn all values and get single value

//eg ("1,2,3") should return 6

/*  SECOND TEST CASE SOLUTION*/

function add(numbers) {
    if (numbers === "") return 0;
    console.log(numbers.split(","));
    
    return numbers.split(",").map(Number).reduce((sum, num) => sum + num, 0);

}

let answer = add("1,2,3")
console.log(answer);
