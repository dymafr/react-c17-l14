import React, { Suspense } from 'react';
import { NavLink, Outlet, useLoaderData, Await } from 'react-router-dom';
import Recipes from './components/Recipes/Recipes';

export default function Profile() {
  const { recipes } = useLoaderData();

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
        <Suspense fallback={<small>Chargement</small>}>
          <Await resolve={recipes} errorElement={<h3>Error fetch</h3>}>
            <Recipes />
          </Await>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
