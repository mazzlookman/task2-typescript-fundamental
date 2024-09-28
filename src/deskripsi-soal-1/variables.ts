// Deskripsi Soal 1 - Variables & Functions
// # 25 Variables with primitive data types

// string, 7 variables
let fruit: string = "Apple";
let car: string = "Mercedes";
let animal: string = "Meong";
let time: string = "09:34";
let date: string = "28/09/2024";
const stringObject: string = `{"name": "who am i"}`;
const stringNumber: string = "144"

console.info("String variables")
console.info("================")
console.log(fruit);
console.log(car);
console.log(animal);
console.log(time);
console.log(date);
console.log(stringObject);
console.log(stringNumber);

// integer, 7 variables
let positive: number = 28;
let negative: number = -89;
let decimal: number = 0.23;
let multiplication: number = 9*10;
let average: number = 28/6;
let sum: number = 12+34;
let subtraction: number = 12-34;

console.info("Integer variables")
console.info("================")
console.log(positive);
console.log(negative);
console.log(decimal);
console.log(multiplication);
console.log(average);
console.log(sum);
console.log(subtraction);

// any, 6 variables
const anyString: any = "Macbook Pro";
let anyNumber: any = 20000000;
let anyBoolean: any = true;
const anyNull: any = null;
const anyUndefined: any = undefined;
const anyObject: any = {"name": "Who am i"};

console.info("Any variables")
console.info("================")
console.log(anyString);
console.log(anyNumber);
console.log(anyBoolean);
console.log(anyNull);
console.log(anyUndefined);
console.log(anyObject);

// boolean, 4 variables
let isActive: boolean = true;
let isMember: boolean = false;
let isReady: boolean = true;
let isLife: boolean = false;

console.info("Boolean variables")
console.info("================")
console.log(isActive);
console.log(isMember);
console.log(isReady);
console.log(isLife);

// null, 1 variable
let nullValue: null = null;

console.info("Null variables")
console.info("================")
console.log(nullValue)

// undefined, 1 variable
let life: undefined = undefined;

console.info("Undefined variables")
console.info("================")
console.log(life)

// bigint, 1 variable
// @ts-ignore
let bigIntValue: bigint = 73823673825723657263526372632375n;

console.info("BigInt variables")
console.info("================")
console.log(bigIntValue)
