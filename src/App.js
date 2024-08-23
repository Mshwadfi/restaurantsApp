import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/Error';
import ResMenu from './components/ResMenu';
import AppStore from './utils/AppStore';
import './index.css';

const About = lazy(() => import('./components/About'));
const Body = lazy(() => import('./components/Body'));

const App = () => {
  const [userName, setUserName] = useState(null);  
  console.log(userName)
  useEffect(() => {
    const data = {
      name: 'Muhammad'
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={AppStore}>
      <div className="flex flex-col min-h-screen ">
        <Header />
        <div className='flex-grow'>
          <Outlet />
        </div>  
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Suspense fallback={"Loading..."}><Body /></Suspense> },
      { path: '/about', element: <Suspense fallback={"Loading..."}><About /></Suspense> },
      { path: '/contact', element: <Contact /> },
      { path: '/cart', element: <Cart /> },
      { path: '/restaurants/:resId', element: <ResMenu /> },
    ],
    errorElement: <Error />,
  }
]);

// Export the router provider for usage
const RouterApp = () => (
  <RouterProvider router={appRouter} />
);

export default RouterApp;
