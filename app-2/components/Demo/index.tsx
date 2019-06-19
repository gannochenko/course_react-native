import React, { FunctionComponent, ReactNode } from 'react';

import { defaultTheme, DemoContainer } from './style';

interface DemoProperties {
    children: ReactNode;
    theme?: object;
}

const Demo: FunctionComponent<DemoProperties> = ({
    children,
    theme = defaultTheme,
}) => {
    return <DemoContainer>{children}</DemoContainer>;
};

export default Demo;
