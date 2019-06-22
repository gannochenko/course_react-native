import styled from 'styled-components';
// import {
//   align
// } from 'sc-companion';
// import {
// 	withTheme,
// 	stdLink,
// } from '../../style/global';

export const defaultTheme = {};

export const DataBlock = styled.View`
    flex-direction: column;
    justify-content: space-around;
`;

export const ArtistPhoto = styled.Image`
    width: 50px;
    height: 50px;
`;

export const ArtistPhotoContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin: 0 10px;
`;

export const Info = styled.Text`
    font-size: 18px;
`;

export const Cover = styled.Image`
    height: 300px;
    flex: 1;
`;
