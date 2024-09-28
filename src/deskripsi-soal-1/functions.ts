export function sum(number1: number, number2: number): number {
    return number1 + number2;
}

export function subtraction(number1: number, number2: number): number {
    return number1 - number2;
}

export function multiplication(number1: number, number2: number): number {
    return number1 * number2;
}

export function average(number1: number, number2: number): number {
    return number1 / number2;
}

// # Functions with return value
console.info("Functions with return value")
console.info("================")
console.log(sum(12, 34));
console.log(subtraction(12, 34));
console.log(multiplication(12, 34));
console.log(average(12, 34));