import React, { useState, useEffect } from "react";
import * as S from "./styles";

import qrcode from "../../assets/qrcoderb.png";

import Ionicons from "@expo/vector-icons/Ionicons";
import { airport } from "../../assets/airport";

export default function BoardingPass({ route }: any) {
  const [acronymDeparture, setAcronymDeparture] = useState("");
  const [acronymArrival, setAcronymArrival] = useState("");
  const [terminal, setTerminal] = useState("");
  const [gate, setGate] = useState("");
  const [plus, setPlus] = useState("");
  const [seat, setSeat] = useState("");
  const [hour, setHour] = useState("");
  const [departureHour, setDepartureHour] = useState("");
  const [arrivalHour, setArrivalHour] = useState("");
  const [close, setClose] = useState("");

  useEffect(() => {
    airport.filter((index) => {
      if (index.local === route.params.selectDeparture) {
        setAcronymDeparture(index.acronym);
      }
    });
    airport.filter((index) => {
      if (index.local === route.params.selectArrival) {
        setAcronymArrival(index.acronym);
      }
    });

    function getRandomArbitrary(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const getTerminal = getRandomArbitrary(1, 10);
    const getGate = getRandomArbitrary(1, 20);
    const getPlus = getRandomArbitrary(1, 5);
    let getSeat: any = getRandomArbitrary(1, 50);
    let getHour: any = getRandomArbitrary(0, 22);
    let getMinute: any = getRandomArbitrary(0, 59);

    getHour = getHour.toFixed();
    getMinute = getMinute.toFixed();

    let minuteClose = Number(getMinute) + 30;
    const minuteD = Number(getMinute) + 10;
    let arrHour = Number(getHour) + 10;
    const depHour = Number(getHour) + 1;

    arrHour = arrHour > 23 ? (arrHour = 23) : arrHour;
    minuteClose = minuteClose >= 60 ? (minuteClose = 59) : minuteClose;

    const hourTime = `${getHour < 10 ? `0${getHour}` : getHour}:${
      getMinute < 10 ? `0${getMinute}` : getMinute
    }`;

    const closeTime = `${
      getHour < 10 ? `0${getHour}` : getHour
    }:${minuteClose}`;

    const hourArr = `${arrHour < 10 ? `0${arrHour}` : arrHour}:${
      minuteD < 10 ? `0${minuteD}` : minuteD
    }`;

    const hourDesp = `${depHour < 10 ? `0${depHour}` : depHour}:${
      minuteD < 10 ? `0${minuteD}` : minuteD
    }`;

    getSeat =
      getSeat < 10 ? `0${getSeat.toFixed()}` : String(getSeat.toFixed());

    setTerminal(String(getTerminal.toFixed()));
    setGate(String(getGate.toFixed()));
    setPlus(String(getPlus.toFixed()));
    setSeat(getSeat);
    setHour(hourTime);
    setDepartureHour(hourDesp);
    setArrivalHour(hourArr);
    setClose(closeTime);
  }, []);

  return (
    <S.Container>
      <S.BoardingPass>
        <S.Title>Cartão de embarque</S.Title>

        <S.Ticket>
          <S.FlightInfo>
            <S.ContainerDate>
              <S.FlightNumber>
                <S.Flight>Voo</S.Flight>
                <S.Number>RS995</S.Number>
              </S.FlightNumber>
              <S.FlightDate>
                <S.Date>Data</S.Date>
                <S.NumberDate>{route.params.fdate}</S.NumberDate>
              </S.FlightDate>
            </S.ContainerDate>
            <S.ContainerInfoFlight>
              <S.Departure>
                <S.LocalDeparture>
                  {route.params.selectDeparture}
                </S.LocalDeparture>
                <S.AirportDeparture>{acronymDeparture}</S.AirportDeparture>
                <S.HourDeparture>{departureHour}</S.HourDeparture>
              </S.Departure>
              <S.IconView>
                <Ionicons
                  name="airplane"
                  size={24}
                  color="rgba(0, 0, 0, 0.8)"
                />
              </S.IconView>
              <S.Arrival>
                <S.LocalArrival>{route.params.selectArrival}</S.LocalArrival>
                <S.AirportArrival>{acronymArrival}</S.AirportArrival>
                <S.TimeArrival>
                  <S.HourArrival>{arrivalHour}</S.HourArrival>
                  <S.TimePlusArrival>+{plus}</S.TimePlusArrival>
                </S.TimeArrival>
              </S.Arrival>
            </S.ContainerInfoFlight>
          </S.FlightInfo>

          <S.Dividir />

          <S.PassangerInfo>
            <S.PassangerName>
              <S.Passanger>Passageiro</S.Passanger>
              <S.Name>{route.params.name}</S.Name>
            </S.PassangerName>
            <S.SeatContainer>
              <S.Seat>Assento</S.Seat>
              <S.SeatNumber>{seat}A</S.SeatNumber>
            </S.SeatContainer>
          </S.PassangerInfo>

          <S.Dividir />

          <S.BoardingInfo>
            <S.ContainerBoardingInfo>
              <S.BoardingInfoContainer>
                <S.BoardingTimeContainer>
                  <S.BoardingTimeText>Embarque</S.BoardingTimeText>
                  <S.BTimeContainer>
                    <S.BTimeText>{hour}</S.BTimeText>
                  </S.BTimeContainer>
                </S.BoardingTimeContainer>
                <S.TerminalContainer>
                  <S.TerminalText>Terminal</S.TerminalText>
                  <S.TerminalNumber>{terminal}</S.TerminalNumber>
                </S.TerminalContainer>
                <S.GateContainer>
                  <S.GateText>Portão</S.GateText>
                  <S.GateNumber>{gate}</S.GateNumber>
                </S.GateContainer>
              </S.BoardingInfoContainer>
              <S.QRCodeContainer>
                <S.QRCode source={qrcode} />
                <S.QRCodeText>Grupo de embarque: 3</S.QRCodeText>
              </S.QRCodeContainer>
            </S.ContainerBoardingInfo>
            <S.AttentionContainer>
              <S.Attention>Atenção:</S.Attention>
              <S.AttentionText> o portão fecha {close}</S.AttentionText>
            </S.AttentionContainer>
          </S.BoardingInfo>
        </S.Ticket>

        <S.Footer>
          Qualquer problema procure o balcão de atendimento da sua companhia
          aérea
        </S.Footer>
      </S.BoardingPass>
    </S.Container>
  );
}
