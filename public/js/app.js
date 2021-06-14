console.log("Cliente side javascript file is loaded"); // test
// selecting elements in html file
const weatherForm = document.querySelector("form");
const searchElement = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const locationInput = searchElement.value;

  messageOne.textContent = "Loading";
  messageTwo.textContent = "";

  fetch("http://localhost:3000/weather?address=" + locationInput).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error;
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
        }
      });
    }
  );
});
