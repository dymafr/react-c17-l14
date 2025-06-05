import { redirect, defer } from 'react-router';
import { isLoggedin } from '../apis/auth';
import { getRecipes } from '../apis/recipes';

export async function profileLoader({ params, request }) {
  const recipes = await getRecipes();
  if (await isLoggedin()) {
    return defer({
      recipes: new Promise((res) => setTimeout(() => res(recipes), 3000)),
    });
  } else {
    return redirect('/');
  }
}
