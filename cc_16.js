function fetchProductThen() {
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
            listItem.textContent = `${product.title} - $${product.price}`;
            product-container.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
