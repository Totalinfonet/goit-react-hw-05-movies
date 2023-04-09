import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Nav, Main, Wrapper } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Nav>

      <Main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </Wrapper>
  );
};

export default SharedLayout;
