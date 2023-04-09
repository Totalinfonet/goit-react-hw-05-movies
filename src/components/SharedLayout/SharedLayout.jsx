import { Outlet, NavLink } from 'react-router-dom';
import { Nav, Main, Wrapper } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Nav>

      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
};

export default SharedLayout;
