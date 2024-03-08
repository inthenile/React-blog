import Navbar from "./layouts/Navbar"
import Home from "./pages/Home"; 
import Footer from "./layouts/Footer";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import NewBlog from "./pages/NewBlog";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <div className="content">
            <Routes>
              <Route index element={<Home/>} />
              <Route path="/create" element={<NewBlog/>}/>
              <Route path="blog/:blogId" element={<Blog />}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes> 
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App; 
