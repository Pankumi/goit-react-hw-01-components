import styled from 'styled-components';

export const Item = styled.li`
  /* outline: 1px solid red; */
  padding: 15px 25px;
  width: 100%;
  height: 130px;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: white;
`;

export const Status = styled.span`
  width: 30px;
  height: 30px;

  border-radius: 50%;

  ${p =>
    p.isOnline
      ? `background-color: rgb(0, 200, 0);`
      : `background-color: rgb(200, 0, 0);`};
`;

export const Avatar = styled.img`
  margin-left: 25px;
  width: 100px;
  height: 100px;

  border-radius: 10%;
`;

export const Name = styled.p`
  margin-left: 25px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  color: rgb(40, 40, 40);
`;
