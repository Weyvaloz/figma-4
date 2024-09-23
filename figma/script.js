document.querySelectorAll(".dropdown-toggle").forEach(function (button) {
  button.addEventListener("click", function () {
    const dropdown = this.parentElement;
    dropdown.classList.toggle("open");
  });
});
function toggleImage(button) {
  const img = button.querySelector(".button-icon");
  if (img.src.endsWith("/Vector.png")) {
    img.src = "/Vector2.png"; // Замените на путь ко второму изображению
  } else {
    img.src = "/Vector.png"; // Замените на путь к первому изображению
  }
}
function nextStep() {
  document.getElementById("form-container-1").style.display = "none";
  document.getElementById("form-container-2").style.display = "block";
}
function back() {
  document.getElementById("form-container-1").style.display = "block";
  document.getElementById("form-container-2").style.display = "none";
}
function getQuote() {
  document.getElementById("form-container-1").style.display = "none";
  document.getElementById("form-container-3").style.display = "block";
}
function back2() {
  document.getElementById("form-container-1").style.display = "block";
  document.getElementById("form-container-3").style.display = "none";
}
function nextStep2() {
  document.getElementById("form-container-4").style.display = "block";

  document.getElementById("form-container-3").style.display = "none";
}
function back3() {
  document.getElementById("form-container-4").style.display = "none";
  document.getElementById("form-container-3").style.display = "block";
}
function quicknote_next() {
  document.getElementById("quicknote-1").style.display = "none";
  document.getElementById("quicknote-2").style.display = "block";
}
function quicknote_back() {
  document.getElementById("quicknote-1").style.display = "block";
  document.getElementById("quicknote-2").style.display = "none";
}
// Обработчик для кнопки
document.getElementById("validateBtn").addEventListener("click", function () {
  // Получаем все поля телефона
  const phoneInputs = document.querySelectorAll("#phone");
  const phoneErrors = document.querySelectorAll("#phone-error");
  const inputContainers = document.querySelectorAll(".custom"); // Добавлена точка для класса

  phoneInputs.forEach((phoneInput, index) => {
    const phoneError = phoneErrors[index]; // Соответствующее сообщение об ошибке
    const inputContainer = inputContainers[index]; // Соответствующий контейнер ввода

    // Проверяем, если поле пустое
    if (phoneInput.value.trim() === "") {
      phoneError.textContent = "Please fill out this field"; // Добавляем текст ошибки
      phoneError.style.display = "block"; // Показываем сообщение
      inputContainer.style.border = "2px solid rgba(204, 0, 24, 1)"; // Устанавливаем границу
    } else {
      phoneError.style.display = "none"; // Скрываем сообщение, если все ок
      // Здесь можно перейти на следующий шаг или выполнить другое действие
      console.log("Phone number is valid, proceed to the next step");
    }
  });
});
$(function () {
  $("#datepicker").datepicker();
});
document.addEventListener("DOMContentLoaded", function () {
  const ps = new PerfectScrollbar("#scrollbar");
});
