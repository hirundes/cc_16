//Task 2
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products') //fetch to get product data from link
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = response.json(); //logging product names to console
        return data
    })
    .then(data => {
        data.forEach(product => {
            console.log(product.fields.name);
        });
    })
    .catch(error => { //.catch() to log any errors
        console.error('There was a problem with the fetch operation:', error);
    });
}

//Task 3
async function fetchProductsAsync() { //uses async and await and try/catch to fetch product data from link
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const products = await response.json();
        displayProducts(products.slice(0,5)); //calling helper function and also loops through first 5 products
                                             
    } catch (error) { 
        handleError(error); //if error occurs it is passed here
    }
}

//Task 4
function displayProducts(products) {
    const container = document.getElementById("product-container"); //selection of product-container
    container.innerHTML = ""; 

    products.forEach(product => {
        const productDisplay = document.createElement("div");
        productDisplay.classList.add("product");

        //HTML elements created to show name, price, and image
        productDisplay.innerHTML = ` 
            <h2>${product.fields.name}</h2>
            <p>Price: $${product.fields.price}</p>
            <img src="${product.fields.image[0].url}">
        `;

        container.appendChild(productDisplay); //appends them to the container
    });
} 

//Task 5
function handleError(error) { //function handleError(error) which logs error message
    console.error('There was a problem fetching products:', error);
}; 

//Task 6
fetchProductsThen(); //calling both
fetchProductsAsync();