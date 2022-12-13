const button_ = document.querySelector("button")! as HTMLButtonElement;
const input1_ = document.getElementById("num1")! as HTMLInputElement;
const input2_ = document.getElementById("num2")! as HTMLInputElement;

function add_(num1: number, num2: number) {
  return num1 + num2;
}

button_.addEventListener("click", function() {
  console.log(add_(+input1_.value, +input2_.value));
});
