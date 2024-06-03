const outputText = document.querySelector(".output");
let typeSpeed = 100;
let id = 0;
const words = ["Lets talk about Tech..."];

const color = "#83194e";
let res;

let charCount = 0;
const pauseTime = 10;
let time = setInterval(type, typeSpeed);
function type() {
  res = words[id].substring(0, charCount);

  outputText.computedStyleMap.color = color;
  if (charCount >= words[id].length + pauseTime) {
    clearInterval(time);
    charCount = 1;
  }
  outputText.innerHTML = res;
  charCount++;
}
