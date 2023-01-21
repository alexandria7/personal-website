import React from 'react';
import styled from '@emotion/styled';

const StyledContent = styled.div({
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#BAD5F7'
});

const Contact = ({}) => {
    const title = 'Contact Me';
    const subtitle = `I'm open to new software development roles either remote or Seattle-based.`

    return (
        <StyledContent>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <ul>
                <li>email: alexandria.mccarthy77@gmail.com</li>
                <li>Resume</li>
                <li>GitHub</li>
            </ul>
        </StyledContent>
    )
}

export default Contact;