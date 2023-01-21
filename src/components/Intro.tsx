import React from 'react';
import styled from '@emotion/styled';

const StyledContent = styled.div({
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#BDD5B1'
});

const Name = styled.div({
    color: 'hotpink'
});

const Links = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
})

const Intro = ({}) => {
    const intro1 = 'Hi, my name is Alex McCarthy';
    const intro2 = `and I'm a software developer.`

    return (
        <StyledContent>
            <h1>{intro1}</h1>
            <h1>{intro2}</h1>
        </StyledContent>
    )
}

export default Intro;