

function Pizza(price) {
    this.price = price || 10;
};

Pizza.prototype.getPrice = function() {
    return this.price;
}

function ExtraCheese(pizza) {
    var prevPrice = pizza.price;
    pizza.price = prevPrice + 1;
};

var myPizza = new Pizza(10);

ExtraCheese(myPizza);
