export async function rootLoader({ params, request }) {
  const user = { name: 'jean', age: 55 };
  return {
    user,
  };
}
