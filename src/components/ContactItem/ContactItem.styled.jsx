import styled from "@emotion/styled";


export const ItemLi = styled.li`
  margin-bottom: 40px;
  border: 3px solid teal;
  border-radius: 6px;
  padding: 6px;
  padding-left: 14px;
  width: 45%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const Name = styled.p`
  // border: 2px solid #004ec2;
  // border-radius: 10px;
  font-weight: 600;
  color: white;
  text-align: center;
  margin-bottom: 10px;
`;

export const Number = styled.p`
  // border: 2px solid #004ec2;
  // border-radius: 10px;
  font-weight: 600;
  text-align: center;
  color: white;
`;

export const Btn = styled.button`
  background-color: teal;
  color: white;
  border: 2px solid teal;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  padding: 4px;
  cursor: pointer;
  min-width: 60px;
  transition-property: background-color, color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 0);

  &:hover,
  :focus {
    background-color: #181b1e;
    color: white;
    outline: none;
  }

  // &:not(:last-child){
  //   margin-right: 30px;
  // }
`;

export const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 12px;
`;

export const WrapBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;





