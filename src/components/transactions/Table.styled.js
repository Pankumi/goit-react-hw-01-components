import styled from 'styled-components';

export const TransactionHistory = styled.table`
  /* outline: 1px solid red; */
  margin: 50px auto 0 auto;
  width: 700px;
  border-collapse: collapse;
  background-color: white;
  
  text-align: center;
  font-size: 16px;

`;

export const Title = styled.tr`
  height: 20px;
  border: 1px solid grey;
  background-color: #4D8FFE;
  
  text-align: center;
  font-size: 20px;
`;

export const Content = styled.tr`
  border: 1px solid grey;

  ${p =>
    p.row && `background-color: rgb(200, 200, 200);`};
  /* background-color: #4D8FFE; */
  
  text-align: center;
  font-size: 20px;
`