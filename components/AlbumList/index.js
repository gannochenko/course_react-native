import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import axios from 'axios';

import AlbumDetail from '../AlbumDetail';

import { AlbumListContainer } from './style';

const AlbumList = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        axios
            .get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(result => {
                console.log(result.data);
                setAlbums(result.data);
            });
    }, []);

    return (
        <AlbumListContainer>
            {albums.map(album => (
                <AlbumDetail album={album} key={album.title} />
            ))}
        </AlbumListContainer>
    );
};

export default AlbumList;
