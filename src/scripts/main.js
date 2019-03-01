const restaurant = {
    name: "Bob's Burgers",
    order: [],
    placeOrder: function (meal) {
        this.order.push(meal)
        console.table(meal)
    }
    

}

const chickenComboMeal = {
    sandwichType: "Chicken",
    fries: true,
    drinkSize: "Medium"
}

const phillyComboMeal = {
    sandwichType: "Steak",
    fries: false,
    drinkSize: "Large"
}

const burgerComboMeal = {
    sandwichType: "Burger",
    fries: true,
    drinkSize: "Medium"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(burgerComboMeal)

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()
console.table(restaurant.order)