var sepettekiÜrünler = JSON.parse(localStorage.getItem("sepet-urunleri"));
var totalCartAmount = 0;

var setProductItems = function () {
    sepettekiÜrünler.forEach(function (product) {
        var productPrice = product.price.toFixed(2) * product.quantity;

        $(".product-list-cart").append(
            '<li class="product">' +
                '<a href="' + product.href + '">' +
                    '<img src="' + product.img + '">' +
                '</a>' +
                '<div class="product-container">' +
                    '<h3 class="product">' + product.name + '</h3>' +
                    '<p class="">Fiyat: ' + productPrice + '₺</p>' +
                '</div>' +
                '<div class="product-sub-container">' +
                    '<button class="quantity-button quantity-azalt-buton btn" id="' + product.id + '">-</button>' +
                    '<p class="product-quantity">' + product.quantity + '</p>' +
                    '<button class="quantity-button quantity-artır-buton btn" id="' + product.id + '">+</button>' +
                    '<a class="link-button btn" href="' + product.href + '">Linke Git</a>' +
                '</div>' +
            '</li>'
        );

        totalCartAmount += productPrice;
    });
};

var setTotalCartAmount = function () {
    $("#total").text(totalCartAmount.toFixed(2) + '₺');
};

var increaseQuantity = function () {
    $(".quantity-artır-buton").on("click", function (event) {
        var storageValue = JSON.parse(localStorage.getItem("sepet-urunleri")) || [];
        var clickedProductId = Number($(event.target).attr('id'));

        storageValue.some(function (product) {
            if (product.id === clickedProductId) {
                product.quantity++;

                return true;
            }
        });

        localStorage.setItem("sepet-urunleri", JSON.stringify(storageValue));

        location.reload();
      });
};

var decraseQuantity = function () {
    $(".quantity-azalt-buton").on("click", function (event) {
        var storageValue = JSON.parse(localStorage.getItem("sepet-urunleri")) || [];
        var clickedProductId = Number($(event.target).attr('id'));

        storageValue.some(function (product, index) {
            if (product.id === clickedProductId) {
                if (product.quantity > 1) {
                    product.quantity--;
                } else {
                    storageValue.splice(index,1);
                }

                return true;
            }
        });

        localStorage.setItem("sepet-urunleri", JSON.stringify(storageValue));

        location.reload();
      });
};

setTimeout(function () {
    setProductItems();
    setTotalCartAmount();
    increaseQuantity();
    decraseQuantity();
}, 500);