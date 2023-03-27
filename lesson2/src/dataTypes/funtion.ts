// 1. Khai báo hàm (Function declaration)
function func1() {
    // Hoisting
    console.log("func1");
}

const func2 = function () {
    console.log("func2");
}

const func3 = () => {
    console.log("func3");
}

// 2. Function return
let num3: number;
// function divide(): number {
//     return;
// }

// const showName = function(): string {
//     return;
// }

const func4 = function (): void {
    console.log("4");
}

const showError = function (): never {
    const err = new Error("Something went wrong!")
    throw err;
}

// 3. Function parameter
function divide(a: number, b: number = 1): number {
    return a / b;
}

console.log(divide(10,));


const showName = function (ho: string, ten: string, dem: string): string {
    return ho + dem + ten;
}
console.log(showName("Vu", "Quan", "Huu"));


// 4. Rest parameter
const showClass = function (name: string, ...classes: string[]) {
    return "Ban " + name + " hoc cac lop " + classes.join(', ')
}
console.log(showClass("Quan", "NodeJS", "TypeScript", "Phap luat"));

// 5. Callback

const numb = [1, 2, 3, 4, 5, 6]
// const we17307_map = function (arr: number[], callback?: (item: number) => number): number[] {
//     const temp: number[] = []
//     for (let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp
// }

// const result = we17307_map(numb, (item) => {
//     return item * item
// })
// console.log(result);
