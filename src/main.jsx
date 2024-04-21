import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



function About() {
  return (
    <>
      <h2>About</h2>
      <p>Lorem ipsum...</p>
    </>
  );
}

function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <p>Lorem ipsum...</p>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ]
  },
  {
    basename: "/my-app"
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);