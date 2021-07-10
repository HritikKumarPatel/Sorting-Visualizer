const cpuArray = [];
const { JSDOM } = require("jsdom");
const { window } = new JSDOM();
 
var start = window.performance.now();
export function mergeSort(array) {
  
  if (array.length <= 1) return array;
  const tempArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, tempArray, cpuArray);
  var end = window.performance.now();
  console.log(start);
  console.log(end);
  return cpuArray;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  tempArray,
  cpuArray,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(tempArray, startIdx, middleIdx, mainArray, cpuArray);
  mergeSortHelper(tempArray, middleIdx + 1, endIdx, mainArray, cpuArray);
  doMerge(mainArray, startIdx, middleIdx, endIdx, tempArray, cpuArray);
}


function doMerge(mainArray, l, mid, r, tempArray, cpuArray)
{
  let k = l;
  let i = l;
  let j = mid + 1;
  while (i <= mid && j <= r) {
    
    cpuArray.push([i, j]);
    cpuArray.push([i, j]); 
    
    if (tempArray[i] <= tempArray[j])
    {
      cpuArray.push([k, tempArray[i]]);
      mainArray[k++] = tempArray[i++];
    }
    else 
    { 
      cpuArray.push([k, tempArray[j]]);
      mainArray[k++] = tempArray[j++];
    }
  }
  while (i <= mid) {

    cpuArray.push([i, i]);
    cpuArray.push([i, i]);

    cpuArray.push([k, tempArray[i]]);
    mainArray[k++] = tempArray[i++];
  }
  while (j <= r) {
    cpuArray.push([j, j]);
    cpuArray.push([j, j]);
    cpuArray.push([k, tempArray[j]]);
    mainArray[k++] = tempArray[j++];
  }
}