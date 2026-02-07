document.querySelectorAll(".hover-box").forEach(box => {
  box.addEventListener("click", () => {
    box.textContent = "✓ Added";
    box.style.background = "green";
  });
});
