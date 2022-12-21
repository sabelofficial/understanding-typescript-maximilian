var button_ = document.querySelector("button");
var input1_ = document.getElementById("num1");
var input2_ = document.getElementById("num2");
function add_(num1, num2) {
    return num1 + num2;
}
button_.addEventListener("click", function () {
    console.log(add_(+input1_.value, +input2_.value));
});
