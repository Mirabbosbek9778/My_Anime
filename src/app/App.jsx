import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/home/Home";
import Gallery from "../Components/galery/Gallery";
import AnimeItem from "../Components/animeItem/AnimeItem";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/anime/:id" element={<AnimeItem />} />
        <Route path="/character/:id" element={<Gallery />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
