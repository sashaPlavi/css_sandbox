const TypeWriter = function(textElement, words, wait = 3000) {
  this.textElement = textElement;
  this.words = words;
  this.wait = wait;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

TypeWriter.prototype.type = function() {
  const txtElement = document.querySelector(".txt-type");
  console.log(txtElement);

  console.log("haho");
  const index = this.wordIndex % this.words.length;
  console.log(index);

  const fulltxt = this.words[index];
  console.log(fulltxt);

  if (this.isDeleting) {
    this.txt = fulltxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fulltxt.substring(0, this.txt.length + 1);
  }
  console.log(this.txt);
  if (!this.isDeleting && this.txt === fulltxt) {
    this.wordIndex++;
  }

  txtElement.innerHTML = `<span class="txt">${this.txt}</span> `;

  setTimeout(() => {
    this.type();
  }, 500);
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector(".txt-type");
  // console.log(txtElement);

  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  new TypeWriter(txtElement, words, wait);
  console.log(123);
}
