import React, { useState, useEffect } from 'react';
import { MdOutlineWbSunny } from 'react-icons/md';
import { BurgerLine, BurgerWrapper, MenuItem, MenuWrapper, Wrapper } from "./burger-style";

export interface BurgerLineProps {
    isOpen: boolean;
    isHovered: boolean;
    isPressed: boolean;
}

const MenuBurger = (): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(true);
    const [isPressed, setIsPressed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsOpen(!isOpen);
        setIsPressed(!isPressed);
    };

    return (
        <Wrapper>
            <BurgerWrapper onClick={toggleMenu} isHovered={isHovered}>
                <BurgerLine
                    isHovered={isHovered}
                    isOpen={isMenuOpen}
                    isPressed={isPressed}
                />
                <BurgerLine
                    isHovered={isHovered}
                    isOpen={isMenuOpen}
                    isPressed={isPressed}
                />
            </BurgerWrapper>
            <MenuWrapper isOpen={isMenuOpen}>
                <MdOutlineWbSunny onClick={toggleTheme} />
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
            </MenuWrapper>
        </Wrapper>
    );
};

export default MenuBurger;