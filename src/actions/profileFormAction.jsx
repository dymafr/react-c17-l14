import { redirect } from 'react-router';
import { createCocktail } from '../apis/cocktails';

export async function profileFormAction({ request, params }) {
  console.log(request);
  const data = await request.formData();
  //   const response = await createCocktail(data);
  console.log(Object.fromEntries(data));
  //   if (response.ok) {
  return redirect('/profile');
  //   } else {
  // return { fromAction: true };
  //   }
}
