import { getCocktails } from '../apis/cocktails';

export async function homepageLoader({ params }) {
  const cocktails = getCocktails();
  return { cocktails };
}
