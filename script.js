const quicksort = (arr) => {
    if (arr.length == 0) {
        return [];
    }
    else if (arr.length == 1) {
        return arr;
    }

    let i = Math.floor(arr.length / 2);
    let pivot = arr[i];
    arr.splice(i, 1);
    return [
        ...quicksort(arr.filter(y => y < pivot)),
        pivot,
        ...quicksort(arr.filter(y => y >= pivot))
    ]
}

let numbers = [37, 82, 14, 65, 29, 53, 91, 48, 76, 20];
console.log(quicksort(numbers));