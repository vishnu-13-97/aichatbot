import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Chat from "./pages/Chat"
import NotFount from "./pages/NotFount"
import Footer from "./components/Footer"

function App() {
 


  return (
  <main>
    <Header/>

    <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/signup" element={<Signup/>}/>
   <Route path="/chats" element={<Chat/>}/>
   <Route path="*" element={<NotFount/>}/>
    </Routes>
 <Footer/>
  </main>
  )
}

export default App
