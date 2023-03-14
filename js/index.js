const array = Array.from(Array(1001).keys());

function binary_search(array, item, start = 0, finish = null) {
    if(finish === null) {
        finish = array.length - 1;
    }

    if(start > finish) {
        return -1;
    }

    let half = Math.round((start + finish) / 2);

    if(array[half] !== item) {
        if(array[half] > item) {
            finish = half - 1;
        } else {
            start = half + 1;
        }

        return binary_search(array, item, start, finish);
    }

    return half;
}

console.log(binary_search(array, 100));