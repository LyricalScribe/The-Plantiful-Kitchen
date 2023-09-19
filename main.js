const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.searcg-result');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_ID = 'ef472291';
const APP_key = 'd68c9d526fcf0f80f9203896de162645';
const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input'), value;
    fetchAPI();
});

async function fetchAPI(){
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
}
function generateHTML(result){
    container.classList.remove('initial');
    let generatedHTML = '';
    results.map(result => {
        generateHTML +=
        '
        </div class="item">
                <img src="${result.recipe.image}" atl="">
                <div class="flex-container">
                <h1 class="title">${result.recipe.label}</h1>
                <a class="view-button" href="${result.recipe.url}" target="_blank">View Recipe</a>
            </div>
            <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
            <p class="item-data">Diet label: ${result.recipe.dietLabels > 0 ? result.recipe.dietLabels : 'No Data Found' }</p>
            <p class="item-data">Health label: ${result.recipe.healthLabels}</p>
        </div>
        '
    })
    searchResultDiv.innerHTML = generatedHTML;
}