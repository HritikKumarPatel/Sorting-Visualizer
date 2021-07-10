export function insertionSort(arr) 
{ 
    let n = arr.length;
    const animation = [];
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key)
        { 
            animation.push([i, j+1]);
            animation.push([i, j+1]);
            animation.push([[j, arr[j+1]], [j+1, arr[j]]]);
            
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        animation.push([j+1, j+1]);
        animation.push([j+1, j+1]);
        animation.push([[j+1, key], [j+1, key]]);
        arr[j + 1] = key; 
    } 
    return animation;
} 