//Task 2
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
    })
    .then(products => {
        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.title}`;
            const container = document.getElementById("product-container");
            container.appendChild(listItem);
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
        const products = await response.json();
        displayProducts(products); 
        
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
            <img src="${product.fields.image[0].url}">
            <p>Price: $${product.fields.price}</p>
        `;

        container.appendChild(productDisplay);
    });
} 


//Task 5
function handleError(error) {
    console.error('There was a problem fetching products:', error);
}; 