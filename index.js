/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const conString = `${s1},${s2},${s3},${s4},${s5}`
// Print out the concatenated string
console.log(conString)



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const changePart1 = part1.slice(0,-1) + part1.slice(-1).toUpperCase()
const changePart2 = part2.slice(0,-1) + part2.slice(-1).toUpperCase()
// Print the cameLtaiL-formatted string
console.log(`${changePart1}  ${changePart2}`)




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const propina = billTotal * 0.15
// Print out the tipAmount
console.log(`total propina es ${propina}`)




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randomNumber = Math.floor(Math.random() * 10 ) + 1
// Print the generated random number
console.log(randomNumber)


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; 
// false: ambas deben ser true para que se cumpla el &&

const expression2 = a || b;
// true: con que una sea true el operador or se cumple

const expression3 = !a && b;
// false: ambas falsas

const expression4 = !(a && b);
// true: a && b es false y al ser negado nos da el true


const expression5 = !a || !b;
// true: el false de b se niega y nos da el true para que se cumpla el or

const expression6 = !(a || b);
// false: a || b es true y lo negamos con !

const expression7 = a && a;
// true: no sabia que se podia comparar la misma variable, true && true = true