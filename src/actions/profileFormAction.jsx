import { createRecipe } from '../apis/recipes';
import { redirect } from 'react-router';

export async function profileFormAction({ request, params }) {
  const data = await request.formData();
  const response = await createRecipe(data);
  if (response.ok) {
    return redirect('/');
  } else {
    return { error: response.message };
  }
}
