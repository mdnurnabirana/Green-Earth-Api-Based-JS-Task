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

// Load all tress
const loadPlants = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/plants');
        const data = await res.json();

        const plants = data.plants;
        const cardCont = document.getElementById('card-container-box');
        plants.forEach(plant => {
            cardCont.innerHTML += `
                <div class="p-4 bg-white rounded-lg">
                    <img class="rounded-lg w-full h-40 overflow-hidden" src="${plant.image}" alt="card image 1">
                    <h3 class="font-semibold text-[#1F2937] mt-3">${plant.name}</h3>
                    <p class="font-regular text-sm mt-2 line-clamp-3">${plant.description}</p>
                    <div class="flex justify-between items-center mt-3">
                        <a href="#" class="px-3 py-2 bg-[#DCFCE7] font-medium text-sm rounded-3xl">${plant.category}</a>
                        <p class="font-bold">$ <span>${plant.price}</span></p>
                    </div>
                    <div>
                        <button class="rounded-3xl bg-[#15803D] text-white mt-4 w-full py-2 text-sm">Add to Cart</button>
                    </div>
                </div>
            `;
        });
    }
    catch (error) {
        console.log(error);
    }
}

loadPlants()