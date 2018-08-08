var sizes =  {
    personal: {name: "Personal", cost: 6},
    meduim: {name: "Meduim", cost: 10},
    large: {name: "Large", cost: 14},
    xLarge: {name: "XLarge", cost: 16}
};

var crusts = {
   plain: {name: "Plain Crust", cost: 0}, 
   garlicButter: {name: "Garlic Butter Crust", cost: 0},
   cheeseStuffed: {name: "Cheese Stuffed Crust", cost: 3},
   spicy: {name: "Spicy Crust", cost: 0},
   houseSpecial: {name: "House Special Crust", cost: 0}
}

var sauces = {
    marinara: {name: "Marinara sauce", cost: 0},
    white: {name: "White sauce", cost: 0},
    barbeque: {name: "Barbeque sauce", cost: 0},
    noSauce: {name: "No Sauce", cost: 0 }
}

var meats = {
    pepperoni: {name: "Pepperoni", cost: 1},
    sausage: {name: "Sausage", cost: 1},
    canadianBacon: {name: "Canadian Bacon", cost: 1},
    groundBeef: {name: "Ground Beef", cost: 1},
    anchovy: {name: "Anchovy", cost: 1},
    chicken: {name: "Chicken", cost: 1} 
}

var veggies = {
    tomatoes: {name: "Tomatoes", cost: 1},
    onions: {name: "Onions", cost: 1},
    olives: {name: "Olives", cost: 1},
    greenPeppers: {name: "Green Peppers", cost: 1},
    mushrooms: {name: "Mushrooms", cost: 1},
    pineapple: {name: "Pineapple", cost: 1},
    spinach: {name: "Spinach", cost: 1},
    jalapeno: {name: "Jalapeno", cost: 1}              
}

var cheeses = {
    regular: {name: "Regular cheese", cost: 0},
    noCheese: {name: "No cheese", cost: 0},
    extraCheese: {name:"Extra Cheese", cost: 3}
}

var total = 0;

function placeOrder(){
    // hide order form
    var orderForm = document.getElementById("orderForm");
    orderForm.style.display = "none";
    var receipt = document.getElementById("receipt");
    receipt.style.display = "";
    total = 0;
    getSize();
    getCrust();
    getSauce();
    getMeats();
    getVeggies();
    getCheese();
    var orderTotal = document.getElementById("orderTotal");
    orderTotal.innerHTML = total
};

function getSize() {
    var pSize = document.querySelector("input[name='pizzaSize']:checked").value;
    var size = document.getElementById("size");
    var sizePrice = document.getElementById("sizePrice");
    size.innerHTML = sizes[pSize].name;
    sizePrice.innerHTML = sizes[pSize].cost;
    total = total + sizes[pSize].cost;
}

function getCrust() {
    var pCrust = document.querySelector("input[name='pizzaCrust']:checked").value;
    var crust = document.getElementById("crust");
    var crustPrice = document.getElementById("crustPrice");
    crust.innerHTML = crusts[pCrust].name;
    crustPrice.innerHTML = crusts[pCrust].cost;
    total = total + crusts[pCrust].cost;

}

function getSauce() {
    var pSauce = document.querySelector("input[name='pizzaSauce']:checked").value;
    var sauce = document.getElementById("sauce");
    var saucePrice = document.getElementById("saucePrice");
    sauce.innerHTML = sauces[pSauce].name;
    saucePrice.innerHTML = sauces[pSauce].cost;
    total = total + sauces[pSauce].cost;
}

function getMeats() {
    var pMeats = document.querySelectorAll("input[name='meat']:checked");
    var meat = document.getElementById("meats");
    var meatPrice = document.getElementById("meatPrices");
    var meatToppings = [];
    for (i = 0; i < pMeats.length; i++){
        meatToppings.push (meats[pMeats[i].value].name);
    }
    var meatCost = 0;
    for (i = 0; i < pMeats.length; i++){
        meatCost =  meatCost + meats[pMeats[i].value].cost;
    }
    if(meatToppings.length == 0){
        meatToppings = "No Meat";
        meatCost = 1
    }
    meat.innerHTML = meatToppings;
    meatPrice.innerHTML = meatCost-1;
    total = total + (meatCost -1);
}

function getVeggies() {
    var pVeggies = document.querySelectorAll("input[name='veggie']:checked");
    var veg = document.getElementById("veggies");
    var vegPrice = document.getElementById("veggiePrices");
    var vegToppings = [];
    for (i = 0; i < pVeggies.length; i++){
        vegToppings.push (veggies[pVeggies[i].value].name);
    }
    var vegCost = 0;
    for (i = 0; i < pVeggies.length; i++){
        vegCost =  vegCost + veggies[pVeggies[i].value].cost;
    }
    if(vegToppings.length == 0){
        vegToppings = "No Veggies";
        vegCost = 1;
    }
    veg.innerHTML = vegToppings;
    vegPrice.innerHTML = vegCost -1;
    total = total + (vegCost - 1);
}

function getCheese() {
    var pCheese = document.querySelector("input[name='cheeseOption']:checked").value;
    var cheese = document.getElementById("cheese");
    var cheesePrice = document.getElementById("cheesePrice");
    cheese.innerHTML = cheeses[pCheese].name;
    cheesePrice.innerHTML = cheeses[pCheese].cost;
    total = total + cheeses[pCheese].cost;
}