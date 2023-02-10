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

const Contact = ({}) => {
    const title = 'Contact Me';
    const subtitle = `I'm open to new software development roles either remote or Seattle-based
        (not freelance, sorry!). If you'd like to talk about my next gig or just say hi, you can find
        my info below. Thanks!`

    return (
        <StyledContent>
            <h1>{title}</h1>
            <SubText>{subtitle}</SubText>
            <ul>
                <li>email: alexandria.mccarthy77@gmail.com</li>
                <li>Resume</li>
                <li>GitHub</li>
            </ul>
        </StyledContent>
    )
}

export default Contact;