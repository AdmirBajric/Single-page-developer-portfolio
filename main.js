const submit = document.querySelector("#submit");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const err = document.querySelector(".error-name");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  test(name.value) ? error(name) : success(name);
  test(message.value) ? error(message) : success(message);
});

const test = (value) => {
  return v8n().empty().test(value);
};

const error = (value) => {
  console.log(value.name);
  const err = document.querySelector(`.error-${value.name}`);
  value.style.borderBottom = `0.1rem solid var(--red)`;
  err.style.opacity = 1;
};

const success = (value) => {
  const err = document.querySelector(`.error-${value.name}`);
  value.style.borderBottom = `0.1rem solid var(--neonGreen)`;
  err.style.opacity = 0;
};
