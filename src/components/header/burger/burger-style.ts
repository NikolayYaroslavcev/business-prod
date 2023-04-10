import styled from "styled-components";
import {BurgerLineProps} from "./Burger";


export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 80px;
  background-color: var(--color-bg);
  color: var(--colors-text);
`;

export const BurgerWrapper = styled.div<{ isHovered: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: ${({isHovered}) =>
            isHovered ? `scale(1.2)` : `scale(1)`};
  }
`;

export const MenuWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 80px;
  right: 0;
  width: 200px;
  box-shadow: var(--shadow);
  padding: 20px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const BurgerLine = styled.div<BurgerLineProps>`
  width: 32px;
  height: 2px;
  background-color: var(--burger-bg);
  transition: transform 0.3s ease-in-out;

  &:nth-child(1) {
    transform-origin: center;
    transform: ${({ isOpen, isPressed }) =>
            isOpen && isPressed ? `rotate(-45deg)` : `rotate(0)`};
  }

  &:nth-child(2) {
    transform-origin: center;
    transform: ${({ isOpen, isPressed }) =>
            isOpen && isPressed ? `rotate(45deg)` : `rotate(0)`};
  }
`;



export const MenuItem = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
`;