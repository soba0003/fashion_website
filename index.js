window.addEventListener("load", getData);

const categories = document.querySelector("#categories_flex");
let url = `https://kea-alt-del.dk/t7/api/categories/`;

function getData() {
  console.log("getData");
  fetch(url).then((response) => response.json().then((data) => showCategories(data)));
}

// kan også skrives sådan: fetch(url).then((response) => response.json()).then(showCategories);

function showCategories(data) {
  // map = gør man kan loope oplysningerne, så det bliver én lang streg af html når man bruger join
  // ?category=${} = sender en parameter + nøgle med til næste html side
  const markup = data
    .map(
      (element) =>
        `<li class="categories_box"><a href="productlist.html?category=${element.category}">${element.category}</a></li>`
    )
    .join("");

  categories.innerHTML = markup;
}
