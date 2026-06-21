let productDiv = document.getElementById("product");

fetch("https://dummyjson.com/products/1")
.then(function(res){
    return res.json();
})
.then(function(product){

    productDiv.innerHTML =

    '<div class="card">' +

        '<img src="' + product.thumbnail + '" class="card-img-top">' +

        '<div class="card-body text-center">' +

            '<h3 class="card-title">' + product.title + '</h3>' +

            '<p class="card-text">' + product.description + '</p>' +

            '<button class="btn btn-cart">Add to Cart</button>' +

        '</div>' +

    '</div>';

})
.catch(function(error){
    console.log(error);
});