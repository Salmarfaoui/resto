// heart
const heart = document.getElementsByClassName("fa");
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    heart[i].classList.toggle("red");
  });
}
// remove
const remove = document.getElementsByClassName("btn");
for (let i = 0; i < remove.length; i++) {
  remove[i].addEventListener("click", function (el) {
    el.target.parentElement.remove();
    total();
  });
}
// counter +
const plus = document.getElementsByClassName("plus");
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].nextElementSibling.value++;
    total();
  });
}
// counter -
const minus = document.getElementsByClassName("minus");
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    if (minus[i].previousElementSibling.value > 0) {
      minus[i].previousElementSibling.value--;
      total();
    }
  });
}
// total
const price = document.getElementsByClassName("price");
const quantity = document.getElementsByClassName("quantity");
console.log(price);
console.log(quantity);
function total() {
  var totale = 0;
  for (let i = 0; i < price.length; i++) {
    totale += parseInt(quantity[i].value) * parseInt(price[i].innerHTML);
    console.log(totale);
  }
  return (document.getElementById("default").innerText = totale);
}
