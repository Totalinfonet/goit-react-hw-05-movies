import { useEffect, useState } from 'react';
import apiService from '../../service/apiService';
import { useParams } from 'react-router-dom';
import { ReviewList, ReviewListItem } from './Reviews.styled';

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
        <ReviewList>
          {reviews.map(review => (
            <ReviewListItem key={review.id}>
              <p>{`Author: ${review.author}`}</p>
              <p>{review.content}</p>
            </ReviewListItem>
          ))}
        </ReviewList>
      ) : (
        <p>
          Sorry, there are no reviews available for this movie at this time.
        </p>
      )}
    </div>
  );
};

export default Reviews;
