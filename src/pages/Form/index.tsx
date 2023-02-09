import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { propsStack } from "../../routes/Models";
import { airport } from "../../assets/airport";

import * as S from "./styles";
import { Platform, TouchableWithoutFeedback, Keyboard } from "react-native";

export default function Form() {
  const { navigate } = useNavigation<propsStack>();

  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [fdate, setFDate] = useState("");

  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");

  const [selectDeparture, setSelectDeparture] = useState("");
  const [selectArrival, setSelectArrival] = useState("");

  const handleDateTime = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");

    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate = `${
      tempDate.getDate() < 10 ? `${tempDate.getDate()}` : tempDate.getDate()
    }/${
      tempDate.getMonth() < 10
        ? `0${tempDate.getMonth() + 1}`
        : tempDate.getMonth() + 1
    }/${tempDate.getFullYear()}`;

    // let fTime = `${
    //   tempDate.getHours() < 10 ? `0${tempDate.getHours()}` : tempDate.getHours()
    // }:${
    //   tempDate.getMinutes() < 10
    //     ? `0${tempDate.getMinutes()}`
    //     : tempDate.getMinutes()
    // }`;

    setFDate(fDate);
    // setHour(fTime);
  };

  const showMode = (currentMode: string) => {
    setShow(true);
    setMode(currentMode);
  };

  function handleGenerete() {
    navigate("BoardingPass", {
      name,
      fdate,
      // hour,
      selectDeparture,
      selectArrival,
    });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.Content>
          <S.Title>Formulario do cartão de embarque</S.Title>
          <S.ContainerName>
            <S.InputName
              placeholder="Digite seu nome."
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </S.ContainerName>
          <S.ContainerDateTime>
            <S.Button onPress={() => showMode("date")}>
              <S.ButtonText>selecione data</S.ButtonText>
            </S.Button>
            {/* <S.Button onPress={() => showMode("time")}>
              <S.ButtonText>selecione hora</S.ButtonText>
            </S.Button> */}

            {show && (
              <DateTimePicker
                testID="datetimepicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={handleDateTime}
              />
            )}
          </S.ContainerDateTime>
          <S.LocalContainer>
            <S.LocalDeparture>
              <S.Label>Embarque</S.Label>
              <S.PickerStyle>
                <Picker
                  selectedValue={selectDeparture}
                  style={{ height: 56, width: 328 }}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectDeparture(itemValue)
                  }
                >
                  {airport.map((index) => (
                    <Picker.Item
                      key={index.local}
                      label={index.local}
                      value={index.local}
                    />
                  ))}
                </Picker>
              </S.PickerStyle>
            </S.LocalDeparture>
            <S.LocalArrival>
              <S.Label>Desembarque</S.Label>
              <S.PickerStyle>
                <Picker
                  selectedValue={selectArrival}
                  style={{ height: 56, width: 328 }}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectArrival(itemValue)
                  }
                >
                  {airport.map((index) => (
                    <Picker.Item
                      key={index.local}
                      label={index.local}
                      value={index.local}
                    />
                  ))}
                </Picker>
              </S.PickerStyle>
            </S.LocalArrival>
          </S.LocalContainer>

          <S.ButtonG onPress={handleGenerete}>
            <S.ButtonText>Gerar cartão de embarque</S.ButtonText>
          </S.ButtonG>
        </S.Content>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
