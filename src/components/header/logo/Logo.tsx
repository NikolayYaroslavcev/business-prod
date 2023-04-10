import React, { useState } from 'react';
import styled from 'styled-components';
import leftImage from '../../../imag/icons/icon.svg';
import rightImage from '../../../imag/icons/r.svg';
import centerImage from '../../../imag/icons/group.svg';
import { ImageWrapper, LeftImage, RightImage, HoverImageWrapper, HoverImage } from './logo-style';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

interface ImageProps {
    hover: boolean;
}

const ImageHoverEffect = (): JSX.Element => {
    const [hover, setHover] = useState(false);

    return (
        <Wrapper>
            <ImageWrapper onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <LeftImage src={leftImage} hover={hover} />
                <RightImage src={rightImage} hover={hover} />
                {hover && (
                    <HoverImageWrapper>
                        <HoverImage src={centerImage} />
                    </HoverImageWrapper>
                )}
            </ImageWrapper>
        </Wrapper>
    );
};

export default ImageHoverEffect;
