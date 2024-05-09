import {Stack} from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={navigationOptions.index}/>
      <Stack.Screen name="home" options={navigationOptions.home}/>
      <Stack.Screen name="login" options={navigationOptions.login}/>
    </Stack>
  );
}

const navigationOptions = {
  index: {
    title: "",
    headerShown: false
  },
  home: {
    title: "Home",
    headerShown: false
  },
  login: {
    title: "Login",
    headerShown: false
  }
}
