const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
  const name = prompt("How may I help you?");
  alert(`You want ${name}? That's the most idiotic thing I've heard!`);
  headingA.textContent = `Fuck you and your ${name}`;
};