async function fetchProducts() {

    try {

        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        const container =
            document.getElementById("product-container");

        data.products.forEach(product => {

            const card = document.createElement("div");

            card.className = "col-md-4 col-lg-3";

            card.innerHTML = `
            
                <div class="card h-100 shadow">

                    <img src="${product.thumbnail}"
                         class="card-img-top"
                         alt="${product.title}">

                    <div class="card-body">

                        <h5 class="card-title">
                            ${product.title}
                        </h5>

                        <p class="text-success fw-bold">
                            $${product.price}
                        </p>

                        <p class="card-text">
                            ${product.description.substring(0,80)}...
                        </p>

                    </div>

                </div>

            `;

            container.appendChild(card);

        });

    }

    catch(error) {

        console.error(error);

    }

}

fetchProducts();