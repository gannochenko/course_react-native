import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { string } from 'prop-types';

import { AlbumListContainer } from './style';

const AlbumList = () => {
    const [name, setName] = useState('Album list');
    useEffect(() => {
        setTimeout(() => {
            setName('Blah');
            console.dir('BLAH');
        }, 3000);
    }, []);

    return (
        <AlbumListContainer>
            <Text>{name}</Text>
        </AlbumListContainer>
    );
};

export default AlbumList;
