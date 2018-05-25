import React from 'react';
import HeaderStyle from './styled/HeaderStyle';
import H1 from './styled/H1';

function Header() {
    return (
        <HeaderStyle>
            <H1 text="Dashboard" />
        </HeaderStyle>
    )
}

export default Header;