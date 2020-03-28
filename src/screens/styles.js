import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.background};
`;

export const TextView = styled.Text`
  color: ${props => props.theme.color};
`;