import styled from 'styled-components';
// import {
//   align
// } from 'sc-companion';
// import {
// 	withTheme,
// 	stdLink,
// } from '../../style/global';

export const defaultTheme = {};

export const ButtonContainer = styled.TouchableOpacity`
    flex: 1;
    align-self: stretch;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #007aff;
    margin: 0 5px;
`;

export const Text = styled.Text`
    align-self: center;
    color: #007aff;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 0;
`;
