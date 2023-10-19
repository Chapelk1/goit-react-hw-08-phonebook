import styled from '@emotion/styled';

export const Form = styled.form`
  width: 100%;
  height: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
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
  background-color: rgb(66, 84, 102);
  margin-left: 20px;
  border: 2px solid teal;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  color: white;
  font-size: 18px;
`;

export const Btn = styled.button`
  background-color: #181b1e;
  color: white;
  border: 2px solid teal;
  border-radius: 10px;
  font-weight: 600;
  padding: 5px;
  font-size: 18px;
  cursor: pointer;
  min-width: 80px;
  transition-property: background-color, color, transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 0);

  &:hover,
  :focus {
    background-color: teal;
    outline: none;
  }
`;

