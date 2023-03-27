const arr4 = [1, 3, 2, 6, 4];
const arrStr = ['a', 'c', 'e', 'b', 'd'];
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort(arrStr));
function selectionSort(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
console.log(selectionSort(arrStr));
// function quickSort<t>(arr: t[]): t[] {
//     if (arr.length < 2) return arr;
//     const pivotIndex = arr.length - 1;
//     const pivot = arr[pivotIndex]
//     const left: Array<t> = [];
//     const right: Array<t> = [];
//     let currentItem: t;
//     for (let i = 0; i < pivotIndex; i++) {
//         currentItem = arr[i];
//         if (currentItem < pivot) {
//             left.push(currentItem);
//         } else {
//             right.push(currentItem);
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }
function quickSort(arr, start = 0, end = arr.length) {
    if (start < end) {
        let p = partition(arr, start, end);
        quickSort(arr, start, p - 1);
        quickSort(arr, p + 1, end);
    }
    return arr;
}
function partition(arr, start = 0, end = arr.length) {
    let pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i < end; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            swap(arr, i, swapIndex);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
console.log(quickSort(arrStr));
