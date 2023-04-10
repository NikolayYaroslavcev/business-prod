import styled from 'styled-components';

interface ImageProps {
    hover: boolean;
}

export const ImageWrapper = styled.div`
  position: relative;
  width: 150px;
`;

export const LeftImage = styled.img<ImageProps>`
  position: absolute;
  top: -24px;
  left: 0;
  transition: all 0.3s ease-in-out;
  transform: ${({ hover }) => (hover ? 'translateX(-20px)' : 'translateX(0)')};
`;

export const RightImage = styled.img<ImageProps>`
  position: absolute;
  top: -17px;
  right: 103px;
  transition: all 0.3s ease-in-out;
  transform: ${({ hover }) => (hover ? 'translateX(20px)' : 'translateX(0)')};
`;



export const HoverImageWrapper = styled.div`
  position: absolute;
  top: 11%;
  left: 61px;
  transform: translate(-50%, -50%);
`;

export const HoverImage = styled.img`
  width: 80px;
  height: 80px;
`;
