// babys first javascript website programming thingies; run with 'bun run filename'
// good practices: do more functional programing than OO, try to avoid class-based stuff
// interfaces as well let you do OO stuff using typescript
console.log("hello world");

//declaring vars
let a = "hello"; //mutable
const b = "krill"; //immutable

console.log(a + " " + b);

a = "hi";

//string templating is a good shorthand for string concat
console.log(`${a},{b}!`);

const val = Math.random();
function test() {
  return val < 0.5;
}

//arrow funcs with => give lambda
const arrowFuncy = () => !test();

//in js, arrays are hashmaps!
const arr = [0, 1, a, b];

// equivalent to 'for (a : arr){}' in java
for (const a of arr) {
  console.log(a);
}

// like for  element of, but handles keys not values
for (const a in arr) {
  console.log(a);
}

// ternary is equivalent to java, note: this does boolean short circuiting!
const term = test() ? "Tru :)" : "Fal :(";
//boolean short circuiting: once the overall body of the boolean is determined, stop evaluating & return
//if using functions within the boolean to evaluate, unreached functions will not execute. lets you do conditionals embedded into logic
//(True && False) || True;

//objects! kv pairs, like in java
const obj = {
  key: "value",
  key2: 2,
};

//distinction between getters is like pandas dataframe usage
obj.key; //refers to named value of obj
obj["a"]; //refers to arbitrary dynamic value

function nullable() {
  //oneliner ifs & elses allowed!
  if (Math.random() < 0.5) return null;
  else return "stringggg";
}

nullable(); //occasionally faulty, returning null!
console.log(nullable()?.charAt(2)); // ?. = optional chaining, when arg is optional/null it returns undefined, otherwise continues
