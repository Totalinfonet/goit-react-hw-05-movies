import { Link } from 'react-router-dom';
import Wrapper from './NotFound.styled';

const NotFound = () => {
  return (
    <Wrapper>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/">Go to Home</Link>
    </Wrapper>
  );
};

export default NotFound;
