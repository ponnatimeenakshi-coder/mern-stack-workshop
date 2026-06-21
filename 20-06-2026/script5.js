let products = document.getElementById("products");

fetch("https://dummyjson.com/products/search?q=phone")
.then(function(response){
    return response.json();
})
.then(function(data){

    data.products.forEach(function(item){

        let col = document.createElement("div");
        col.className = "col-md-4";

        col.innerHTML =
        '<div class="card">' +
            '<img src="' + item.thumbnail + '" class="card-img-top">' +
            '<div class="card-body">' +
                '<h5 class="card-title">' + item.title + '</h5>' +
                '<p class="card-text">' + item.description + '</p>' +
                '<p><b>Price : $' + item.price + '</b></p>' +
                '<button class="btn btn-primary">Buy Now</button>' +
            '</div>' +
        '</div>';

        products.appendChild(col);

    });

})
.catch(function(error){
    console.log(error);
});