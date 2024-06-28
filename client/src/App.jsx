import { BrowserRouter,Routes,Route } from "react-router-dom" 
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Header from "./components/Header"


const App = () => {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/sign-in" element={<Signin/>}></Route>
    <Route path="/sign-up" element={<Signup/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    <Route path="/about" element={<About/>}></Route>

   </Routes>
   </BrowserRouter>
  )
}

export default App