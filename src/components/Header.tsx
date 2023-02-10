import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const HeaderContainer = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#BFCDF5',
    padding: '15px 25px',
    position: 'sticky',
    top: '0',
});

const Name = styled.div({
    color: '#492E15'
});

const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const StyledLink = styled(Link)`
    margin-left: 75px;
    text-decoration: none;
    font-size: 25px;
`;

const Header = ({}) => {
    const headerName = '✨AM';
    const navLinks = [
        {name: 'About', route: '/'},
        {name: 'Technologies', route: '/'},
        {name: 'Contact', route: '/'},
    ]

    return (
        <HeaderContainer>
            <Name>
                <h1>{headerName}</h1>
            </Name>
            <Links>
                {navLinks &&
                    navLinks.map(({ route, name }) => (
                        <StyledLink to={route}>{name}</StyledLink>
                    ))}
            </Links>
        </HeaderContainer>
    )
}

export default Header;