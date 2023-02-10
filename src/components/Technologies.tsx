import React from 'react';
import styled from '@emotion/styled';

const StyledContent = styled.div({
    padding: '55px 155px',
    display: 'flex',
    flexDirection: 'column',
});

const SubText = styled.text({
    fontSize: '20px',
    fontWeight: 'normal'
})

const Technologies = ({}) => {
    const title = 'Technologies';
    const subtitle = `Here's a list of technologies that I spend a lot of time with and enjoy:`

    return (
        <StyledContent>
            <h1>{title}</h1>
            <SubText>{subtitle}</SubText>
            <ul>
                <li>TypeScript</li>
                <li>Javascript</li>
                <li>React</li>
                <li>GraphQL</li>
                <li>Gatsby</li>
            </ul>
        </StyledContent>
    )
}

export default Technologies;