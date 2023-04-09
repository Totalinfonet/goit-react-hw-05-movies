import styled from '@emotion/styled';

const CastWrapper = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    align-items: center;
    display: flex;
    margin-bottom: 1rem;
  }
`;

const ActorImage = styled.img`
  border-radius: 50%;
  margin-right: 1rem;
`;

const ActorInfo = styled.div`
  p:first-of-type {
    font-weight: bold;
  }
`;

export { CastWrapper, ActorImage, ActorInfo };
