// DOM Elements
const recipeGrid = document.querySelector('.recipe-grid');
const modal = document.getElementById('recipeModal');
const closeBtn = document.querySelector('.close');
const recipeDetails = document.getElementById('recipeDetails');
const searchInput = document.getElementById('searchInput');

// Get favorites from localStorage
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let selectedCategory = 'All';
let searchTerm = '';


// Create recipe cards
function createRecipeCards() {
    displayFilteredRecipes(recipes);
    recipeGrid.innerHTML = recipes.map(recipe => `
        <div class="recipe-card" onclick="showRecipe(${recipe.id})">
            <img src="${recipe.imageUrl}" alt="${recipe.title}">
            <div class="recipe-card-content">
                <h2>${recipe.title}</h2>
                <p>${recipe.description}</p>
                <div class="recipe-info">
                    <span>🕒 ${recipe.cookingTime} mins</span>
                    <span>👥 ${recipe.servings} servings</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Add search functionality
function applyFilters() {
    const filtered = recipes.filter(recipe => {
        const matchesSearch = `${recipe.title.toLowerCase()} ${recipe.description.toLowerCase()}`.includes(searchTerm.toLowerCase());

        const recipeCategories = Array.isArray(recipe.category) ? recipe.category : [recipe.category];
        const matchesCategory = selectedCategory === 'All' || recipeCategories.includes(selectedCategory);

        return matchesSearch && matchesCategory;
    });

    displayFilteredRecipes(filtered);
}



function displayFilteredRecipes(filteredRecipes) {
    recipeGrid.innerHTML = filteredRecipes.map(recipe => `
        <div class="recipe-card" onclick="showRecipe(${recipe.id})">
            ${favorites.includes(recipe.id) ? '<div class="favorite-indicator">❤️</div>' : ''}
            <img src="${recipe.imageUrl}" alt="${recipe.title}">
            <div class="recipe-card-content">
                <h2>${recipe.title}</h2>
                <p>${recipe.description}</p>
                <div class="recipe-info">
                    <span>🕒 ${recipe.cookingTime} mins</span>
                    <span>👥 ${recipe.servings} servings</span>
                </div>
            </div>
        </div>
    `).join('');

    if (filteredRecipes.length === 0) {
        recipeGrid.innerHTML = `
            <div class="no-results">
                <p>No recipes found for "${searchInput.value}"</p>
                <p>Try searching for something else...</p>
            </div>
        `;
    }
}


// Add event listener for search input
searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value.trim();
    applyFilters();
});




const categoryButtons = document.querySelectorAll('.category-btn');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedCategory = button.getAttribute('data-category');

        // Update button styles
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        applyFilters();
    });
});




// Show recipe details
function showRecipe(id) {
    const recipe = recipes.find(r => r.id === id);
    const isFavorite = favorites.includes(id);
    
    recipeDetails.innerHTML = `
        <img src="${recipe.imageUrl}" alt="${recipe.title}">
        <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${id})">
            ${isFavorite ? '❤️' : '🤍'}
        </button>
        <h2>${recipe.title}</h2>
        <p>${recipe.description}</p>
        <div class="recipe-info">
            <span>🕒 ${recipe.cookingTime} minutes</span>
            <span>👥 ${recipe.servings} servings</span>
        </div>
        <h3>Ingredients</h3>
        <ul class="ingredients-list">
            ${recipe.ingredients.map(ing => 
                `<li><strong>${ing.amount}</strong> ${ing.item}</li>`
            ).join('')}
        </ul>
        <h3>Instructions</h3>
        <ol class="instructions-list">
            ${recipe.instructions.map(step => 
                `<li>${step}</li>`
            ).join('')}
        </ol>
    `;
    
    modal.style.display = 'block';
}

// Toggle favorite
function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index === -1) {
        favorites.push(id);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    showRecipe(id); // Refresh the recipe display
}

// Close modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Initialize the page
createRecipeCards();
