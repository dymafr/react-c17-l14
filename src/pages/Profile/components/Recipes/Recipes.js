import { useAsyncValue } from 'react-router-dom';

export default function Recipes() {
  const recipes = useAsyncValue();

  return (
    <ul>
      {recipes.map((r) => (
        <li key={r._id}>{r.title}</li>
      ))}
    </ul>
  );
}
