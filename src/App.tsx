import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Intro from "./pages/Intro";
import Movie from "./pages/Movie";
import Char from "./pages/Char";
import Movie1 from "./pages/Movie1";
import Movie2 from "./pages/Movie2";
import Movie3 from "./pages/Movie3";
import MovieIntro from "./pages/MovieIntro";
import DecorIntro from "./pages/DecorIntro";
import Char1 from "./pages/Char1";
import Char2 from "./pages/Char2";
import Char3 from "./pages/Char3";
import Char4 from "./pages/Char4";
import Char5 from "./pages/Char5";
import Char6 from "./pages/Char6";
import Char7 from "./pages/Char7";
import Decor from "./pages/Decor";
import Decor1 from "./pages/Decor1";
import Decor2 from "./pages/Decor2";
import ARView from "./pages/ARView";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/movie-1":
        title = "";
        metaDescription = "";
        break;
      case "/char-1":
        title = "";
        metaDescription = "";
        break;
      case "/movie-3":
        title = "";
        metaDescription = "";
        break;
      case "/movie-2":
        title = "";
        metaDescription = "";
        break;
      case "/movie-4":
        title = "";
        metaDescription = "";
        break;
      case "/movie-intro":
        title = "";
        metaDescription = "";
        break;
      case "/decor-intro":
        title = "";
        metaDescription = "";
        break;
      case "/char-2":
        title = "";
        metaDescription = "";
        break;
      case "/char-3":
        title = "";
        metaDescription = "";
        break;
      case "/char-6":
        title = "";
        metaDescription = "";
        break;
      case "/char-5":
        title = "";
        metaDescription = "";
        break;
      case "/char-4":
        title = "";
        metaDescription = "";
        break;
      case "/char-7":
        title = "";
        metaDescription = "";
        break;
      case "/char-8":
        title = "";
        metaDescription = "";
        break;
      case "/decor-1":
        title = "";
        metaDescription = "";
        break;
      case "/decor-2":
        title = "";
        metaDescription = "";
        break;
      case "/decor-3":
        title = "";
        metaDescription = "";
        break;
      case "/ar-view":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/movie-1" element={<Movie />} />
      <Route path="/char-1" element={<Char />} />
      <Route path="/movie-3" element={<Movie1 />} />
      <Route path="/movie-2" element={<Movie2 />} />
      <Route path="/movie-4" element={<Movie3 />} />
      <Route path="/movie-intro" element={<MovieIntro />} />
      <Route path="/decor-intro" element={<DecorIntro />} />
      <Route path="/char-2" element={<Char1 />} />
      <Route path="/char-3" element={<Char2 />} />
      <Route path="/char-6" element={<Char3 />} />
      <Route path="/char-5" element={<Char4 />} />
      <Route path="/char-4" element={<Char5 />} />
      <Route path="/char-7" element={<Char6 />} />
      <Route path="/char-8" element={<Char7 />} />
      <Route path="/decor-1" element={<Decor />} />
      <Route path="/decor-2" element={<Decor1 />} />
      <Route path="/decor-3" element={<Decor2 />} />
      <Route path="/ar-view" element={<ARView />} />
    </Routes>
  );
}
export default App;
