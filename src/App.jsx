
// import './App.css'

import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./page/Home"
import RecipeCard from "./components/RecipeCard"
import NotFound from "./page/NotFound"
import RecipeDetail from "./page/RecipeDetail"


function App() {


  return (
    <div className="min-h-screen bg-background text-text font-sans antialiased">
       <Navbar/>
   <Routes>
    <Route path="/" element= {<Home/>} />
    <Route path="/recipe/:id" element= {<RecipeDetail/>} />
    <Route path="*" element= {<NotFound/>} />
    
   </Routes >

  </div >

  
 
  

  )
}

export default App
