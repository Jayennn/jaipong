import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar.tsx";
import Information from "./pages/information.tsx";

const router = createBrowserRouter([
  {
    element: <NavigationBar/>,
    children: [
      {
        path: "/",
        element: <App/>
      },
      {
        path: "/information",
        element: <Information/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
