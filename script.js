const checkboxes = document.querySelectorAll("input[type=checkbox]");
const progress = document.getElementById("progress");

function updateProgress() {
  const total = checkboxes.length;
  const checked = [...checkboxes].filter(c => c.checked).length;
  progress.innerText = `${checked} / ${total} steg klara`;
}

checkboxes.forEach(cb => {
  cb.addEventListener("change", updateProgress);
});

updateProgress();
