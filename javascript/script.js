// close the menu when checked:

document.querySelectorAll("#menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("#menuCheckbox").checked = false;
  });
});
