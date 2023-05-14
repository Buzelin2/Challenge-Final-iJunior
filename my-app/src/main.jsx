import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Artists from './routes/Artists'
import ErrorPage from './routes/ErrorPage'
import Home from './routes/Home'
import Login from './routes/Login'
import Cadastro from './routes/Cadastro'
import InfoArtista from './routes/InfoArtista'
import Account from './routes/Account'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/artists", element: <Artists /> },
      { path: "/", element: <Login /> },
      { path: "/cadastro", element: <Cadastro /> },
      { path: "/conta", element: <Account /> },
      {path: "/infoartista", element: <InfoArtista />}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)