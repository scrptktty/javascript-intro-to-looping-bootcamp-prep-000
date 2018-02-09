function forLoop(array) {
  for (let i = 0; i < 26; i++) {
    var mySentence = `I am ${i} stange loop${i === 1 ? "" : "s"}.`
    array.push(mySentence)
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
