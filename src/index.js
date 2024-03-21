import React from 'react'
import ReactDOM from 'react-dom'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
