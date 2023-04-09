const arr = [1, 1, 1, 1, 2,2,2,3,3,3]

for  (let i = 0; i < arr.length; i++) {
    
  let m = 0;
  for (let k = 0; k < i; k++) {
    if (arr[i] == arr[k]) {
      m++;
    }
  }

  for (let k = 0; k < arr.length; k++) {
    if (arr[i] == arr[k] && i != k && m == 0) {
      console.log(arr[i]);
      break;
    }
  }
}
