
/*  FIFTH TEST CASE*/

//  last test case is to handle negative numbers and give error so we can 
//  did that by not doing a reduce to get sum directly instead filter negative
//  number and give an error 

/*  FIFTH TEST CASE SOLUTION*/

function add(numbers) {
    if (numbers === "") return 0;
    let delimiter = /[\n,]/;

    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
    }

    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter(num => num < 0);

   
    return numArray.reduce((sum, num) => sum + num, 0);
}