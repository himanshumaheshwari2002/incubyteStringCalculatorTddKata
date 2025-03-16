
/*  THIRD TEST CASE*/

//  now the third test tase is when we pass  /n deliminator and it should return
//  sum of all integers we can achieve it using the same last method but updated
//  split concept by splitting it on /n or , which return array of strings troght
//  which can iterate whole using map and converting each value to integer by
//  number.map(NUMBER) and gettinga sum using reduce to iterate through whole array
//  and get single value
//  eg - ("1\n2,3") should return 6

/*  THIRD TEST CASE SOLUTION*/

function add(numbers) {
    if (numbers === "") return 0;
    console.log(numbers.split(/[\n,]/));
    
    return numbers
        .split(/[\n,]/) // Split on comma or newline
        .map(Number)
        .reduce((sum, num) => sum + num, 0);

}

let answer = add("1\n2,3")
console.log(answer);

