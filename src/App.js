import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";

// import Detail from "./views/Detail/Detail";
import Favorite from "./views/Favorite/Favorite";
import NowPlayingFunc from "./views/Home/NowPlayingFunc";
import DetailFunc from "./views/Detail/DetailFunc";
// import NowPlaying from "./views/Home/NowPlaying";

function App() {
  return (
    <BrowserRouter>
    <NavbarComponent />
    <Routes>
      {/* <Route path="/" element={<NowPlaying />} /> */}
      <Route path="/" element={<NowPlayingFunc />} />
      <Route path="favorite" element={<Favorite />} />
      {/* <Route path="detail/:id" element={<Detail />} /> */}
      <Route path="detail/:id" element={<DetailFunc />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
