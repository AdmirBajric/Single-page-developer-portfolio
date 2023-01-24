const submit = document.querySelector("#submit");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(v8n().empty().test(nameInput.value));
  console.log(v8n().empty().test(emailInput.value));
  console.log(v8n().empty().test(messageInput.value));
});
