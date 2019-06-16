import React from 'react';
import { func, object, bool } from 'prop-types';
import { Text, Image } from 'react-native';
import Card from '../Card';
import CardSection from '../CardSection';
import {
    defaultTheme,
    DataBlock,
    ArtistPhoto,
    ArtistPhotoContainer,
    Info,
    Cover,
} from './style';

const AlbumDetail = ({ children, theme, album }) => (
    <Card>
        <CardSection>
            <ArtistPhotoContainer>
                <ArtistPhoto source={{ uri: album.thumbnail_image }} />
            </ArtistPhotoContainer>
            <DataBlock>
                <Info>{album.title}</Info>
                <Text>{album.artist}</Text>
            </DataBlock>
        </CardSection>
        <CardSection>
            <Cover source={{ uri: album.image }} />
        </CardSection>
    </Card>
);

AlbumDetail.propTypes = {
    theme: object,
    album: object,
    children: func,
};

AlbumDetail.defaultProps = {
    theme: defaultTheme,
    album: {},
    children: null,
};

export default AlbumDetail;
