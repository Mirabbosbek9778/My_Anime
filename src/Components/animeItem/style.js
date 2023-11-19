import styled from "styled-components";

const Title = styled.h1`
  display: inline-block;
  font-size: 40px;
  margin-bottom: 1.5rem;
  cursor: pointer;
  color: yellowgreen;
  &:hover {
    transform: skew(-3deg);
  }
  margin: ${({ top }) => (top ? "3rem 0" : "")};
`;

const Descriptions = styled.div`
  margin-top: 2rem;
  color: #6c7983;
  line-height: 1.7rem;
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.2rem;
    color: #27ae60;
    font-weight: 600;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    display: flex;
    gap: 1rem;
    font-size: 24px;
    display: flex;
    align-items: center;
  }
  p {
    font-size: 20px;
    color: brown;
  }
`;
const Character = styled.div``;
const AnimeItemStyled = styled.div`
  padding: 3rem 18rem;
  background-color: #ededed;

  .trailer-con {
    display: flex;
    justify-content: center;
    align-items: center;
    iframe {
    }
  }
`;
const Iframe = styled.iframe`
  border: none;
  border-radius: 10px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-top: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 20px;

  img {
    width: 100%;
  }
  h4 {
    padding: 0.5rem 0;
    color: #454e56;
  }
  p {
    color: #27ae60;
  }
  &:hover {
    transform: translateY(-5px);
  }
`;

const Details = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 2rem;
  border: 5px solid #e5e7eb;
`;

const Item = styled.div`
  display: flex;
  gap: 40px;
`;

export {
  Item,
  AnimeItemStyled,
  Title,
  Container,
  Descriptions,
  Character,
  Content,
  Details,
  Iframe,
};
