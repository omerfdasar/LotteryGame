let inputbox = document.getElementById("input");
const button = document.getElementById("button");
let display = document.getElementById("display");

button.addEventListener("click", () => {
  let inputValue = inputbox.value;
  let lists = [];
  display.innerText = "";
  let numberOfLists = +inputValue;
  let listSize = 6;
  if (+inputValue > 9) {
    text = "You can not enter more than 8";
  }
  for (let i = 0; i < numberOfLists; i++) {
    let subList = [];

    for (let j = 0; j < listSize; j++) {
      subList.push(Math.trunc(Math.random() * 99 + 1));
    }
    let sortedList = subList.sort(function (a, b) {
      return a - b;
    });
    lists.push(sortedList);

    joker = Math.trunc(Math.random() * 99 + 1);
    if (!subList.includes(joker)) {
      subList.push(joker);
    }
    superstar = Math.trunc(Math.random() * 89 + 1);
    subList.push(superstar);
  }
  console.log(lists);

  for (let index = 0; index < lists.length; index++) {
    display.innerText += `${index + 1}) ` + lists[index].join("-");
    display.innerHTML += "<br>";
    console.log(lists[index]);
    console.log(index);
  }
});
