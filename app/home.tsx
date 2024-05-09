import {Button, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import useLogin from "@/hooks/useLogin";
import {useRouter} from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text>Home</Text>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },


})
