// const arr4 = [1, 3, 2, 6, 4];
// const arrStr = ['a', 'c', 'e', 'b', 'd']
// const numArr2 = [5, 3, 9, 2, 4, 1]
// const strArr = ["hải", "bhịnh", "ahắng", "phi"]
// // function bubbleSort<t>(arr: t[]): t[] {
// //     for (let i = 0; i < arr.length; i++) {

// //         for (let j = i + 1; j < arr.length; j++) {
// //             if (arr[i] > arr[j]) {
// //                 let temp = arr[i];
// //                 arr[i] = arr[j];
// //                 arr[j] = temp;

// //             }

// //         }

// //     }
// //     return arr
// // }
// function bubbleSort<T>(arr: T[], callback?: (a: T, b: T) => number): void {
//     if (!callback) {
//         callback = (a: T, b: T) => {
//             if (a > b) {
//                 return 1
//             } else {
//                 return -1
//             }
//         }
//     }
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (callback(arr[i], arr[j]) > 0) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
// }


// bubbleSort(strArr, (a, b) => {
//     return b.localeCompare(a)
// })

// function selectionSort<t>(arr: t[]): t[] {
//     let min: number;
//     for (let i = 0; i < arr.length; i++) {
//         min = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j;
//             }
//         }
//         if (min !== i) {
//             let temp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = temp;
//         }
//     }
//     return arr;
// }
// console.log(selectionSort<string>(arrStr));



// // function quickSort<t>(arr: t[]): t[] {
// //     if (arr.length < 2) return arr;
// //     const pivotIndex = arr.length - 1;
// //     const pivot = arr[pivotIndex]
// //     const left: Array<t> = [];
// //     const right: Array<t> = [];
// //     let currentItem: t;
// //     for (let i = 0; i < pivotIndex; i++) {
// //         currentItem = arr[i];

// //         if (currentItem < pivot) {
// //             left.push(currentItem);

// //         } else {
// //             right.push(currentItem);

// //         }
// //     }

// //     return [...quickSort(left), pivot, ...quickSort(right)];
// // }

// function quickSort<t>(
//     arr: t[],
//     start: number = 0,
//     end: number = arr.length
// ): t[] {
//     if (start < end) {
//         let p = partition<t>(arr, start, end);
//         quickSort(arr, start, p - 1);
//         quickSort(arr, p + 1, end);
//     }
//     return arr;
// }

// function partition<t>(
//     arr: Array<t>,
//     start: number = 0,
//     end: number = arr.length
// ) {
//     let pivot: t = arr[start];
//     let swapIndex: number = start;
//     for (let i = start + 1; i < end; i++) {
//         if (arr[i] < pivot) {
//             swapIndex++;
//             swap(arr, i, swapIndex);
//         }
//     }
//     swap<t>(arr, start, swapIndex);
//     return swapIndex;
// }

// function swap<t>(arr: Array<t>, i: number, j: number) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }
// console.log(quickSort<string>(arrStr));



