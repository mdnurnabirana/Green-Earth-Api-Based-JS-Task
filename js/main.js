const categoryCont = document.getElementById('category-sidebar');
const cardCont = document.getElementById('card-container-box');

// Asynchronous function to load categories
const loadCategories = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/categories');
        const data = await res.json();

        const categories = data.categories;

        categories.forEach(cat => {
            categoryCont.innerHTML += `
                <p id=${cat.id} class="font-medium mt-1 p-2 cursor-pointer">${cat.category_name}</p>
            `;
        });
        categoryClick();
    }
    catch (error) {
        console.log(error);
    }
}

// Load all tress
const loadAllPlants = async () => {
    try {
        showLoader();
        cardCont.innerHTML = ""; 
        const res = await fetch('https://openapi.programming-hero.com/api/plants');
        const data = await res.json();

        const plants = data.plants;
        cardCont.innerHTML = "";
        
        plants.forEach(plant => {
            cardCont.innerHTML += `
                <div class="p-4 bg-white rounded-lg">
                    <img class="rounded-lg w-full h-40 overflow-hidden" src="${plant.image}" alt="card image 1">
                    <h3 class="font-semibold text-[#1F2937] mt-3" onclick='openModal({name: "${plant.name}", image: "${plant.image}", description: "${plant.description}", category: "${plant.category}", price: ${plant.price}})'>${plant.name}</h3>
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
        hideLoader();
    }
    catch (error) {
        console.log(error);
    }
}

// Load by Categories
const loadPlantByCategories =  async (id) => {
    try {
        showLoader();
        if (id === "0") {
            loadAllPlants();
            return;
        }

        const res = await fetch(`https://openapi.programming-hero.com/api/category/${id}`);
        const data = await res.json();

        const plants = data.plants;
        cardCont.innerHTML = "";

        plants.forEach(plant => {
            cardCont.innerHTML += `
                <div class="p-4 bg-white rounded-lg">
                    <div class="w-full h-40 overflow-hidden rounded-lg">
                        <img class="w-full h-full object-cover" src="${plant.image}" alt="${plant.name}">
                    </div>
                    <h3 class="font-semibold text-[#1F2937] mt-3" onclick='openModal({name: "${plant.name}", image: "${plant.image}", description: "${plant.description}", category: "${plant.category}", price: ${plant.price}})'>${plant.name}</h3>
                    <p class="text-sm mt-2 line-clamp-3">${plant.description}</p>
                    <div class="flex justify-between items-center mt-3">
                        <a href="#" class="px-3 py-2 bg-[#DCFCE7] font-medium text-sm rounded-3xl">${plant.category}</a>
                        <p class="font-bold">$ <span>${plant.price}</span></p>
                    </div>
                    <button class="rounded-3xl bg-[#15803D] text-white mt-4 w-full py-2 text-sm">Add to Cart</button>
                </div>
            `;
        });
        hideLoader();
    }
    catch (error) {
        console.log(error);
    }
}

// Category click event
categoryCont.addEventListener('click', (e) => {
    const target = e.target;
    const plantId = target.id;

    removeSelection();
    addSelection(target);

    loadPlantByCategories(plantId);

});

// Remove Category Selection
const removeSelection = () => {
    categoryCont.querySelectorAll("p").forEach(p => {
        p.classList.remove("bg-[#15803D]", "text-white", "rounded-lg");
    });
}

// Select the category
const addSelection = (target) => {
    target.classList.add("bg-[#15803D]", "text-white", "rounded-lg");
}

// Show modal
const openModal = (plant) => {
    document.getElementById("modal-name").innerText = plant.name;
    document.getElementById("modal-image").src = plant.image;
    document.getElementById("modal-description").innerText = plant.description;
    document.getElementById("modal-price").innerText = plant.price;
    document.getElementById("modal-category").innerText = plant.category;

    const modal = document.getElementById('my_modal_1');
    modal.showModal();
}

// Loading animation
const loader = document.getElementById('loader');

const showLoader = () => loader.classList.remove('hidden');
const hideLoader = () => loader.classList.add('hidden');

loadCategories()
loadAllPlants()
