import styled from "@emotion/styled";


export const ItemLi = styled.li`
  margin-bottom: 40px;
  padding-left: 16px;
  border-left: 5px solid #004ec2;
  border-left-style: dotted;
`;
export const Name = styled.p`
  border: 2px solid #004ec2;
  border-radius: 10px;
  padding-left: 10px;
  font-weight: 600;
`;

export const Number = styled.p`
  width: 50%;
  border: 2px solid #004ec2;
  border-radius: 10px;
  padding-left: 10px;
  font-weight: 600;
`;

export const Btn = styled.button`
  background-color: #004ec2;
  color: white;
  border: 2px solid #004ec2;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  padding: 3px;
  cursor: pointer;
  transition-property: background-color, color, transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 0);

  &:hover,:focus {
    background-color: white;
    color: #004ec2;
    transform: scale(0.9);
    outline: none;
  }
`;