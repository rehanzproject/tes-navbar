import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from "./Template";
import Post from "./Post";
import About from "./About";
import Follower from "./Follower";
import Other from "./Other";
import Home from "./Home";
import Friend from "./Friend";
import Olahraga from "./Olahraga";
import Persinggahan from "./Persinggahan";
import Musik from "./Musik";
import Film from "./Film";
import Acara from "./Acara";
import Buku from "./Buku";
import Aplikasi from "./Aplikasi";
import Suka from "./Suka";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
        <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/about" element={<About />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/follower" element={<Follower />} />
          <Route path="/other" element={<Other />} />
          <Route path="/other/persinggahan" element={<Persinggahan />} />
          <Route path="/other/olahraga" element={<Olahraga />} />
          <Route path="/other/musik" element={<Musik />} />
          <Route path="/other/film" element={<Film />} />
          <Route path="/other/acara" element={<Acara />} />
          <Route path="/other/buku" element={<Buku />} />
          <Route path="/other/aplikasi" element={<Aplikasi />} />
          <Route path="/other/suka" element={<Suka />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
