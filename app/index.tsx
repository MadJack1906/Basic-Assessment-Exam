import {Button, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import useLogin from "@/hooks/useLogin";

export default function Home() {
  const {
    email,
    onChangeEmail,
    password,
    onChangePassword,
    errors,
    login
  } = useLogin()

  return (
    <SafeAreaView
      style={styles.container}
    >
      <View style={[styles.card, styles.cardShadow]}>
        <Text style={styles.title}>
          Login
        </Text>

        <View style={styles.inputContainer}>
          {/* Email */}
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>
              Email:
            </Text>

            <TextInput
              inputMode="email"
              keyboardType="email-address"
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder='Enter your email here'/>

            {
              errors.email &&
              <Text style={styles.error}>
                { errors.email }
              </Text>
            }
          </View>

          {/* Password */}
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>
              Password:
            </Text>

            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={onChangePassword}
              value={password}
              placeholder='Enter your password here'/>

            {
              errors.password &&
              <Text style={styles.error}>
                { errors.password }
              </Text>
            }
          </View>
        </View>

        <Button
          title={'Sign In'}
          onPress={login}/>
      </View>
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

  card: {
    backgroundColor: "white",
    width: "100%",
    padding: 30,
    borderRadius: 20,
    gap: 30,
  },

  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  title: {
    fontWeight: "600",
    fontSize: 18,
  },

  inputContainer: {
    gap: 10,
  },

  inputWrapper: {
    gap: 5,
  },

  inputLabel: {
    fontWeight: "500",
    fontSize: 14,
  },

  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 7,
  },

  error: {
    fontSize: 12,
    color: '#ff0505',
  },
})
