import React from 'react';
import { string } from 'prop-types';

import { HeaderContainer, Title } from './style';

const Header = ({ title }) => {
    return (
        <HeaderContainer>
            <Title>{title}</Title>
        </HeaderContainer>
    );
};

Header.propTypes = {
    title: string,
};

Header.defaultProps = {
    title: 'Untitled',
};

export { Header };
