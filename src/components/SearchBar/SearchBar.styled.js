import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  margin-right: 0.5rem;
  width: 100%;
  max-width: 20rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  &:focus {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #555;
    color: orange;
  }
`;

export { Form, Input, Button };
