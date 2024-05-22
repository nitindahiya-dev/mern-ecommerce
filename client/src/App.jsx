import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home /> }/>
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}