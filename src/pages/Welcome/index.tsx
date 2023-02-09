import React from "react";
import { useNavigation } from "@react-navigation/native";
import AnimatedLottieView from "lottie-react-native";

import * as S from "./styles";
import planeAnimation from "./plane.json";
import { propsStack } from "../../routes/Models";

export default function Welcome() {
  const { navigate } = useNavigation<propsStack>();

  function handlerNavigation() {
    navigate("Form");
  }

  return (
    <S.Container>
      <S.Header>
        <AnimatedLottieView autoPlay source={planeAnimation} loop />
      </S.Header>
      <S.Content>
        <S.Title>Bem Vindo</S.Title>
        <S.SubTitle>Sua cartão de embarque na palma da sua mão</S.SubTitle>
      </S.Content>
      <S.Footer>
        <S.Button onPress={handlerNavigation}>
          <S.ButtonText>Entrar</S.ButtonText>
        </S.Button>
      </S.Footer>
    </S.Container>
  );
}
