 let numCount = document.getElementById("numcount")

let count = 0

function increment() {
  count = count + 1
  numCount.innerText = count
}

  function reset() {
    numCount.innerText = 0
    count = 0
  }