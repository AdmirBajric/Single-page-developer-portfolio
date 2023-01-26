const submit = document.querySelector("#submit");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const err = document.querySelector(".error-name");
const h1 = document.querySelector(".heading h1");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  test(name.value) ? error(name) : success(name);
  test(message.value) ? error(message) : success(message);
  testEmail(email.value) ? success(email) : error(email);

  if (!test(name.value) && !test(message.value) && testEmail(email.value)) {
    alert(
      "Thank you for contacting me. I will get back to you as soon as possible."
    );
    clearInput();
    done([name, email, message]);
  }
});

const test = (value) => {
  return v8n().empty().test(value);
};

const error = (value) => {
  const err = document.querySelector(`.error-${value.name}`);
  value.style.borderBottom = `0.1rem solid var(--red)`;
  err.style.opacity = 1;
};

const success = (value) => {
  const err = document.querySelector(`.error-${value.name}`);
  value.style.borderBottom = `0.1rem solid var(--neonGreen)`;
  err.style.opacity = 0;
};

const testEmail = (value) => {
  return v8n()
    .pattern(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    .test(value);
};

const clearInput = () => {
  name.value = "";
  email.value = "";
  message.value = "";
};

const done = (value) => {
  value.forEach((v) => {
    v.style.borderBottom = `0.1rem solid var(--white)`;
  });
};

name.addEventListener("input", (e) => {
  if (name.value.length > 0) {
    success(name);
  } else {
    error(name);
  }
});

message.addEventListener("input", (e) => {
  if (message.value.length > 0) {
    success(message);
  } else {
    error(message);
  }
});

email.addEventListener("input", (e) => {
  testEmail(email.value) ? success(email) : error(email);
});
