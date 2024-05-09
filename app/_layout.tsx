import {Stack} from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={navigationOptions.home}/>
    </Stack>
  );
}

const navigationOptions = {
  home: {
    title: "Home",
    headerShown: false
  }
}
