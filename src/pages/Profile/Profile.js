import React, { Suspense } from 'react';
import {
  NavLink,
  Outlet,
  useParams,
  useSearchParams,
  useOutletContext,
  useLoaderData,
} from 'react-router-dom';

export default function Profile() {
  const { id } = useParams();
  const [queryParams, setQueryParams] = useSearchParams();
  const user = useOutletContext();
  const recipes = useLoaderData();

  return (
    <>
      <ul className="d-flex p-20">
        <li>
          <NavLink end to="">
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink to="data">Data</NavLink>
        </li>
        <li>
          <NavLink to="form">Form</NavLink>
        </li>
      </ul>
      <div className="p-20">
        <h2 className="mb-20">Profile</h2>
        <ul>
          {recipes && recipes.map((r) => <li key={r._id}>{r.title}</li>)}{' '}
        </ul>
        <Suspense fallback={<small>Chargement</small>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
