/*const array = [];

function forLoop(array){
  for(var i = 0; i < 25; i++) {
    if(i === 1){
       array.push(`"I am ${i} strange loop"`);
    } else {
       array.push(`"I am ${i} strange loops"`);
    }
  }
  return array;
}*/
function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`);
     } else {
       array.push(`I am ${i} strange loops.`);
     }
  }
  return array;
}

function whileLoop(n) {
  let countdown = n;

     while (countdown > 0) {
      console.log(--countdown)
    }
    return "done";
  }
  
  
function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }

   do {
    array.pop();
  } while (array.length > -1 && maybeTrue());
    return array;
}


function doWhileLoop(num) {
 var i = 0;

 function incrementVariable() {
  i = i + 1;
  return i;
}

 do {
  console.log("I ru n once regardless.");
} while (incrementVariable() < num);

}


