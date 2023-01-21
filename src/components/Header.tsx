import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const HeaderContainer = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
});

const Name = styled.div({
    color: 'hotpink'
});

const Links = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
})

const Header = ({}) => {
    const headerName = 'Alex McCarthy';

    return (
        <HeaderContainer>
            <Name>{headerName}</Name>
            <Links>
                <Link to={'/'}>About</Link>
                <Link to={'/'}>Tech</Link>
                <Link to={'/'}>Contact</Link>
            </Links>
        </HeaderContainer>
    )
}

export default Header;