document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");

    if (searchBar) {
        searchBar.addEventListener("keyup", function () {
            let input = searchBar.value.toLowerCase();
            let products = document.querySelectorAll(".product");

            products.forEach(product => {
                let title = product.querySelector(".product-title").innerText.toLowerCase();
                let description = product.querySelector(".product-description").innerText.toLowerCase();

                if (title.includes(input) || description.includes(input)) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    }
});