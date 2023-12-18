function productOfElements(arr) {
    let product = 1;
    let i = 0;
    while (i < arr.length) {
        product *= arr[i];
        i++;
    }
    console.log(product);
}
productOfElements([1, 2, 3, 4, 5]);