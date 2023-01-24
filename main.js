const submit = document.querySelector("#submit");
const userInput = document.querySelector("#name");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(v8n().empty().test(userInput.value));
  console.log(v8n().minLength(2).test([userInput.value]));
});
