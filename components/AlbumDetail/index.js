import React from 'react';
import { func, object, bool } from 'prop-types';
import { Text, Linking } from 'react-native';
import Card from '../Card';
import CardSection from '../CardSection';
import Button from '../Button';
import {
    defaultTheme,
    DataBlock,
    ArtistPhoto,
    ArtistPhotoContainer,
    Info,
    Cover,
} from './style';

const AlbumDetail = ({ children, theme, album }) => {
    const { thumbnail_image, title, artist, image, url } = album;
    return (
        <Card>
            <CardSection>
                <ArtistPhotoContainer>
                    <ArtistPhoto source={{ uri: thumbnail_image }} />
                </ArtistPhotoContainer>
                <DataBlock>
                    <Info>{title}</Info>
                    <Text>{artist}</Text>
                </DataBlock>
            </CardSection>
            <CardSection>
                <Cover source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>Buy now</Button>
            </CardSection>
        </Card>
    );
};

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
