function forLoop(array) {
  for (let i= 0; i < 26; i++) {
    console.log("I am ${i} strange loops.")
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do { 
    array.pop()
  } while (array.length > 0 && maybeTrue)
}