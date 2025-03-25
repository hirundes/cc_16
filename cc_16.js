//Task 2
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = response.json(); 
        // console.log(data); 
        return data
    })
    .then(data => {
        data.forEach(product => {
            console.log(product.fields.name);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

fetchProductsThen();


//Task 3
async function fetchProductsAsync() {
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const products = await response.json();
        displayProducts(products.slice(0,5)); 
        
    } catch (error) {
        handleError(error); 
    }
}

fetchProductsAsync(); 


//Task 4
function displayProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; 

    products.forEach(product => {
        const productDisplay = document.createElement("div");
        productDisplay.classList.add("product");

        productDisplay.innerHTML = `
            <h2>${product.fields.name}</h2>
            <p>Price: $${product.fields.price}</p>
            <img src="${product.fields.image[0].url}">
        `;

        container.appendChild(productDisplay);
    });
} 


//Task 5
function handleError(error) {
    console.error('There was a problem fetching products:', error);
}; 

//Task 6
fetchProductsThen();
fetchProductsAsync();