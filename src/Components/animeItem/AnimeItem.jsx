import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  AnimeItemStyled,
  Character,
  Container,
  Content,
  Descriptions,
  Details,
  Iframe,
  Item,
  Title,
} from "./style";

const AnimeItem = () => {
  const { id } = useParams();

  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    scored_by,
    popularity,
    status,
    rating,
    source,
  } = anime;

  const getAnime = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await response.json();
    setAnime(data.data);
  };

  const getCharacters = async (anime) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${anime}/characters`
    );
    const data = await response.json();
    setCharacters(data.data);
  };

  useEffect(() => {
    getAnime(id);
    getCharacters(id);
  }, [id]);

  return (
    <AnimeItemStyled>
      <Title>{title}</Title>
      <Details>
        <Item>
          <div className="image">
            <img src={images?.jpg.large_image_url} alt="" />
          </div>
          <Container>
            <h1>
              Aired:
              <p> {aired?.string}</p>
            </h1>
            <h1>
              Rating:
              <p> {rating}</p>
            </h1>
            <h1>
              Rank:
              <p> {rank}</p>
            </h1>
            <h1>
              Score:
              <p> {score}</p>
            </h1>
            <h1>
              Score:
              <p>{scored_by}</p>
            </h1>
            <h1>
              Popularity:
              <p>{popularity}</p>
            </h1>
            <h1>
              Status:
              <p>{status}</p>
            </h1>
            <h1>
              Type:
              <p>{source}</p>
            </h1>
            <h1>
              Season:
              <p>{season}</p>
            </h1>
            <h1>
              Time:
              <p>{duration}</p>
            </h1>
          </Container>
        </Item>
        <Descriptions>
          {showMore ? synopsis : synopsis?.substring(0, 550) + "..."}
          <button
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? "About" : "More"}
          </button>
        </Descriptions>
      </Details>
      <Title top>Trailer</Title>
      <div className="trailer-con">
        {trailer?.embed_url ? (
          <Iframe
            src={trailer?.embed_url}
            width="1440"
            height="600"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          ></Iframe>
        ) : (
          <h3>Trailer Not founding!</h3>
        )}
      </div>
      <Title top>Characters</Title>
      <Content>
        {characters?.map((character, index) => {
          const { role } = character;
          const { images, name, mal_id } = character.character;
          return (
            <Link to={`/character/${mal_id}`} key={index}>
              <Character>
                <img src={images?.jpg.image_url} />
                <h4>{name}</h4>
                <p>{role}</p>
              </Character>
            </Link>
          );
        })}
      </Content>
    </AnimeItemStyled>
  );
};

export default AnimeItem;
