function showDiv() {
  document.getElementById("div").style.visibility = "visible";
}
setTimeout("showDiv()", 4000);

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function calc(val) {
  document.getElementById("result").value += val;

  return val;
}

function clears() {
  document.getElementById("result").value = "";
}

function solve() {
  let x = document.getElementById("result").value;

  let y = eval(x);

  document.getElementById("result").value = y;

  return y;
}

window.addEventListener("mousemove", function (e) {
  document.getElementById("cursor").style.left = e.pageX;
  document.getElementById("cursor").style.top = e.pageY;
});
