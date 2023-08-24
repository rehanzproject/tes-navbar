import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from "./Template";
import Post from "./Post";
import About from "./About";
import Follower from "./Follower";
import Other from "./Other";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
        <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/about" element={<About />} />
          <Route path="/follower" element={<Follower />} />
          <Route path="/post" element={<Post />} />
          <Route path="/other" element={<Other />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
