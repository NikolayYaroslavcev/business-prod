import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1062px;
  margin: 0 auto;
  padding: 0 15px;

  /* Медиа-запросы для адаптивности контейнера */
  @media screen and (max-width: 480px) {
    max-width: 100%;
    padding: 0 10px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    max-width: 720px;
    padding: 0 20px;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    max-width: 960px;
    padding: 0 30px;
  }
`;