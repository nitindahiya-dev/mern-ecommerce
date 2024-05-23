import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Header from "./components/Header"
import Footer from "./components/Footer"
import TopHeader from "./components/TopHeader"

export default function App() {
  return (
    <BrowserRouter>
    <TopHeader />
    <hr></hr>
    <Header />
    <Routes>
      <Route path="/" element={<Home /> }/>
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<Home />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}