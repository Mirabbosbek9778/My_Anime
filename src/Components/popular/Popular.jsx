import { Link } from "react-router-dom";
import { Container, Image, Main } from "./style";
import Navbar from "../navbar/Navbar";
import { useGlobalContext } from "../../context/Global";

// eslint-disable-next-line react/prop-types
const Popular = ({ rendered }) => {
  const { popularAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === "popular") {
      return popularAnime?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <Image src={anime?.images?.jpg.large_image_url} />
          </Link>
        );
      });
    } else {
      // eslint-disable-next-line array-callback-return
      return searchResults?.map((anime) => {
        <Link to={`/anime/${anime.mal_id}`} key={anime?.mal_id}>
          <Image src={anime?.images.jpg.large_image_url} />
        </Link>;
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

export default Popular;
