// Generics
function showStringData(a) {
    return a;
}
function showNumberData(a) {
    return a;
}
function showData(a) {
    return a;
}
showData(10);
const numArr = [1, 2, 3, 4, 5, 6, 7, 8];
const arras = ["Trinh", "Ly", "Bich"];
// const result = numArr.map(item => {
//     return item * item
// })
const we17307map = (arr, callback) => {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        const newItem = callback(arr[i], i);
        temp.push(newItem);
    }
    return temp;
};
const result1 = we17307map(numArr, (item, index) => {
    return item + index;
});
console.log(result1);
