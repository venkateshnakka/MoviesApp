import React from 'react'
import ReactDOM from 'react-dom'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Home from './components/Home'
import Error from './components/Error'
import Popular from './components/Popular'
import Header from './components/Header'

const AppLayout = () => (
  <div>
    <Header />
    <Outlet />
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
