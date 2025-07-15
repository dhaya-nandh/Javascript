const API_KEY = '69605e5df74242ec987b887fcf9e0625';  
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('search');
const recipeContainer = document.getElementById('recipe-container');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchRecipes(query);
    }
});

async function fetchRecipes(query) {
    recipeContainer.innerHTML = ' ';
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=6&apiKey=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayRecipes(data.results);
    } catch (error) {
        console.error('Error fetching recipes:',error);
        recipeContainer.innerHTML = '<p class="error">Failed to load recipes. Please try again.</p>';
    }
}

function displayRecipes(recipes) {
    recipes.forEach(recipe => {
        const recipeEl = document.createElement('div');
        recipeEl.classList.add('recipe');
        recipeEl.innerHTML = `
            <img src="https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg" alt="${recipe.title}">
            <h3>${recipe.title}</h3> `;
        recipeContainer.appendChild(recipeEl);
    });
}
