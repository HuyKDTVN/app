const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
  btn.addEventListener("click", function () {
    const id = this.dataset.id;
    this.classList.add("active");
    navigator.clipboard.writeText(id);
  });
});