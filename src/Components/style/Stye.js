import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #ededed;
`;

const InputContainer = styled.div`
  width: 100%;
  border-radius: 30px;
  font-size: 1.2rem;
  background-color: #fff;
`;
const ButtonInput = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
const Input = styled.input`
  width: 100%;
  padding: 0.7rem 1rem;
  border: none;
  outline: none;
  border-radius: 30px;
  font-size: 1.2rem;
  background-color: #fff;
  border: 5px solid #fff;
`;

const Form = styled.form`
  position: relative;
  width: 100%;
  .input-control {
    position: relative;
    transition: all 0.4s ease-in-out;
  }
`;

const Container = styled.header`
  padding: 2rem 5rem;
  width: 60%;
  margin: 0 auto;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 1530px) {
    width: 95%;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.7rem 1.5rem;
    color: red;
    font-weight: 600;
    outline: none;
    border-radius: 30px;
    font-size: 1.2rem;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    font-family: inherit;
    border: 5px solid #e5e7eb;
  }
`;

export {
  Wrapper,
  Container,
  Logo,
  SearchContainer,
  Form,
  Input,
  ButtonInput,
  InputContainer,
};
