 export function bubblesort(arr){
     const animation = [];
 for(var i = 0; i < arr.length; i++){
     
   for(var j = 0; j < ( arr.length - i -1 ); j++){
    
     if(arr[j] > arr[j+1]){
        animation.push([j, j+1]);
        animation.push([j, j+1]);
        animation.push([[j, arr[j+1]],[j+1, arr[j]]]);
        let temp = arr[j];
        arr[j]=arr[j+1];
        arr[j+1] = temp; 
      // swap(arr[j], arr[j+1]); 
     }
   }
 }
 return animation;
}