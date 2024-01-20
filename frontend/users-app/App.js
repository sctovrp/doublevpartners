import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { UsersFlatList } from "./src/components/search/user";
import { SearchUserInput } from "./src/components/search/searchUserInput";

import { Provider, useSelector } from "react-redux";
import store from "./src/store/store";
import { FindGithubInput } from "./src/components/find/findGithubInput";
import { GithubFlatlist } from "./src/components/find/github";
import { UserInfoItems } from "./src/components/utils/userInfo";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold_Italic,
  Poppins_900Black,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { ToggleDisplaySearch } from "./src/components/toggleDisplaySearch/toggleDisplaySearch";
import { DisplayView } from "./src/components/displayView/displayView";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_900Black,
    Poppins_600SemiBold_Italic,
    Poppins_500Medium,
    Poppins_800ExtraBold,
  });


  return (
    <Provider store={store}>
      <DisplayView></DisplayView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
