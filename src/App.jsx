import "./styles/styles.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path="/release" element={<FireFeed />}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
