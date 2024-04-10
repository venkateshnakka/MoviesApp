import React from 'react'
import ReactDOM from 'react-dom'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Home from './components/Home'
import Error from './components/Error'
import Popular from './components/Popular'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

const AppLayout = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
)

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/popular',
        element: <Popular />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
