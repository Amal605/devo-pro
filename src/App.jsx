import './App.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Layout from './Components/Layout'
import Home from './Components/home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services';
import Counte from './Components/Counte/Counte'
import Work from './Components/work/Work'
function App() {
  let routes = createBrowserRouter([
    {path:'/',element:<Layout></Layout>,children:[
      {index:true,element:<Home></Home>},
      {path:'/home',element:<Home></Home>},
      {path:'/about',element:<About></About>},
      {path:'/services',element:<Services></Services>},
      {path:'/counte',element:<Counte></Counte>},
      {path:'/work',element:<Work></Work>},
    ]}
  ])

  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
