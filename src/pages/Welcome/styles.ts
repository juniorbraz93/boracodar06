import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../styles/theme";

export const Container = styled(LinearGradient).attrs({
  colors: [
    theme.colors.linearGradient.purple1,
    theme.colors.linearGradient.purple2,
  ],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  justify-content: center;
`;

export const Header = styled.View`
  height: 60%;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 40px;
    color: ${theme.colors.text.White};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    color: ${theme.colors.text.White};
    margin-top: 16px;
  `}
`;

export const Footer = styled.View`
  height: 20%;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 80%;
    height: 50px;
    background-color: ${theme.colors.backgroundWhite};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    font-weight: bold;
    color: ${theme.colors.text.Black};
  `}
`;
