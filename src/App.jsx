import { 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} 
from "react-router-dom"

import Home from "./pages/home"
import Create from "./pages/create"
import RootLayout from "./layouts/rootLayout"
import BlogDetails from "./pages/blogDetails"
  

const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}/>
      <Route path="create" element={<Create />}/>
      <Route path=":id" element={<BlogDetails />}/>
    </Route>
  )
) 


function App() {
  
  return (
    <div className="App wrapper">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
