

function Hero(name) {
    if (typeof Hero.instance === "object") {
        return Hero.instance;
    }
    this.name = name;
    Hero.instance = this;
    return this;
};

var hero = new Hero("Prashanth");

var hero2 = new Hero("Hanuman");

console.log(hero2.name);