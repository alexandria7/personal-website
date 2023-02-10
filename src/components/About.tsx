import React from 'react';
import styled from '@emotion/styled';

const StyledContent = styled.section`
    max-width: 850px;
    padding: 55px 155px;
    display: flex;
    flex-direction: column;
    color: #492E15;
    @media (max-width: 768px) {
        padding: 55px 85px;
    }
`;

const Blurb = styled.div({
    display: 'flex',
    flexDirection: 'column',
    fontSize: '20px',
    fontWeight: 'normal'
})

// https://adadevelopersacademy.org/

const About = ({}) => {
    const title = 'About Me';
    const content1 = `Hi! My name is Alex McCarthy (she/her) and I'm a software developer based 
        out of Seattle, WA (although I'm originally from San Francisco, CA). While I got my degree 
        in microbiology, I later discovered I enjoyed coding and in 2019 completed Ada Developers Academy,
        a year-long program that teaches women and gender-diverse folks to become software developers. When
        I started my first full-time role at Convoy Inc, I discovered I loved building products that not
        only helped customers but excited them too.`
    const content2 = `In my last job I was a fullstack software engineer and I would love to hone my 
        frontend skills in my next role. I am also passionate about mentorship and building a great work 
        culture.`
    const content3 = `In my free time I love reading a good fantasy book, trying new food in Seattle, and hanging out with my fiancé and our two cats :).`
    
    return (
        <StyledContent>
            <h1>{title}</h1>
            <Blurb>
                <p>{content1}</p>
                <p>{content2}</p>
                <p>{content3}</p>
            </Blurb>
        </StyledContent>
    )
}

export default About;