import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from './layouts/Layout.tsx'
import { Home } from './pages/Home.tsx'
import { Read } from './pages/Read.tsx'
import { Upload } from './pages/Upload.tsx'

import './styles/global.css'
import './styles/variables.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/read',
        element: <Read />
      },
      {
        path: '/upload',
        element: <Upload />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
