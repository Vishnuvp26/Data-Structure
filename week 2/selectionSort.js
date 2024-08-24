function selectionSort(arr){
    for (let i = 0; i < arr.length; i++){
        let minIdx = i;

        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            let temp = arr[i]; // temp = arr[0] = 8
            arr[i] = arr[minIdx]; // arr[0] = arr[4] = -6
            arr[minIdx] = temp; // arr[4] = temp = 8
        }        
    }
    return arr;
};

const arr = [-6, 20, 8, -2, 4];
console.log(selectionSort(arr));