import { redirect, defer } from 'react-router-dom';
import { isLoggedin } from '../apis/auth';
import { getRecipes } from '../apis/recipes';

export async function profileLoader({ params, request }) {
  if (await isLoggedin()) {
    const recipes = await getRecipes();
    console.log(recipes);
    return defer({
      recipes: new Promise((res) => setTimeout(() => res(recipes), 3000)),
    });
  } else {
    return redirect('/');
  }
}
