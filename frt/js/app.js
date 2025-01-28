async function fetchRecipes() {
  const search = document.getElementById("searchBar").value;
  const cuisine = document.getElementById("filterCuisine").value;
  const difficulty = document.getElementById("filterDifficulty").value;

  const params = new URLSearchParams({ search, cuisine, difficulty });

  const response = await fetch(`http://localhost:5000/recipes?${params}`);
  const recipes = await response.json();

  const container = document.getElementById("recipesContainer");
  container.innerHTML = "";
  
  card.innerHTML = `
  <h3>${recipe.name}</h3>
  <p>Cuisine: ${recipe.cuisine}</p>
  <p>Difficulty: ${recipe.difficulty}</p>
  <img src="http://localhost:5000${recipe.imageUrl}" alt="${recipe.name}" />
  <a href="recipe.html?id=${recipe.id}">View Details</a>
`;


  recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <h3>${recipe.name}</h3>
      <p>Cuisine: ${recipe.cuisine}</p>
      <p>Difficulty: ${recipe.difficulty}</p>
      <img src="http://localhost:5000${recipe.imageUrl}" alt="${recipe.name}" />
    `;
    container.appendChild(card);
  });
}

fetchRecipes();
