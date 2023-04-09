import styled from '@emotion/styled';

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: #333;
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;
    margin-left: 20px;

    &:hover {
      text-decoration: underline;
    }

    &.active {
      font-weight: bold;
      color: orange;
    }
  }
`;

const Main = styled.main`
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export { Nav, Main, Wrapper };
