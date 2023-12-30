import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Router/Routes'
import Context from './context/context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={route}></RouterProvider>
    </Context>
  </React.StrictMode>,
)
