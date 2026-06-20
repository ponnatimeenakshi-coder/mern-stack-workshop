async function fetchProducts() {

    try {

        const response =
        await fetch("https://dummyjson.com/products");

        const data =
        await response.json();

        const requiredProducts = [

            "Cucumber",
            "Eggs",
            "Knoll Saarinen Executive Conference Chair",
            "Red Nail Polish"

        ];

        const filteredProducts =
        data.products.filter(product =>
            requiredProducts.includes(product.title)
        );

        const container =
        document.getElementById("productContainer");

        filteredProducts.forEach(product => {

            const col =
            document.createElement("div");

            col.className = "col-md-6";

            col.innerHTML = `
                <div class="card product-card h-100">

                    <img
                    src="${product.thumbnail}"
                    class="card-img-top"
                    alt="${product.title}">

                    <div class="card-body">

                        <h5 class="card-title">
                            ${product.title}
                        </h5>

                        <p class="card-text">
                            ${product.description.substring(0,70)}...
                        </p>

                        <p class="price">
                            $${product.price}
                        </p>

                    </div>

                </div>
            `;

            container.appendChild(col);

        });

    }

    catch(error){

        console.error(error);

    }

}

fetchProducts();