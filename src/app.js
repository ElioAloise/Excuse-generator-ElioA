/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const button = document.getElementById("myButton");
const div = document.getElementById("excuse");

window.onload = function() {
  //write your code here

  console.log("randomnumber");
  // document.querySelector("#excuse").innerHTML = generateExcuse();
  //const button = document.getElementById("myButton");
  // const div = document.getElementById("excuse");
  button.addEventListener("click", generateExcuse);
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  const randomIndex = arr => {
    return (arr = Math.floor(Math.random() * arr.length));
  };

  return (div.innerHTML =
    who[randomIndex(who)] +
    " " +
    action[randomIndex(action)] +
    " " +
    what[randomIndex(what)] +
    " " +
    when[randomIndex(when)]);
};
