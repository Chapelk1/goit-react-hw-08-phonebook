import styled from "@emotion/styled";


export const Form = styled.form`
  width: 100%;
  height: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  // border: 2px solid #004ec2;
  // border-radius: 20px;
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;

export const Input = styled.input`
  margin-left: 20px;
  border: 2px solid #a2a2a2;
  border-radius: 5px;
  padding: 5px;
  outline-color: #004ec2;
`;

export const Btn = styled.button`
  background-color: #004ec2;
  color: white;
  border: 2px solid #004ec2;
  border-radius: 10px;
  font-weight: 600;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
  transition-property: background-color, color, transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 0);

  &:hover,
  :focus {
    background-color: white;
    color: #004ec2;
    transform: scale(1.1);
    outline: none;
  }
`;





