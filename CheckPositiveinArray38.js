function areAllPositive(arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] <= 0) {
            console.log(false);
            return;
        }
        i++;
    }
    console.log(true);
}
areAllPositive([1, 2, 3, 4, 5]);