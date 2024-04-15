import React from 'react'
import ReactDOM from 'react-dom'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Home from './components/Home'
import Error from './components/Error'
import Popular from './components/Popular'
import Header from './components/Header'
import Footer from './components/Footer'
import MovieDetails from './components/MovieDetails'
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
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/popular',
        element: <Popular />,
      },
      {
        path: '/popular/:id',
        element: <MovieDetails />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
