import { Routes, Route } from "react-router-dom"
import Landing from "./Components/Landing"
import Services from "./Components/Services"
import Contact from "./Components/Contact"
function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default App
