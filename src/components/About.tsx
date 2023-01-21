import React from 'react';
import styled from '@emotion/styled';

const StyledContent = styled.div({
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#D2CAE2'
});

const Name = styled.div({
    color: 'hotpink'
});

const Links = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
})

const About = ({}) => {
    const title = 'About Me';
    const content1 = ` Hi! My name is Alex McCarthy (she/her) and I'm a software developer based out of Seattle, WA.
    I have a non-traditional tech background as I actually got my degree in microbiology, but later discovered I enjoyed
    coding and completed Ada Developers Academy in 2019. I love building products that help customers...`
    const content2 = `In my free time I love reading a good fantasy book, trying new food in Seattle, and hanging out with my fiancé and our two cats :).`
    
    return (
        <StyledContent>
            <h1>{title}</h1>
            <p>{content1}</p>
            <p>{content2}</p>
        </StyledContent>
    )
}

export default About;