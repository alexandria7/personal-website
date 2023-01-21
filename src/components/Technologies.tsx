import React from 'react';
import styled from '@emotion/styled';

const StyledContent = styled.div({
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FCDAB6'
});

const Name = styled.div({
    color: 'hotpink'
});

const Links = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
})

const Technologies = ({}) => {
    const title = 'Technologies';
    const subtitle = `Here's a list of technologies that I spend a lot of time with and enjoy:`

    return (
        <StyledContent>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
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