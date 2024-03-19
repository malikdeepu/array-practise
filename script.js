const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
document.getElementById("demo1").innerHTML = cars[0];

cars[0] = "Opel";
document.getElementById("demo2").innerHTML = cars;

document.getElementById("demo3").innerHTML = cars.toString();

const person = ["John", "Doe", 46];
document.getElementById("demo4").innerHTML = person[0];
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
document.getElementById("demo5").innerHTML = size;
function myFunction() {
  fruits.push("Lemon");
  document.getElementById("demo6").innerHTML = fruits;
}
const fruit = ["Banana", "Orange", "Apple", "Mango"];
let frut = fruit.at(2);
document.getElementById("demo7").innerHTML = frut;

document.getElementById("demo8").innerHTML = fruits.join(" * ");

document.getElementById("demo9").innerHTML = fruits;
fruits.pop();
document.getElementById("demo10").innerHTML = fruits;
document.getElementById("demo11").innerHTML = fruits;
fruits.push("Kiwi");
document.getElementById("demo12").innerHTML = fruits;
document.getElementById("demo13").innerHTML = fruits;
fruits.shift();
document.getElementById("demo14").innerHTML = fruits;
document.getElementById("demo15").innerHTML = fruits;
fruits.unshift("Lemon");
document.getElementById("demo16").innerHTML = fruits;
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);

document.getElementById("demo17").innerHTML = myChildren;
document.getElementById("demo18").innerHTML = fruits.copyWithin(2, 0);
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const newArr = myArr.flat();
document.getElementById("demo19").innerHTML = newArr;

const fruitsss = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo20").innerHTML = fruitsss;

fruitsss.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("demo21").innerHTML = fruitsss;

document.getElementById("demo22").innerHTML = "Original Array:<br> " + fruitsss;
let removed = fruitsss.splice(2, 2, "Lemon", "Kiwi");
document.getElementById("demo23").innerHTML = "New Array:<br>" + fruitsss;
document.getElementById("demo24").innerHTML = "Removed Items:<br> " + removed;

document.getElementById("demo25").innerHTML = fruitsss;
fruitsss.splice(0, 1);
document.getElementById("demo26").innerHTML = fruitsss;

const months = ["Jan", "Feb", "Mar", "Apr"];
document.getElementById("demo27").innerHTML = months;
const spliced = months.toSpliced(0, 1);

document.getElementById("demo28").innerHTML = spliced;

const fruitss = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruitss.slice(1);
document.getElementById("demo29").innerHTML = fruitss + "<br><br>" + citrus;

const fruitssss = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citruss = fruitssss.slice(3);
document.getElementById("demo30").innerHTML = fruitssss + "<br><br>" + citruss;
