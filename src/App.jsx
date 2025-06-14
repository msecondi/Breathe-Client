import "./styles/styles.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout/Layout.jsx"
import Home from "./pages/Home/Home.jsx"
import FireFeed from "./pages/FireFeed/FireFeed.jsx"
import NotFound from "./pages/NotFound/NotFound.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="/release" element={<FireFeed />}/>
            <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
