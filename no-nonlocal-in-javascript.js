function counterMaker() {
  let count = 0
  function counter() {
    count++
    console.log(count)
  }
  return counter
}

myCounter = counterMaker()
yourCounter = counterMaker()

myCounter()
myCounter()
myCounter()
myCounter()

yourCounter()
yourCounter()
yourCounter()
yourCounter()
