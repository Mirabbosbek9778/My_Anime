import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/Global";
import { Main, PopularStyled } from "./style";
import Navbar from "../navbar/Navbar";

// eslint-disable-next-line react/prop-types
const Upcoming = ({ rendered }) => {
  const { upcomingAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === "upcoming") {
      return upcomingAnime?.map((anime) => {
        return (
          <Link to={`/anime/${anime?.mal_id}`} key={anime?.mal_id}>
            <img src={anime?.images?.jpg?.large_image_url} />
          </Link>
        );
      });
    } else {
      return searchResults?.map((anime) => {
        return (
          <Link to={`/anime/${anime?.mal_id}`} key={anime?.mal_id}>
            <img src={anime?.images?.jpg?.large_image_url} />
          </Link>
        );
      });
    }
  };

  return (
    <PopularStyled>
      <Main>{conditionalRender()}</Main>
      <Navbar />
    </PopularStyled>
  );
};

export default Upcoming;
