window.addEventListener("load", getData);

const categories = document.querySelector("#categories_flex");
let url = `https://kea-alt-del.dk/t7/api/categories/`;

function getData() {
  console.log("getData");
  fetch(url).then((response) => response.json().then((data) => showCategories(data)));
}

function showCategories(data) {
  // map = gør man kan loope oplysningerne, så det bliver én lang streg af html når man bruger join
  // cat = her bare forkortelse for categories for ikke at blande dem sammen
  const markup = data
    .map((cat) => `<li class="categories_box"><a href="productlist.html">${cat.category}</a></li>`)
    .join("");

  categories.innerHTML = markup;
}
