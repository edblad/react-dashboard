import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  @media screen and (min-width: 700px){
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px 10%;
  }
`;

export default Main;