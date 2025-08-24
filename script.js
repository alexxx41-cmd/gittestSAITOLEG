// создаем новую кнопку
const newBtn = document.createElement("button");
newBtn.textContent = "JS-кнопка";

//добавляем ее в страницу (в конец боди)
setTimeout(() => {
  status.textContent= "";
  document.body.appendChild(newBtn);
}, 3000);

// вешаем действие 
newBtn.addEventListener("click", () => {
  alert("Я создан помощью JavaSript!");
});

// находим статус который добавил в штмл
const status = document.getElementById("status");

//  сразу при старте пишем загрузка ага 
status.textContent = "заебал погоди.."