import { redirect } from 'react-router-dom';
import { isLoggedin } from '../apis/auth';
import { getRecipes } from '../apis/recipes';

export async function profileLoader({ params, request }) {
  if (await isLoggedin()) {
    const recipes = await getRecipes();
    return recipes;
  } else {
    return redirect('/');
  }
}
