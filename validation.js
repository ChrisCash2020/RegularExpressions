// validation script here
// const reg = /[.]{5,12}/g;
// const email = / \w+[@]\w[.]/g
// const pass = / [a-z]{8,12}/
const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-zA-Z0-9]{5,12}$/,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([\da-z-\.]+)@([\da-z-\.]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

//links to a name attrubute with telephone:
//must match the name value in the input tag

const inputs = document.querySelectorAll('input');

function validate(field, regex) {
  // console.log(regex.test(field.value));
  if (regex.test(field.value)) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
}
//created a conditon that tests the inputs field and the regex value linked to each input

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    // console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

//is a function that runs for each input and applies a event tracker for keystrokes, the function then has a nested function that is
// is used to link conditional functional so that it runs a class name for each input regex test
