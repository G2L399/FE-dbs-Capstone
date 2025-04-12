import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import Layout from './layout';
const NotFound = React.lazy(() => import('./not-found'));

const pages = import.meta.glob('./**/page.{tsx,jsx,js,ts}');
const getRoutePath = (filePath) => {
  const path = filePath
    .replace('/page.tsx', '')
    .replace('/page.jsx', '')
    .replace('/page.js', '')
    .replace('/page.ts', '')
    .replace('./', '/')
    .replace('.', '/');
  return path;
};

const router = (route) => {
  const newroute = route.map((item) => {
    const NewElement = React.lazy(() => Promise.resolve(item.element()));
    return {
      path: item.path,
      element: (
        <Layout>
          <main className='grow'>
            <NewElement />
          </main>
        </Layout>
      )
    };
  });
  newroute.push({
    path: '*', // Matches any unmatched route
    element: (
      <Layout>
        <main className='grow'>
          <NotFound />
        </main>
      </Layout>
    )
  });
  return createBrowserRouter(
    createRoutesFromElements(
      newroute.map((item, index) => {
        return <Route key={index} path={item.path} element={item.element} />;
      })
    )
  );
};

function App() {
  const routes = Object.keys(pages).map((key) => {
    return {
      path: getRoutePath(key),
      element: pages[key]
    };
  });

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router(routes)} />
    </React.Suspense>
  );
}

export default App;
