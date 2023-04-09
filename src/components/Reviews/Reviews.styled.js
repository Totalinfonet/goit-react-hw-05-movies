import styled from '@emotion/styled';

const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ReviewListItem = styled.li`
  margin-bottom: 1rem;

  p:first-of-type {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

export { ReviewList, ReviewListItem };
