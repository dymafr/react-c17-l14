import { useLoaderData, Await } from 'react-router';
import { Suspense, use } from 'react';

function ListCocktails({ cocktailsPromise }) {
  const cocktails = use(cocktailsPromise); // dé-suspends la promesse
  return (
    <ul>
      {cocktails && cocktails.map(({ _id, name }) => <li key={_id}>{name}</li>)}
    </ul>
  );
}

function Homepage() {
  const { cocktails } = useLoaderData();

  return (
    <>
      <h2>Homepage</h2>
      <Suspense fallback={<small>chargement...</small>}>
        <Await resolve={cocktails}>
          <ListCocktails cocktailsPromise={cocktails} />
        </Await>
      </Suspense>
    </>
  );
}

export default Homepage;
