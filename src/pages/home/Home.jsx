import { useState } from "react";
import Popular from "../../Components/popular/Popular";
import Upcoming from "../../Components/upComing/Upcoming";
import Airing from "../../Components/top/Airing";
import {
  ButtonInput,
  Container,
  Form,
  Input,
  InputContainer,
  Logo,
  SearchContainer,
  Wrapper,
} from "../../Components/style/Stye";
import { useGlobalContext } from "../../context/Global";

const Homepage = () => {
  const {
    handleSubmit,
    search,
    handleChange,
    getUpcomingAnime,
    getAiringAnime,
  } = useGlobalContext();

  const [rendered, setRendered] = useState("popular");

  const switchComponent = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      case "airing":
        return <Airing rendered={rendered} />;
      case "upcoming":
        return <Upcoming rendered={rendered} />;
      default:
        return <Popular rendered={rendered} />;
    }
  };

  return (
    <Wrapper>
      <Container>
        <Logo>
          <h1>
            {rendered === "popular"
              ? "Popular Anime"
              : rendered === "airing"
              ? "Top Anime"
              : "News Anime"}
          </h1>
        </Logo>
        <SearchContainer>
          <div className="filter-btn popular-filter">
            <button
              onClick={() => {
                setRendered("popular");
              }}
            >
              Home
            </button>
          </div>
          <Form action="" onSubmit={handleSubmit}>
            <InputContainer>
              <Input
                type="text"
                placeholder="Search Anime"
                value={search}
                onChange={handleChange}
              />
              <ButtonInput type="submit">Search</ButtonInput>
            </InputContainer>
          </Form>
          <div>
            <button
              onClick={() => {
                setRendered("airing");
                getAiringAnime();
              }}
            >
              Top
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setRendered("upcoming");
                getUpcomingAnime();
              }}
            >
              News
            </button>
          </div>
        </SearchContainer>
      </Container>
      {switchComponent()}
    </Wrapper>
  );
};

export default Homepage;
