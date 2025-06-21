const searchInput = document.getElementById("searchInput");
const perfumeList = document.getElementById("perfumeList");
const items = perfumeList.getElementsByTagName("li");

searchInput.addEventListener("keydown", function () {
  const filter = searchInput.value.toLowerCase();

  for (let i = 0; i < items.length; i++) {
    let text = items[i].textContent || items[i].innerText;
    items[i].style.display = text.toLowerCase().includes(filter) ? "" : "none";
  }
});
