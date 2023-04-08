import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFound;
