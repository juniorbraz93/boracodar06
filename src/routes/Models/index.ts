import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";

export type propsNavigationStack = {
  Welcome: undefined;
  Form: undefined;
  BoardingPass: {
    name: string;
    fdate: string;
    // hour: string;
    selectDeparture: string;
    selectArrival: string;
  };
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
