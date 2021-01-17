function sumOfPositive(array){
  var total = 0
  for(index = 0; index < array.length; index ++){
    if (array[index] < 0) {
      array[index] = 0
   
    }   
    total += array[index] 
  }
  return total 
}


// whats the different ways we can itterate over an array in JS? for, forEach, map? 
//which to use when?