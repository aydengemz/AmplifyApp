
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AppPlayer from "./pages/AppPlayer.js";
import AppPost from "./pages/AppPost.js";
import AppTodo from "./pages/AppTodo.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="player" element={<AppPlayer />} />
          <Route path="todo" element={<AppTodo />} />
          <Route path="post" element={<AppPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;