let products= [
    {
        "name":"Clothing",
        "price": 9200,
        "stock": 11
    },
    {
        "name":"Bags",
        "price": 6500,
        "stock": 11
    },
    {
        "name":"Shoes",
        "price": 11000,
        "stock": 11
    },
    {
        "name":"Jewellery",
        "price":56000,
        "stock": 11
    },
    {
        "name":"Accesories",
        "price":7400,
        "stock": 11
    },
    {
        "name":"Sunglasses",
        "price":3800,
        "stock": 11
    },
]

for (i = 0; i <=products.length; i++){
    document.write(`
    <div>
        <h1> ${products[i].name} </h1>
        <h2> ${products[i].price}</h2>
        <h3> ${products[i].stock}</h3>
    </div>
    `)
    document.write(`
        <h3> Total:${calculateTotal(products[0].price, products[1].price, products[2].price, products[3].price, products[4].price, products[5].price)}</h3>
    `)
} 

function calculateTotal (a, b, c, d, e, f){
    return a + b + c + d + e + f
}


console.log (calculate(products[0].price, products[1].price))
