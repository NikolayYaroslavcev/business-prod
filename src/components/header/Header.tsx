import React from 'react';
import {HeaderBody, HeaderTell, HeaderWrap} from "./header-style";
import {Container} from "../Container";
import ImageHoverEffect from "./logo/Logo";
import Burger from "./burger/Burger";
import Search from "./search/Search";


export const Header = () => {
    return (
        <HeaderWrap>
            <Container>
                <HeaderBody>
                    <HeaderTell>
                        <a href="tel:+375298880895">+375(29) 888–08–95</a>
                    </HeaderTell>
                    <ImageHoverEffect/>
                    <Search/>
                    <Burger/>
                </HeaderBody>
            </Container>
        </HeaderWrap>
    );
};
