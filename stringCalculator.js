/*  FIRST TEST CASE*/

// our first test case should be an empty string to return a 0  which can directly check inside an if condition
//eg - "" should return a 0

/*  FIRST TEST CASE SOLUTION*/

function add(numbers) {
    if (numbers === "") return 0;
}

let answer = add("")
console.log(answer);
