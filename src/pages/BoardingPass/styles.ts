import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../styles/theme";

export const Container = styled(LinearGradient).attrs({
  colors: [
    theme.colors.linearGradient.purple1,
    theme.colors.linearGradient.purple2,
  ],
  start: { x: 1, y: 0 },
  end: { x: 0, y: 1 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const BoardingPass = styled.View`
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    /* font-family: "Rubik"; */
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 20px;
    color: ${theme.colors.text.White};
  `}
`;

export const Ticket = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 327px;
  height: 544px;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.25));
`;

export const FlightInfo = styled.View`
  ${({ theme }) => css`
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 32px;
    height: 180px;
    background: ${theme.colors.backgroundWhite};
    border-radius: 24px;
    flex: none;
  `}
`;

export const ContainerDate = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 263px;
`;

export const FlightNumber = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Flight = styled.Text`
  ${({ theme }) => css`
    /* font-family: "Rubik"; */
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${theme.colors.text.lightBlack};
  `}
`;

export const Number = styled.Text`
  ${({ theme }) => css`
    /* font-family: "Rubik"; */
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${theme.colors.text.Black};
  `}
`;

export const FlightDate = styled.View`
  flex-direction: column;
  align-items: flex-end;
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    /* font-family: 'Rubik'; */
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: right;
    color: ${theme.colors.text.lightBlack};
  `}
`;

export const NumberDate = styled.Text`
  ${({ theme }) => css`
    /* font-family: 'Rubik'; */
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-align: right;
    color: ${theme.colors.text.Black};
  `}
`;

export const ContainerInfoFlight = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 57px;
  width: 263px;
`;

export const Departure = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 14px;
`;

export const LocalDeparture = styled.Text`
  ${({ theme }) => css`
    /* font-family: 'Rubik'; */
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: ${theme.colors.text.lightBlack};
  `}
`;

export const AirportDeparture = styled.Text`
  ${({ theme }) => css`
    /* font-family: 'Rubik'; */
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 47px;
    display: flex;
    align-items: center;
    color: ${theme.colors.text.Black};
  `}
`;

export const HourDeparture = styled.Text`
  ${({ theme }) => css`
    /* font-family: 'Rubik'; */
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${theme.colors.text.mediumBlack};
  `}
`;

export const IconView = styled.View`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 120px;
  top: 45px;
`;

export const Arrival = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 14px;
`;

export const LocalArrival = styled.Text`
  ${({ theme }) => css`
    /* font-family: 'Rubik'; */
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: ${theme.colors.text.lightBlack};
  `}
`;

export const AirportArrival = styled.Text`
  ${({ theme }) => css`
    /* font-family: 'Rubik'; */
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 47px;
    display: flex;
    align-items: center;
    color: ${theme.colors.text.Black};
  `}
`;

export const TimeArrival = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px;

  width: 55px;
  height: 19px;
`;

export const HourArrival = styled.Text`
  ${({ theme }) => css`
    /* font-family: 'Rubik'; */
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${theme.colors.text.mediumBlack};
  `}
`;

export const TimePlusArrival = styled.Text`
  ${({ theme }) => css`
    /* font-family: 'Rubik'; */
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    color: ${theme.colors.text.mediumBlack};
  `}
`;

export const PassangerInfo = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 24px 32px;
    width: 327px;
    height: 84px;
    background: ${theme.colors.backgroundWhite};
    border-radius: 24px;
    flex: none;
  `}
`;

export const PassangerName = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 110px;
  height: 36px;
`;

export const Passanger = styled.Text`
  ${({ theme }) => css`
    /* font-family: ${theme.fonts.regular}; */
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${theme.colors.text.lightBlack};
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    /* font-family: ${theme.fonts.regular}; */
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${theme.colors.text.Black};
  `}
`;

export const SeatContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 52px;
  height: 36px;
`;

export const Seat = styled.Text`
  ${({ theme }) => css`
    /* font-family: ${theme.fonts.regular}; */
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${theme.colors.text.lightBlack};
  `}
`;

export const SeatNumber = styled.Text`
  ${({ theme }) => css`
    /* font-family: ${theme.fonts.regular}; */
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${theme.colors.text.Black};
  `}
`;

export const BoardingInfo = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px 32px;
    gap: 24px;
    width: 327px;
    height: 269px;
    background: ${theme.colors.backgroundWhite};
    border-radius: 24px;
    flex: none;
  `}
`;

export const ContainerBoardingInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 263px;
  height: 177px;
`;

export const BoardingInfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 95px;
  height: 150px;
`;

export const BoardingTimeContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 95px;
  height: 46px;
  align-self: stretch;
  margin-bottom: 16px;
`;

export const BoardingTimeText = styled.Text`
  ${({ theme }) => css`
    /* font-family: ${theme.fonts.regular}; */
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: ${theme.colors.text.lightBlack};
  `}
`;

export const BTimeContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 4px 8px;
    width: 57px;
    height: 27px;
    background: ${theme.colors.backgroundPurple};
    border-radius: 8px;
    margin-top: 5px;
  `}
`;

export const BTimeText = styled.Text`
  ${({ theme }) => css`
    /* font-family: ${theme.fonts.regular}; */
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: ${theme.colors.text.White};
  `}
`;

export const TerminalContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 95px;
  height: 36px;
  margin-bottom: 16px;
`;

export const TerminalText = styled.Text`
  ${({ theme }) => css`
    /* font-family: ${theme.fonts.regular}; */
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: ${theme.colors.text.lightBlack};
  `}
`;

export const TerminalNumber = styled.Text`
  ${({ theme }) => css`
    /* font-family: ${theme.fonts.regular}; */
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: ${theme.colors.text.Black};
  `}
`;

export const GateContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 95px;
  height: 36px;
  margin-bottom: 16px;
`;

export const GateText = styled.Text`
  ${({ theme }) => css`
    /* font-family: ${theme.fonts.regular}; */
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: ${theme.colors.text.lightBlack};
  `}
`;

export const GateNumber = styled.Text`
  ${({ theme }) => css`
    /* font-family: ${theme.fonts.regular}; */
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: ${theme.colors.text.Black};
  `}
`;

export const QRCodeContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 177px;
`;

export const QRCode = styled.Image`
  width: 160px;
  height: 160px;
`;

export const QRCodeText = styled.Text`
  ${({ theme }) => css`
    /* font-family: ${theme.fonts.regular}; */
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${theme.colors.text.lightBlack};
  `}
`;

export const AttentionContainer = styled.View`
  flex-direction: row;
  margin-top: 18px;
`;

export const Attention = styled.Text`
  ${({ theme }) => css`
    /* font-family: ${theme.fonts.regular}; */
    font-style: bold;
    font-weight: bold;
    font-size: 14px;
    align-items: center;
    text-align: center;
    color: ${theme.colors.text.mediumBlack};
  `}
`;
export const AttentionText = styled.Text`
  ${({ theme }) => css`
    /* font-family: ${theme.fonts.regular}; */
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    align-items: center;
    text-align: center;
    color: ${theme.colors.text.mediumBlack};
  `}
`;
export const Footer = styled.Text`
  ${({ theme }) => css`
    width: 250px;
    /* font-family: ${theme.fonts.regular}; */
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: ${theme.colors.text.White};
    opacity: 0.64;
  `}
`;

export const Dividir = styled.View`
  width: 279px;
  border: 1px dashed rgba(0, 0, 0, 0.32);
`;
