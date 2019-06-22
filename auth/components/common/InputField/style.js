import styled from 'styled-components';

export const defaultTheme = {};

export const InputFieldContainer = styled.View`
  height: 40px;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 18px;
  padding-left: 20px;
  flex: 1;
`;

export const Input = styled.TextInput`
  height: 20px;
  width: 100%;
  color: #000;
  padding: 0 5px;
  font-size: 18px;
  line-height: 23px;
  flex: 2;
`;
