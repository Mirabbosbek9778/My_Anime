import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/Global";
import { Container, Main } from "./style";
import Navbar from "../navbar/Navbar";

// eslint-disable-next-line react/prop-types
const Airing = ({ rendered }) => {
  const { airingAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === "airing") {
      return airingAnime?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime?.mal_id}>
            <img src={anime?.images?.jpg.large_image_url} />
          </Link>
        );
      });
    } else {
      return searchResults?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime?.mal_id}>
            <img src={anime?.images?.jpg.large_image_url} />
          </Link>
        );
      });
    }
  };

  return (
    <Container>
      <Main>{conditionalRender()}</Main>
      <Navbar />
    </Container>
  );
};

export default Airing;
