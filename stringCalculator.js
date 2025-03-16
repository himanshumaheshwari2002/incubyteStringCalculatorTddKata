
/*  FOURTH TEST CASE*/

// fourth test case is to handle custom deliminator which can be handle by 
// just add a check for custom deliminated and inside it split it on behalf 
// of /n and get the deliminator from first part and number as second part 
// and now rest remain the same last logic only change is in split case we
// need to pass the custom deliminator we get from previous check 
// eg ("//;\n1;2") should return 


/*  FOURTH TEST CASE SOLUTION*/

function add(numbers) {
    if (numbers === "") return 0;
    let delimiter = /[\n,]/; 

    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].slice(2)); 
        numbers = parts[1]; 
        console.log("parts--" ,parts,"delimiter--",delimiter,"numbers",numbers);
        
    }

    return numbers
        .split(delimiter)
        .map(Number)
        .reduce((sum, num) => sum + num, 0);
}

let answer = add("//;\n1;2")
console.log(answer);
