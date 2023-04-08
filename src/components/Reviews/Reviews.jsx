import { useEffect, useState } from 'react';
import apiService from '../../service/apiService';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const movieReviews = await apiService.getMovieReviews(movieId);
        setReviews(movieReviews);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews?.length ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{`Author: ${review.author}`}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          Sorry, there are no reviews available for this movie at this time.
        </p>
      )}
    </div>
  );
};

export default Reviews;
