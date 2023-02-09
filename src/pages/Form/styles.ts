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
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    color: ${theme.colors.text.White};
    margin-bottom: 15px;
  `}
`;

export const Content = styled.View`
  height: 80%;
  width: 80%;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const ContainerName = styled.View`
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    font-weight: 500;
    color: ${theme.colors.text.White};
    margin: 10px;
  `}
`;

export const InputName = styled.TextInput`
  ${({ theme }) => css`
    width: 328px;
    height: 56px;
    background: #fff;
    border-radius: 16px;
    padding: 16px;
    color: ${theme.colors.text.Black};
  `}
`;

export const ContainerDateTime = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 50%;
    height: 56px;
    background-color: ${theme.colors.backgroundWhite};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin: 5px;
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    font-weight: bold;
    color: ${theme.colors.text.Black};
  `}
`;

export const LocalContainer = styled.View`
  /* flex-direction: row; */
  margin-bottom: 15px;
`;

export const LocalDeparture = styled.View`
  /* flex-direction: row; */
`;

export const PickerStyle = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.text.White};
    border-width: 1px;
    border-radius: 16px;
    border-color: ${theme.colors.text.White};
  `}
`;

export const LocalArrival = styled.View`
  /* flex-direction: row; */
`;

export const ButtonG = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 56px;
    background-color: ${theme.colors.backgroundWhite};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin: 5px;
  `}
`;
