// DOM Elements
const favoriteRecipes = document.getElementById('favoriteRecipes');
const modal = document.getElementById('recipeModal');
const closeBtn = document.querySelector('.close');
const recipeDetails = document.getElementById('recipeDetails');

// Get favorites from localStorage
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

// Create favorite recipe cards
function createFavoriteRecipeCards() {
    if (favorites.length === 0) {
        favoriteRecipes.innerHTML = '<p class="no-favorites">No favorite recipes yet. Go back to the home page and add some!</p>';
        return;
    }

    favoriteRecipes.innerHTML = recipes
        .filter(recipe => favorites.includes(recipe.id))
        .map(recipe => `
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
    createFavoriteRecipeCards(); // Refresh the favorites display
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
createFavoriteRecipeCards();
