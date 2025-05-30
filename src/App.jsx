import "./styles/styles.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import FireFeed from "./pages/FireFeed/FireFeed.jsx"
import Layout from "./pages/Layout/Layout.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="/release" element={<FireFeed />}/>
            {/* <Route path="*" element={<NoPageFound />}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
