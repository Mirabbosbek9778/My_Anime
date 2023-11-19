import styled from "styled-components";

const Container = styled.div`
  display: flex;
  .popular-anime {
    a {
      height: 500px;
      border-radius: 7px;
      border: 5px solid #e5e7eb;
    }
    a img {
    }
  }
`;

const Main = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 5rem;
  padding-right: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
  background-color: #fff;
  border-top: 5px solid #e5e7eb;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export { Container, Main, Image };
