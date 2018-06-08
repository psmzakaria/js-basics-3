// 1. Create a new array `shoppingList` with a few string elements

const shoppingList = ["Fruits","Cakes","Meat","Dairy"];

// 2. Using `forEach`, log every element of the `shoppingList` array to the console

shoppingList.forEach(function logger(thing){console.log(thing);})

// 3. For each element in the `shoppingList` array, create an `<li>` node and
//    append it to the `<ul>` element on the page (use `document.createElement`
//    and `.appendChild`)



shoppingList.forEach(function (element){
    
    const list = document.createElement("li")
    document.querySelector("ul").appendChild(list)
    
    li.textContent=element
    console.log(list)
    
})

// shoppingList.forEach(console.log(logger(thing)))






// 4. Create a new array `numbers` with a few numeric elements

const number= [1,2,3,4,5]



// 5. Using `map` on the `numbers` array, create a new array called
//    `squareNumbers` where each element is the square of the corresponding
//    element in the `numbers` array

function square(n)
{
return n^2;
}
const squareNumber=number.map(square)
console.log(squareNumber)

