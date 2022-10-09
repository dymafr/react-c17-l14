import { json } from 'react-router-dom';

export async function rootLoader() {
  const user = { name: 'Paul', age: 42 };
  return json(user);
}
