function reverseArray(arr) {
    let i = 0;
    while (i < arr.length / 2) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
        i++;
    }
    console.log(arr);
}
reverseArray([1, 2, 3, 4, 5]);