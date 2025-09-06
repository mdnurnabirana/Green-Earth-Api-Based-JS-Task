// Asynchronous function to load categories
const loadCategories = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/categories');
        const data = await res.json();

        const categories = data.categories;
        const categoryCont = document.getElementById('category-sidebar');
        categories.forEach(cat => {
            categoryCont.innerHTML += `
                <p class="font-medium mt-1 p-1">${cat.category_name}</p>
            `;
        });
    }
    catch (error) {
        console.log(error);
    }
}

loadCategories()