import { Link } from "react-router-dom";
import { Wrapper } from "./style";
import { useGlobalContext } from "../../context/Global";

const Navbar = () => {
  const { popularAnime } = useGlobalContext();

  const sorted = popularAnime?.sort((a, b) => {
    return b.score - a?.score;
  });

  return (
    <Wrapper>
      <h3>Top 5 Popular</h3>
      <div className="anime">
        {sorted?.slice(0, 5).map((anime) => {
          return (
            <Link to={`/anime/${anime?.mal_id}`} key={anime?.mal_id}>
              <img src={anime?.images?.jpg.large_image_url} alt="" />
              <h5>{anime?.title}</h5>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Navbar;
