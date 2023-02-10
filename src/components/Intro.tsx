import React from 'react';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';

const StyledContent = styled.section`
    max-width: 900px;
    padding: 200px 155px 425px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 65px 85px 62px;
    }
`;

const TextContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    color: '#492E15',
    padding: '10px',
    textAlign: 'left',
});

const TopText = styled.h1`
    font-size: 65px;
    @media (max-width: 768px) {
        font-size: 45px;
    }
`

const BottomText = styled.text`
    font-size: 25px;
    font-weight: normal;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`

const ImageContainer = styled.div`
    padding-left: 15px;
    @media (max-width: 768px) {
        padding-left: 0px;
    }
`

const Intro = ({}) => {
    const intro1 = 'Hi, my name is Alex McCarthy';
    const intro2 = `a software developer, oat milk latte enthusiast, and cat mom`

    return (
        <StyledContent>
            <TextContainer>
                <TopText>{intro1}</TopText>
                <BottomText>{intro2}</BottomText>
            </TextContainer>
            <ImageContainer>
                <StaticImage
                    src='../images/me-laptop-bitmoji.png'
                    width={350}
                    quality={95}
                    formats={['auto', 'webp', 'avif']}
                    alt="My bitmoji face behind a laptop"
                />
            </ImageContainer>
        </StyledContent>
    )
}

export default Intro;