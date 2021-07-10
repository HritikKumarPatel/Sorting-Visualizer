
const { JSDOM } = require("jsdom");
const { window } = new JSDOM();
 
var start = window.performance.now();

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
const animation = [];
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            animation.push([i, j]);
            animation.push([i, j]);
            animation.push([[i, items[j]], [j, items[i]]]);
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

export function quickSort(array)
{
    helper(array, 0, array.length-1);
     var end = window.performance.now();
     console.log(start);
     console.log(end);
    return animation;
}

function helper(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            helper(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            helper(items, index, right);
        }
    }
}