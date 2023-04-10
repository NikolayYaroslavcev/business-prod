import styled from "styled-components";

export const SearchContainer = styled.div`
  position: fixed;
  top: 0;
  left: 12%;
  width: 0;
  background-color: #f2f2f2;
  overflow: hidden;
  transition: width 0.3s ease-in-out;
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 20px 0;
  z-index: 5;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  border: none;
  font-size: 16px;
  outline: none;
`;

export const SearchButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  color: var(--colors-text);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.div`
  top: 0;
  left: 0;
  padding: 10px 20px;
  color: var(--colors-text);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  font-size: 30px;
  color: var(--colors-text);
  cursor: pointer;
`;
