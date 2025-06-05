export async function getCocktails() {
  // récupère la liste des cocktails via une API distante, avec un délai simulé de 4 secondes
  const cocktails = (
    await fetch('https://restapi.fr/api/acocktails?delay=4')
  ).json();
  return cocktails;
}

export async function createCocktail(cocktail) {
  // envoie un nouveau cocktail à l’API via POST
  const response = await fetch('https://restapi.fr/api/acocktails', {
    method: 'POST',
    headers: { contentType: 'application/json' },
    body: JSON.stringify(cocktail),
  });
  return response.json();
}
